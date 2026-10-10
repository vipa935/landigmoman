import type { Metadata } from 'next'
import { LegalPage } from '@/components/movant/legal-page'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Eliminar cuenta · Moman',
  description: 'Cómo pedir la eliminación de tu cuenta de Moman y de todos tus datos.',
}

export default function EliminarCuenta() {
  return (
    <LegalPage title="Eliminar tu cuenta">
      <p>Puedes pedir en cualquier momento que eliminemos tu cuenta de Moman y todos tus datos.</p>

      <h2>Cómo pedirlo</h2>
      <p>
        Escribe a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> desde el correo con el que te registraste, con
        el asunto «Eliminar cuenta Moman».
      </p>

      <h2>Qué se borra</h2>
      <ul>
        <li>Tu cuenta y tu acceso.</li>
        <li>Tus vehículos, mantenimientos, repostajes, gastos y avisos.</li>
        <li>Los documentos y fotos que hayas adjuntado.</li>
        <li>Tus ajustes y las suscripciones de notificaciones.</li>
      </ul>

      <h2>Plazo</h2>
      <p>Atenderemos tu solicitud como máximo en un mes. Antes de eliminar la cuenta puedes exportar tus datos a Excel desde Ajustes de la app.</p>
    </LegalPage>
  )
}
