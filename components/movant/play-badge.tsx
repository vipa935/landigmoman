'use client'

import { useState } from 'react'
import { PLAY_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

// Insignia oficial «Disponible en Google Play» (archivo public/google-play-badge.png, descargado de Google sin modificar).
// Si el archivo faltara, se muestra un enlace de texto en lugar de una imagen rota.
export function PlayBadge({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Disponible en Google Play"
      className={cn('inline-flex items-center transition-transform duration-300 hover:-translate-y-0.5', className)}
    >
      {failed ? (
        <span className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground">
          Disponible en Google Play
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/google-play-badge.png"
          alt="Disponible en Google Play"
          className="h-14 w-auto"
          onError={() => setFailed(true)}
        />
      )}
    </a>
  )
}
