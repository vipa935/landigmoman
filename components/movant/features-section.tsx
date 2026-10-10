import { BellRing, FileSpreadsheet, FileText, Fuel, ImageIcon, ScanLine } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const features = [
  {
    icon: ScanLine,
    title: 'Escáner de documentos',
    text: 'Haz una foto o sube un PDF de una factura, un ticket de gasolinera, el permiso de circulación, la ficha técnica, la póliza o la ITV. Moman rellena los datos y tú los revisas antes de guardar. La lectura la hace una IA y puede equivocarse, por eso siempre confirmas tú.',
  },
  {
    icon: BellRing,
    title: 'Avisos con la app cerrada',
    text: 'Notificaciones en el móvil a la hora que elijas: antes de que venza la ITV o el seguro, y cuando se acerca una revisión por fecha o por kilómetros.',
  },
  {
    icon: Fuel,
    title: 'Repostajes y cargas',
    text: 'Gasolina, diésel, GLP, eléctrico y AdBlue. Consumo medio, precio por litro o kWh y una vista conjunta para híbridos enchufables.',
  },
  {
    icon: FileText,
    title: 'Documentos y adjuntos',
    text: 'Guarda seguro, ITV, impuestos y facturas junto a cada vehículo, y crea el aviso de renovación a partir de la póliza o la ITV.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Informe PDF y Excel',
    text: 'Saca el informe de uno o de todos tus vehículos en PDF, exporta tus datos a Excel e importa tu historial desde una hoja de cálculo.',
  },
  {
    icon: ImageIcon,
    title: 'Foto de tu vehículo',
    text: 'Sube la tuya (el fondo se quita en tu propio móvil) o usa una imagen orientativa según marca, modelo y año.',
  },
]

export function FeaturesSection() {
  return (
    <section id="funciones" className="relative scroll-mt-16 py-24 md:py-32" aria-labelledby="funciones-title">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          titleId="funciones-title"
          eyebrow="Funciones"
          title="Lo que Moman ya hace por ti"
          description="Todo lo que ves aquí funciona hoy en la app."
        />
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 80} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-surface p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-grad text-white">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-xs text-muted-foreground">
          Las pantallas de ejemplo de esta web usan datos ficticios.
        </p>
      </div>
    </section>
  )
}
