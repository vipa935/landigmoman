'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/lib/site'

type Props = { plan: 'pro' | 'flotas'; planName: string }

const EMAIL_OK = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/

// Botón «Me interesa»: deja el correo (con consentimiento) para avisar cuando el plan esté disponible.
export function PlanInterest({ plan, planName }: Props) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [trap, setTrap] = useState('') // campo oculto: un robot lo rellena, una persona no
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle')
  const [error, setError] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!EMAIL_OK.test(email.trim())) return setError('Revisa el correo: no parece una dirección válida.')
    if (!consent) return setError('Marca la casilla para que podamos avisarte.')
    if (trap) return setState('done') // robot: se finge éxito y no se guarda nada
    setState('sending')
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/register_web_interest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify({ p_email: email.trim(), p_plan: plan }),
      })
      if (!res.ok) {
        const text = await res.text().catch(() => '')
        setState('idle')
        if (/CORREO_NO_VALIDO/.test(text)) return setError('Revisa el correo: no parece una dirección válida.')
        if (/DEMASIADAS_SOLICITUDES/.test(text)) return setError('Hay muchas solicitudes ahora mismo. Inténtalo de nuevo en un rato.')
        return setError('No se ha podido guardar. Inténtalo de nuevo más tarde.')
      }
      setState('done')
    } catch {
      setState('idle')
      setError('No se ha podido guardar. Revisa tu conexión e inténtalo de nuevo.')
    }
  }

  if (state === 'done') {
    return (
      <p className="flex items-start gap-2 rounded-2xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-foreground" role="status">
        <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
        Hecho. Te avisaremos en {email.trim()} cuando el plan {planName} esté disponible.
      </p>
    )
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-full border border-primary/60 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/10"
      >
        Me interesa
      </button>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3" noValidate>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
        Tu correo
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="tucorreo@ejemplo.com"
          className="rounded-xl border border-white/15 bg-background/60 px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
        />
      </label>
      {/* Campo trampa para robots: oculto a la vista y a los lectores de pantalla */}
      <input type="text" name="web" tabIndex={-1} autoComplete="off" value={trap} onChange={e => setTrap(e.target.value)} className="hidden" aria-hidden="true" />
      <label className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
        <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-0.5 size-4 shrink-0 accent-[#19c2ee]" />
        <span>
          Acepto que me avisen por correo cuando el plan {planName} esté disponible. Puedo pedir que borren mi correo escribiendo a hola@moman.es.
          Más información en la <a href="/privacidad" className="underline underline-offset-2 hover:text-foreground">política de privacidad</a>.
        </span>
      </label>
      {error && <p className="text-sm text-red-400" role="alert">{error}</p>}
      <button
        type="submit"
        disabled={state === 'sending'}
        className="inline-flex items-center justify-center rounded-full bg-brand-grad px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
      >
        {state === 'sending' ? 'Guardando…' : 'Avísame'}
      </button>
    </form>
  )
}
