

## Alinear foto de abuelita y aplicar degradado blanco

### Cambios en `src/pages/servicios/Hogar.tsx`

**1. Alinear la seccion de la abuelita con la foto de la familia**
- Eliminar el "breakout" full-width (`-mx-[calc(50vw-50%)]`) para que la seccion de beneficios quede dentro del mismo contenedor `max-w-4xl` que la foto de la familia.
- Aplicar `rounded-lg` y `aspect-[21/9]` al fondo de imagen para que tenga las mismas proporciones y bordes que la foto de la familia arriba.

**2. Reemplazar overlay negro por degradado blanco semitransparente**
- Cambiar `bg-black/50` por un degradado blanco siguiendo el patron del proyecto: `bg-gradient-to-r from-white/90 via-white/85 to-white/95`.
- Cambiar el titulo "Beneficios para tu Familia" de `text-white` a color oscuro (`text-foreground`) para que contraste con el fondo blanco degradado.

### Resultado visual
Ambas fotos (familia cocinando y abuelita con nieta) tendran el mismo ancho, bordes redondeados y proporciones. La foto de la abuelita se vera suavemente detras del carrusel gracias al degradado blanco, sin obstruir la lectura del texto ni las tarjetas.

