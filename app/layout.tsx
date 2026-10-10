import type { Metadata, Viewport } from 'next'
import '@fontsource-variable/manrope'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moman · Mantenimiento y gestión de vehículos',
  description:
    'Moman es la app para gestionar el mantenimiento, los gastos y la documentación de todos tus vehículos. Tu vehículo, siempre en buenas manos.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
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
