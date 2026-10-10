import Image from 'next/image'
import { Bell, ChevronRight, Plus, ShieldCheck, Layers } from 'lucide-react'
import { vehicles } from '@/lib/movant-data'
import { PhoneFrame } from './phone-frame'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const features = [
  { icon: Layers, title: 'Todos tus vehículos', text: 'Coches, motos, furgonetas, camiones y autocaravanas, cada uno con su ficha.' },
  { icon: Bell, title: 'Avisos a tiempo', text: 'Te recordamos ITV, seguro y revisiones por fecha o por kilómetros, también con la app cerrada.' },
  { icon: ShieldCheck, title: 'Historial completo', text: 'Todo el historial en un solo sitio, y puedes sacarlo en PDF o Excel.' },
]

function VehicleCard({ vehicle }: { vehicle: (typeof vehicles)[number] }) {
  return (
    <a
      href="#mantenimiento"
      className="group flex items-center gap-3 rounded-2xl bg-card p-2.5 pr-3 shadow-[0_2px_10px_-4px_rgba(10,22,40,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(31,107,255,0.5)]"
    >
      <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-muted">
        <Image src={vehicle.image} alt={vehicle.name} fill sizes="64px" className="object-cover" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="truncate text-sm font-semibold text-card-foreground">{vehicle.name}</p>
        <div className="flex items-center gap-2">
          <span className="rounded-md border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-card-foreground">
            {vehicle.plate}
          </span>
          <span className="truncate text-[11px] text-slate-500">{vehicle.km}</span>
        </div>
      </div>
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <ChevronRight className="size-4" aria-hidden="true" />
      </span>
    </a>
  )
}

export function VehiclesSection() {
  return (
    <section id="vehiculos" className="relative scroll-mt-16 py-24 md:py-32" aria-labelledby="vehiculos-title">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <SectionHeading
            titleId="vehiculos-title"
            eyebrow="Mis vehículos"
            title="Gestiona todos tus vehículos en un solo lugar"
            description="Añade cada vehículo con su foto, matrícula y kilometraje. Accede a su ficha completa con un solo toque."
          />
          <ul className="flex flex-col gap-5">
            {features.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 100} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-surface text-primary">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={150}>
          <PhoneFrame>
            <div className="flex flex-col gap-4 px-4 pt-4 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-card-foreground">
                    Vehículos
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">Todos tus vehículos</p>
                </div>
                <span className="flex size-9 items-center justify-center rounded-full bg-brand-grad text-white shadow-[0_6px_20px_-6px_rgba(31,107,255,0.9)]">
                  <Plus className="size-4" aria-hidden="true" />
                  <span className="sr-only">Añadir vehículo</span>
                </span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {vehicles.map((vehicle) => (
                  <li key={vehicle.plate}>
                    <VehicleCard vehicle={vehicle} />
                  </li>
                ))}
              </ul>
            </div>
          </PhoneFrame>
        </Reveal>
      </div>
    </section>
  )
}
