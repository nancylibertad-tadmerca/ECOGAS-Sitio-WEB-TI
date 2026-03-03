

## Incrustar el Aviso de Privacidad de ECOGAS

### Cambio
Reemplazar el placeholder "Contenido Pendiente" en `src/pages/legal/AvisoPrivacidad.tsx` con el texto completo del aviso de privacidad obtenido de ecogas.com.mx.

### Detalle tecnico

**Archivo a modificar:** `src/pages/legal/AvisoPrivacidad.tsx`

1. Eliminar el bloque placeholder (icono FileText, "Contenido Pendiente", boton de contacto).
2. Reemplazar con el contenido completo del aviso de privacidad usando elementos HTML semanticos:
   - Subtitulo "ECOGAS MEXICO, S. DE R.L. DE C.V." como `h2`.
   - Parrafo introductorio con referencia a la Ley Federal de Proteccion de Datos.
   - Secciones con `h3` para cada apartado: Datos Personales, Datos Sensibles, Datos de Menores, Datos de Imagen, Finalidades Primarias, Finalidades Secundarias, Transferencia, Pagos, Medidas de Seguridad, Comite de Privacidad, Derechos ARCO, Revocacion de Consentimiento, Limitacion de Uso, Cookies, Modificaciones.
   - Listas con `ul/li` para los incisos de finalidades primarias (a-p) y derechos ARCO.
   - Correos electronicos como enlaces `mailto:`.
   - Fecha de ultima actualizacion: Septiembre 2025.
3. Aplicar clases de tipografia con `prose` de Tailwind para una lectura comoda, o bien usar clases como `space-y-4`, `text-muted-foreground`, etc., consistentes con el resto del sitio.
4. No se incluira la imagen de la tabla de transferencias (es una imagen externa de ecogas.com.mx); en su lugar se pondra una nota indicando que el detalle esta disponible en el sitio oficial de ECOGAS con un enlace.

### Secciones del aviso a incluir
- Datos Personales que trata ECOGAS
- Datos Personales Sensibles
- Datos de Menores e Incapaces
- Datos de Imagen
- Finalidades Primarias (16 incisos, a-p)
- Finalidades Secundarias
- Transferencia de Datos Personales
- Pagos
- Medidas de Seguridad
- Comite de Privacidad
- Derechos ARCO
- Mecanismos para Revocar Consentimiento
- Limitar el Uso o Divulgacion
- Cookies y Web Beacons
- Modificaciones al Aviso
- Ultima actualizacion: Septiembre 2025

