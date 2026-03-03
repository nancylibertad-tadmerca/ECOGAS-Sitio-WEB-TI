

## Centrar botón "Calidad del Gas" y agregar enlace rápido en Footer

### Cambios

**1. `src/pages/empresa/Certificaciones.tsx`**
- Eliminar `showCalidadLink` de las tarjetas individuales y quitar los botones dentro de cada card.
- Agregar un único botón "Calidad del Gas" centrado debajo del grid de tarjetas (entre las dos tarjetas inferiores visualmente), usando `text-center mt-8`.

**2. `src/components/layout/Footer.tsx`**
- En la sección "Enlaces Rápidos", agregar un `<li>` con link a `/gas-natural/calidad/` con texto "Calidad del Gas", junto a las demás opciones existentes (después de "Certificaciones" o al final de la lista).

