import { Check } from 'lucide-react'
import { APP_URL } from '@/lib/site'
import { cn } from '@/lib/utils'
import { PlanInterest } from './plan-interest'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

type Plan = {
  id: string
  name: string
  badge: string
  available: boolean
  price: string
  priceNote: string
  intro: string
  items: string[]
}

// Solo el plan Free está disponible hoy. Pro y Flotas se muestran como próximos, sin botón de compra.
const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    badge: 'Disponible ahora',
    available: true,
    price: '0 €',
    priceNote: 'Sin coste y sin publicidad',
    intro: 'Para llevar tu vehículo al día.',
    items: [
      '1 vehículo',
      'Mantenimientos, repostajes, gastos y documentos',
      'Avisos y notificaciones con la app cerrada',
      'Escáner de documentos: 3 lecturas al mes y 3 extra',
      'Exportar tus datos a Excel',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Muy pronto',
    available: false,
    price: '2,99 €/mes',
    priceNote: 'o 19,99 € al año',
    intro: 'Para quien tiene más de un vehículo.',
    items: ['Todo lo de Free', 'Hasta 5 vehículos', 'Más lecturas del escáner de documentos', 'Transferir un vehículo a otra persona con un código QR'],
  },
  {
    id: 'flotas',
    name: 'Flotas',
    badge: 'Más adelante',
    available: false,
    price: '9,99 €/mes',
    priceNote: 'Para autónomos y pequeñas empresas',
    intro: 'Pensado para vehículos de trabajo.',
    items: ['Todo lo de Pro', 'Desglose de IVA', 'Gestión de conductores'],
  },
]

export function PlansSection() {
  return (
    <section id="planes" className="relative scroll-mt-16 py-24 md:py-32" aria-labelledby="planes-title">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          titleId="planes-title"
          eyebrow="Planes"
          title="Empieza gratis. Crece cuando lo necesites."
          description="Hoy puedes usar Moman gratis. Los planes de pago llegarán más adelante: si alguno te interesa, pulsa «Me interesa» y te avisamos."
        />
        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              as="li"
              key={plan.id}
              delay={i * 80}
              className={cn(
                'flex flex-col gap-5 rounded-3xl border bg-surface p-6',
                plan.available ? 'border-primary/50 shadow-[0_20px_50px_-30px_rgba(25,194,238,0.6)]' : 'border-white/10',
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <span
                  className={cn(
                    'rounded-full px-3 py-1 text-xs font-semibold',
                    plan.available ? 'bg-brand-grad text-white' : 'border border-white/15 text-muted-foreground',
                  )}
                >
                  {plan.badge}
                </span>
              </div>
              <div>
                <p className="text-3xl font-extrabold tracking-tight text-foreground">{plan.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">{plan.priceNote}</p>
              </div>
              <p className="text-sm text-muted-foreground">{plan.intro}</p>
              <ul className="flex flex-1 flex-col gap-3">
                {plan.items.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              {plan.available ? (
                <a
                  href={APP_URL}
                  className="inline-flex items-center justify-center rounded-full bg-brand-grad px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Abrir Moman
                </a>
              ) : (
                <PlanInterest plan={plan.id as 'pro' | 'flotas'} planName={plan.name} />
              )}
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-xs text-muted-foreground">
          Precios orientativos: pueden cambiar antes del lanzamiento de los planes de pago.
        </p>
      </div>
    </section>
  )
}
