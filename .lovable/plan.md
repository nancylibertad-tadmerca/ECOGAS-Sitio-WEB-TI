
## Pop-up de cambio de dirección en Chihuahua con Gaspar

### Cambios

**1. Copiar imagen de Gaspar al proyecto**
- Copiar `user-uploads://Gaspar_saludando_sin_fondo_1.png` a `src/assets/gaspar-saludando.png`.

**2. Crear componente `src/components/shared/ChihuahuaAddressPopup.tsx`**
- Un `Dialog` que se abre automáticamente al montar (estado `open` inicializado en `true`).
- Usar `localStorage` para mostrar el pop-up solo una vez por sesión/visita (key: `chihuahua-address-popup-seen`).
- Contenido:
  - Imagen de Gaspar a la izquierda o arriba (responsive).
  - Texto: "Aviso importante" como título.
  - Mensaje: "Nuestra oficina en Chihuahua ha cambiado de dirección."
  - Nueva dirección destacada: **Calle Colegio #6300, Chihuahua, Chih.**
  - Botón "Entendido" para cerrar.

**3. Agregar el componente en `src/pages/Index.tsx`**
- Importar y renderizar `<ChihuahuaAddressPopup />` dentro del `<Layout>`.

### Estructura visual del pop-up

```text
┌──────────────────────────────────────┐
│              Aviso Importante         │
│                                       │
│        [Imagen Gaspar saludando]      │
│                                       │
│  Nuestra oficina en Chihuahua ha      │
│  cambiado de dirección.               │
│                                       │
│  📍 Calle Colegio #6300              │
│     Chihuahua, Chih.                  │
│                                       │
│          [ Entendido ]                │
└──────────────────────────────────────┘
```
