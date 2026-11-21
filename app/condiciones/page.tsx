import type { Metadata } from 'next'
import { LegalPage } from '@/components/movant/legal-page'
import { CONTACT_EMAIL, OWNER, TERMS_UPDATE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Condiciones de uso · Moman',
  description: 'Reglas de uso de Moman: qué puedes hacer, qué no, planes y límites, y cuándo podemos suspender una cuenta.',
  alternates: { canonical: '/condiciones' },
}

export default function Condiciones() {
  return (
    <LegalPage title="Condiciones de uso" updated={TERMS_UPDATE}>
      <p>
        Estas condiciones regulan el uso de Moman (la aplicación y la web moman.es). Al crear una cuenta o usar la app
        las aceptas. Si no estás de acuerdo con ellas, no la uses.
      </p>

      <h2>Quién ofrece Moman</h2>
      <p>
        {OWNER.name}
        {OWNER.nif ? `, con NIF ${OWNER.nif}` : ''}
        {OWNER.address ? ` y domicilio en ${OWNER.address}` : ''}. Contacto:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Qué es Moman</h2>
      <p>
        Moman es una herramienta para llevar el control de tus vehículos: mantenimientos, repostajes, gastos, avisos y
        documentos. Los datos que introduces son tuyos y tú eres responsable de que sean correctos. Cómo tratamos tus
        datos personales se explica en la <a href="/privacidad">política de privacidad</a>.
      </p>

      <h2>Tu cuenta</h2>
      <ul>
        <li>Debes tener al menos 14 años. Moman no está dirigida a menores de esa edad.</li>
        <li>Debes facilitar un correo electrónico válido y mantener tus datos de acceso en secreto. Eres responsable de lo que se haga desde tu cuenta.</li>
        <li>Puedes eliminar tu cuenta cuando quieras desde la app o siguiendo los pasos de la página «Eliminar cuenta».</li>
      </ul>

      <h2>Planes y límites</h2>
      <p>
        El plan Free es gratuito e incluye un vehículo, 3 lecturas del escáner al mes y 25 MB de adjuntos. El plan Premium
        aún no está disponible; cuando lo esté, su precio y sus condiciones se mostrarán antes de contratarlo. Los
        límites de cada plan pueden cambiar, pero si los reducimos no borraremos nada de lo que ya tengas guardado.
      </p>

      <h2>Compartir un vehículo</h2>
      <p>
        Con Premium podrás invitar a otra persona a un vehículo tuyo, como colaboradora (puede ver y anotar) o solo para
        ver. Tú decides con quién y con qué permiso, y eres responsable de a quién invitas: la persona invitada verá todos
        los datos y documentos de ese vehículo, también los de compra. Solo debes compartir vehículos de los que seas
        propietario o tengas derecho a compartir. Puedes quitar el acceso cuando quieras y la persona invitada puede
        salir cuando quiera. Si dejas de tener Premium, las personas invitadas dejan de ver el vehículo; no se borra nada
        y vuelven a verlo si lo recuperas. Quien recibe una invitación no se convierte en propietario del vehículo.
      </p>

      <h2>Normas de uso</h2>
      <p>Usa Moman de forma lícita y sin perjudicar a otras personas ni al servicio. En particular, no puedes:</p>
      <ul>
        <li>Intentar acceder a cuentas, datos o sistemas de otras personas, ni eludir las medidas de seguridad o los límites de tu plan.</li>
        <li>Interferir con el funcionamiento o la seguridad de Moman, por ejemplo, mediante automatización no autorizada o un número excesivo de solicitudes.</li>
        <li>Usar el escáner para fines distintos de leer documentación de tus vehículos o para eludir los límites de tu plan.</li>
        <li>Subir contenido ilegal, que infrinja derechos de terceros, contenga virus o se utilice para acosar, amenazar o suplantar a alguien.</li>
        <li>Hacerte pasar por otra persona o proporcionar datos engañosos para crear una cuenta.</li>
        <li>Usar las sugerencias o comentarios para acosar o enviar publicidad no solicitada.</li>
        <li>Copiar, redistribuir o revender Moman o partes de la app sin autorización. Esto no limita tus derechos sobre tus propios datos.</li>
      </ul>

      <h2>Suspensión y cancelación de cuentas</h2>
      <p>
        Si incumples estas condiciones, podemos advertirte, limitar algunas funciones, suspender tu cuenta o cancelarla,
        tanto si es del plan Free como de pago. Cuando sea posible te avisaremos antes por correo y te daremos la
        oportunidad de corregirlo. En casos graves o urgentes (seguridad, actividad ilegal o un uso que afecte al servicio
        o a otras personas) podremos actuar sin aviso previo. Si cancelamos tu cuenta, salvo que la ley lo impida podrás
        pedirnos tus datos escribiendo a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Si crees que nos hemos
        equivocado, escríbenos y lo revisaremos.
      </p>

      <h2>Tus contenidos</h2>
      <p>
        Lo que guardas en Moman sigue siendo tuyo. Solo nos das permiso para almacenarlo y mostrártelo, que es necesario
        para que la app funcione. Si nos envías una sugerencia, podemos usarla para mejorar Moman sin que tengamos que
        pagarte nada por ello.
      </p>

      <h2>Avisos y datos orientativos</h2>
      <p>
        Los avisos de mantenimiento, ITV, seguro u otros, los cálculos de consumo y gasto, y las imágenes orientativas de
        los vehículos son una ayuda y pueden contener errores. No sustituyen el manual del fabricante, la revisión de un
        taller ni los plazos oficiales. Revisa siempre los datos importantes, como las fechas de vencimiento.
      </p>

      <h2>Disponibilidad y copia de tus datos</h2>
      <p>
        Procuramos que Moman funcione de forma continua, pero no podemos garantizar que no haya interrupciones o errores.
        Puede haber paradas por mantenimiento o por causas ajenas a nosotros. Te recomendamos exportar tus datos a Excel de
        vez en cuando. Qué pasaría si Moman dejara de funcionar se explica en la política de privacidad.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        En la medida que permita la ley, no nos hacemos responsables de los daños que se deriven de un uso incorrecto de
        la app, de datos introducidos con errores, de la pérdida de plazos o de interrupciones del servicio. Esto no limita
        los derechos que la ley reconoce a las personas consumidoras ni nuestra responsabilidad cuando la ley no permita
        excluirla.
      </p>

      <h2>Cambios en estas condiciones</h2>
      <p>
        Podemos modificar estas condiciones. Si el cambio es importante, te avisaremos dentro de la app o por correo antes
        de que se aplique, y actualizaremos la fecha de arriba. Si sigues usando Moman después, se entiende que las aceptas.
      </p>

      <h2>Ley aplicable</h2>
      <p>
        Estas condiciones se rigen por la ley española. Si eres consumidor, conservas los derechos que te reconoce la ley y
        puedes acudir a los tribunales de tu domicilio.
      </p>
    </LegalPage>
  )
}
