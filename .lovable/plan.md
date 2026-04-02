

## Reemplazar carrusel 3D por grid estático en "Beneficios para tu Familia"

### Cambio

**`src/pages/servicios/Hogar.tsx`**
- Eliminar el import de `ThreeDCardCarousel`.
- Reemplazar `<ThreeDCardCarousel cards={beneficios} />` por un grid 2x2 con `Card` estáticas mostrando icono, título y descripción de cada beneficio.
- Usar `grid grid-cols-1 md:grid-cols-2 gap-4` para el layout.
- Mantener el fondo con imagen y degradado tal como está.

