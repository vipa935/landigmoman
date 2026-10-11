import type { Metadata, Viewport } from 'next'
import '@fontsource-variable/manrope'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moman · Mantenimiento y gestión de vehículos',
  description:
    'Moman es la app para gestionar el mantenimiento, los gastos y la documentación de todos tus vehículos. Tu vehículo, siempre en buenas manos.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#071A3A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
