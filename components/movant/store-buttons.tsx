import { ArrowRight } from 'lucide-react'
import { APP_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

type StoreButtonsProps = {
  className?: string
}

// Moman todavía no está en Google Play: el acceso es abrir la app desde el navegador e instalarla como PWA.
export function StoreButtons({ className }: StoreButtonsProps) {
  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <a
        href={APP_URL}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-grad px-8 py-3.5 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgba(31,107,255,0.8)] transition-all duration-300 hover:-translate-y-0.5"
      >
        Abrir Moman
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </a>
      <p className="max-w-md text-pretty text-center text-sm leading-relaxed text-muted-foreground">
        Funciona desde el navegador del móvil y puedes instalarla en la pantalla de inicio (menú del navegador →
        «Añadir a pantalla de inicio»). Estamos preparando la versión para Google Play.
      </p>
    </div>
  )
}
