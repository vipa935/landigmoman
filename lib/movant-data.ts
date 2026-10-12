import {
  Bike,
  CalendarCheck,
  Car,
  Caravan,
  ClipboardCheck,
  Droplet,
  Truck,
  Van,
  type LucideIcon,
} from 'lucide-react'

export type VehicleType = 'coche' | 'moto' | 'furgoneta' | 'camion' | 'autocaravana'

export const vehicleTypes: { id: VehicleType; label: string; icon: LucideIcon }[] = [
  { id: 'coche', label: 'Coche', icon: Car },
  { id: 'moto', label: 'Moto', icon: Bike },
  { id: 'furgoneta', label: 'Furgoneta', icon: Van },
  { id: 'camion', label: 'Camión', icon: Truck },
  { id: 'autocaravana', label: 'Autocaravana', icon: Caravan },
]

export const vehicles = [
  {
    name: 'Toyota Corolla',
    type: 'Coche',
    plate: '4821 KLM',
    km: '78.450 km',
    image: '/vehicles/toyota-corolla.png',
    status: 'Al día',
  },
  {
    name: 'Yamaha MT-07',
    type: 'Moto',
    plate: '1593 JHB',
    km: '21.300 km',
    image: '/vehicles/moto.png',
    status: 'Revisión pronto',
  },
  {
    name: 'Renault Trafic',
    type: 'Furgoneta',
    plate: '7364 LPR',
    km: '134.900 km',
    image: '/vehicles/furgoneta.png',
    status: 'Al día',
  },
  {
    name: 'Volvo FH 500',
    type: 'Camión',
    plate: '2205 MCD',
    km: '412.780 km',
    image: '/vehicles/camion.png',
    status: 'ITV en 12 días',
  },
  {
    name: 'Hymer B-Class',
    type: 'Autocaravana',
    plate: '9017 KTS',
    km: '56.120 km',
    image: '/vehicles/autocaravana.png',
    status: 'Al día',
  },
]

export const upcomingMaintenance: {
  title: string
  detail: string
  due: string
  icon: LucideIcon
  urgent?: boolean
}[] = [
  {
    title: 'Cambio de aceite',
    detail: 'A los 80.000 km',
    due: 'Faltan 1.550 km',
    icon: Droplet,
    urgent: true,
  },
  {
    title: 'Revisión anual',
    detail: '15 nov 2026',
    due: 'En 38 días',
    icon: ClipboardCheck,
  },
  {
    title: 'ITV',
    detail: '02 mar 2027',
    due: 'En 145 días',
    icon: CalendarCheck,
  },
]

export const monthlyExpenses = [
  { month: 'May', value: 120 },
  { month: 'Jun', value: 340 },
  { month: 'Jul', value: 180 },
  { month: 'Ago', value: 260 },
  { month: 'Sep', value: 90 },
  { month: 'Oct', value: 410 },
]

export const maintenanceTypes = [
  'Cambio de aceite',
  'Revisión anual',
  'ITV',
  'Neumáticos',
  'Frenos',
  'Batería',
  'Otro',
]

export type ExpensePeriod = '2025' | '2026'

// Mismos bloques y colores que la pantalla Gastos de la app (datos de ejemplo)
export const expenseCategories = [
  { id: 'mantenimiento', label: 'Mantenimiento', color: '#1f6bff' },
  { id: 'averias', label: 'Averías', color: '#ef4444' },
  { id: 'documentos', label: 'Documentos', color: '#f59e0b' },
  { id: 'repostaje', label: 'Repostaje', color: '#10b981' },
] as const

export const expensesByPeriod: Record<ExpensePeriod, Record<string, number>> = {
  '2026': { mantenimiento: 430, averias: 180, documentos: 620, repostaje: 1640 },
  '2025': { mantenimiento: 520, averias: 0, documentos: 590, repostaje: 1980 },
}

export const navLinks = [
  { href: '#vehiculos', label: 'Vehículos' },
  { href: '#mantenimiento', label: 'Mantenimiento' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#anadir', label: 'Añadir' },
  { href: '#gastos', label: 'Gastos' },
  { href: '#planes', label: 'Planes' },
]
