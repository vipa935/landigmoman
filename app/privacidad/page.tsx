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
        <li><strong>Transferencia de vehículos (Premium):</strong> si transfieres un vehículo, guardamos el código de la transferencia, su caducidad (30 minutos), su estado y la fecha. La persona que lo acepta recibe una copia de los datos que tú elijas (ficha del vehículo, mantenimientos, repostajes y fecha de la ITV) y no recibe tu identidad, el seguro, las facturas o fotos adjuntas, tus notas ni el resto de tus avisos. Tú conservas tu copia.</li>
        <li><strong>Plan y avisos de Premium y Flotas:</strong> tu plan (gratuito o de pago) y, cuando intentas añadir más vehículos de los que permite tu plan, un registro de cuántas veces has visto la pantalla «Moman Premium, muy pronto» (plan Free) o «Plan Flotas, más adelante» (plan Premium) y cuántos vehículos tienes, para medir el interés. Si además pulsas «Avísame», guardamos tu correo electrónico, con tu consentimiento, para avisarte del lanzamiento de Moman Premium o del plan Flotas (según la pantalla en la que lo pidas) y enviarte comunicaciones comerciales sobre él (novedades y ofertas), como máximo 3 al mes. Puedes cancelar cada aviso en la app, en Ajustes → Privacidad y cuenta, y tu correo se borra.</li>
        <li><strong>«Me interesa» de la web:</strong> si en moman.es pulsas «Me interesa» bajo un plan de pago, guardamos el correo electrónico que escribas y el plan que te interesa, con tu consentimiento (la casilla que marcas), para avisarte cuando ese plan esté disponible y enviarte comunicaciones comerciales sobre él (novedades y ofertas), como máximo 3 al mes. No lo usamos para nada más. Puedes darte de baja en cualquier momento con el enlace de cada correo o escribiendo a {CONTACT_EMAIL}, y borraremos tu correo.</li>
      </ul>

      <h2>Escáner de documentos con inteligencia artificial</h2>
      <p>
        Cuando usas el escáner, la foto o el PDF que eliges se envía a Anthropic, el proveedor de la inteligencia
        artificial, únicamente para leer su contenido y devolverte los datos. El escáner no guarda esa foto ni ese PDF en
        nuestros servidores. Si además decides adjuntarlo a un registro, se guarda como cualquier otro adjunto. Moman
        está diseñado para ignorar datos personales del titular del documento (nombre, DNI, dirección, cuentas), pero
        te recomendamos no enviar documentos que no necesites. Puedes consultar cómo trata los datos Anthropic en su
        política de privacidad. Siempre revisas los datos antes de guardarlos.
      </p>

      <h2>Imágenes orientativas</h2>
      <p>
        Para mostrar una imagen orientativa de tu vehículo, la app consulta Wikipedia y Wikimedia Commons con la marca,
        el modelo y el año (no con datos personales). Como en cualquier consulta a internet, esos servicios pueden ver la
        dirección IP de tu dispositivo.
      </p>

      <h2>Con quién compartimos los datos</h2>
      <ul>
        <li><strong>Supabase:</strong> base de datos, autenticación y almacenamiento de archivos. {SUPABASE_REGION ? ` Región del proyecto: ${SUPABASE_REGION}.` : ''}</li>
        <li><strong>Cloudflare:</strong> alojamiento de la web y de la app.</li>
        <li><strong>Resend:</strong> envío de los correos de tu cuenta (confirmación y cambio de contraseña), para lo que necesita tu dirección de correo.</li>
        <li><strong>Anthropic:</strong> lectura de documentos con el escáner (solo cuando lo usas).</li>
        <li><strong>Servicios de notificaciones push</strong> del navegador o del sistema (por ejemplo Google, Mozilla o Apple), solo si activas las notificaciones.</li>
        <li><strong>Wikimedia:</strong> imágenes orientativas.</li>
      </ul>
      <p>No vendemos tus datos ni mostramos publicidad.</p>

      <h2>Para qué y con qué base</h2>
      <p>
        Tratamos tus datos para prestarte el servicio que has solicitado al crear tu cuenta: guardar tu información,
        enviarte los avisos y generar tus informes. Las notificaciones y el escáner solo funcionan si tú los activas o
        los usas. Los avisos y las comunicaciones comerciales sobre Premium y Flotas se basan en tu consentimiento, que
        puedes retirar en cualquier momento.
      </p>

      <h2>Cookies y almacenamiento</h2>
      <p>
        La web no usa cookies de seguimiento ni herramientas de analítica. La app guarda en tu dispositivo la sesión y
        una copia temporal de tus datos para ir más rápido, necesarias para que funcione.
      </p>

      <h2>Cuánto tiempo los conservamos</h2>
      <p>Mientras mantengas tu cuenta. Si la eliminas, borramos tus datos (consulta cómo en la página «Eliminar cuenta»).</p>

      <h2>Si Moman deja de funcionar</h2>
      <p>
        Si algún día tuviéramos que cerrar el servicio, te avisaremos con antelación (al menos 30 días) por correo y
        dentro de la app. Durante ese plazo podrás exportar tus datos a Excel y sacar tus informes en PDF. Pasado el
        plazo, borraremos los datos de las cuentas.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes acceder a tus datos, rectificarlos, pedir su supresión, oponerte a su tratamiento, limitarlo o pedir su
        portabilidad. En la app puedes exportar tus datos a Excel y sacar informes en PDF. Para ejercer cualquier
        derecho escribe a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Si crees que no hemos atendido tu
        solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).
      </p>

      <h2>Menores</h2>
      <p>Moman no está dirigida a menores de 14 años.</p>

      <h2>Cambios</h2>
      <p>Si cambiamos esta política, actualizaremos la fecha de arriba.</p>
    </LegalPage>
  )
}
