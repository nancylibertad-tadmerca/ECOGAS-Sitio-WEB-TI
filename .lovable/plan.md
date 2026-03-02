

## Cambiar botón "Contacto" del header a WhatsApp Business

### Cambio

En `src/components/layout/Header.tsx`, modificar los dos botones de "Contacto" (desktop y móvil) para que en lugar de navegar a `/contacto/`, abran el enlace de WhatsApp Business configurado en `SITE_CONFIG.whatsappLink`.

### Detalle técnico

**Desktop (línea 89-91):** Cambiar `<Link to="/contacto/">` por `<a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">` y actualizar el texto a "WhatsApp" o mantener "Contacto".

**Móvil (líneas 141-143):** Mismo cambio en el botón del menú móvil.

Se necesita importar `SITE_CONFIG` (ya está importado) y reemplazar los `Link` por etiquetas `<a>` con el enlace de WhatsApp.

Archivos modificados: solo `src/components/layout/Header.tsx`.

