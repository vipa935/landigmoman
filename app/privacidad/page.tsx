import type { Metadata } from 'next'
import { LegalPage } from '@/components/movant/legal-page'
import { CONTACT_EMAIL, OWNER, SUPABASE_REGION } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de privacidad · Moman',
  description: 'Qué datos trata Moman, para qué, con quién se comparten y cómo ejercer tus derechos.',
}

export default function Privacidad() {
  return (
    <LegalPage title="Política de privacidad">
      <p>
        Esta política explica qué datos trata Moman (la aplicación y la web moman.es), para qué los usa, con quién los
        comparte y qué derechos tienes.
      </p>

      <h2>Responsable</h2>
      <p>
        {OWNER.name}
        {OWNER.nif ? `, con NIF ${OWNER.nif}` : ''}
        {OWNER.address ? ` y domicilio en ${OWNER.address}` : ''}. Contacto:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Qué datos tratamos</h2>
      <ul>
        <li><strong>Cuenta:</strong> tu correo electrónico y tu contraseña (la contraseña la gestiona el servicio de autenticación y no la vemos en claro).</li>
        <li><strong>Lo que introduces en la app:</strong> tus vehículos (nombre, marca, modelo, matrícula, bastidor, kilómetros, neumáticos, seguro, etc.), mantenimientos, repostajes, gastos, avisos y los documentos o fotos que adjuntes.</li>
        <li><strong>Ajustes de notificaciones:</strong> la hora elegida, tu zona horaria y la suscripción de notificaciones de tu navegador o dispositivo.</li>
        <li><strong>Uso del escáner:</strong> un contador de lecturas por día (el límite es de 20 al día por usuario).</li>
        <li><strong>Plan y aviso de Premium:</strong> tu plan (gratuito o de pago) y, cuando intentas añadir más vehículos de los que permite el plan gratuito, un registro de cuántas veces has visto la pantalla «Moman Premium, muy pronto» y cuántos vehículos tienes, para medir el interés. Si además pulsas «Avísame cuando esté disponible», guardamos tu correo electrónico, con tu consentimiento, para avisarte del lanzamiento de Moman Premium y enviarte comunicaciones sobre él. Puedes cancelar el aviso desde la misma pantalla y tu correo se borra.</li>
      </ul>

      <h2>Escáner de documentos con inteligencia artificial</h2>
      <p>
