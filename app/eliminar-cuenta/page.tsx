import type { Metadata } from 'next'
import { LegalPage } from '@/components/movant/legal-page'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Eliminar cuenta · Moman',
  description: 'Cómo eliminar tu cuenta de Moman y todos tus datos, desde la app o por correo.',
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

      <h2>Qué se borra</h2>
      <ul>
        <li>Tu cuenta y tu acceso.</li>
        <li>Tus vehículos, mantenimientos, repostajes, gastos y avisos.</li>
        <li>Los documentos y fotos que hayas adjuntado.</li>
        <li>Tus ajustes y las suscripciones de notificaciones.</li>
