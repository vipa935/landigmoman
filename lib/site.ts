// Datos del sitio en un solo lugar. REVISA los marcados con TODO antes de publicar.
export const SITE_URL = 'https://moman.es'

// TODO: dirección real de la app (por ejemplo https://app.moman.es) cuando la muevas de pages.dev
export const APP_URL = 'https://app.moman.es'

// TODO: crea este buzón (Cloudflare Email Routing es gratis) o cambia la dirección
export const CONTACT_EMAIL = 'hola@moman.es'

// Tu nombre (obligatorio). El NIF y el domicilio son opcionales: déjalos en '' mientras no cobres por la app;
// si los rellenas, aparecen en la política de privacidad (hazlo cuando te des de alta como autónomo).
export const OWNER = {
  name: 'Víctor Gallego Padilla',
  nif: '',
  address: '',
}

export const LAST_UPDATE = '18 de octubre de 2026'

// Proyecto de Supabase al que la web envía el «Me interesa» (solo puede llamar a una función que añade el correo).
// La clave «anon» es pública por diseño (es la misma que lleva la app dentro): no da acceso a ningún dato.
export const SUPABASE_URL = 'https://hkvzoqgwdibimpuozwts.supabase.co'
export const SUPABASE_ANON_KEY = 'sb_publishable__zDTpNADM-Ovv8td2qWFnw_e6iZJ0z2'

// Región de tu proyecto de Supabase (Project Settings → General), por ejemplo 'la Unión Europea (Fráncfort)'. Si la dejas vacía, no se menciona en la política.
export const SUPABASE_REGION = ''
