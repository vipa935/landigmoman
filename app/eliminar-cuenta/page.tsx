import type { Metadata } from 'next'
import { LegalPage } from '@/components/movant/legal-page'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Eliminar cuenta · Moman',
  description: 'Cómo eliminar tu cuenta de Moman y todos tus datos, o solo algunos de ellos, desde la app o por correo.',
}

export default function EliminarCuenta() {
  return (
    <LegalPage title="Eliminar tu cuenta">
      <p>Puedes pedir en cualquier momento que eliminemos tu cuenta de Moman y todos tus datos.</p>

      <h2>Cómo hacerlo</h2>
      <p>
        <strong>Desde la app (lo más rápido):</strong> entra en Ajustes → Privacidad y cuenta → «Eliminar mi cuenta», escribe
        ELIMINAR y confirma. Tu cuenta y tus datos se borran en el momento y no se pueden recuperar.
      </p>
      <p>
        <strong>Por correo:</strong> si ya no puedes entrar en la app, escribe a{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> desde el correo con el que te registraste, con el asunto
        «Eliminar cuenta Moman».
      </p>

      <h2>Borrar solo algunos datos</h2>
      <p>
        No hace falta eliminar la cuenta para borrar datos. Desde la app puedes eliminar por separado cada vehículo,
        mantenimiento, repostaje, aviso y documento adjunto, y se borran en el momento. Si prefieres que lo hagamos nosotros,
        escribe a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> desde el correo con el que te registraste,
        indicando qué datos quieres borrar, y lo atenderemos como máximo en un mes.
      </p>

      <h2>Qué se borra al eliminar la cuenta</h2>
      <ul>
        <li>Tu cuenta y tu acceso.</li>
        <li>Tus vehículos, mantenimientos, repostajes, gastos y avisos.</li>
        <li>Los documentos y fotos que hayas adjuntado.</li>
        <li>Tus ajustes y las suscripciones de notificaciones.</li>
      </ul>

      <h2>Plazo</h2>
      <p>Desde la app es inmediato. Si lo pides por correo, atenderemos tu solicitud como máximo en un mes. Antes de eliminar la cuenta puedes exportar tus datos a Excel desde Ajustes → Copia de seguridad.</p>
    </LegalPage>
  )
}
