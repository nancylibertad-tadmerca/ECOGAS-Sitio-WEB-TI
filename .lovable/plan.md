

## Ajustar tamano, velocidad y texto del carrusel 3D

### Archivo a modificar
`src/components/ui/3d-carousel.tsx`

### Cambios

**1. Tamano del carrusel mas grande**
- Aumentar `cylinderWidth` de 600/1000 a 800/1400 (movil/desktop).
- Aumentar altura del contenedor de `h-[280px] md:h-[350px]` a `h-[320px] md:h-[400px]`.
- Aumentar ancho de las tarjetas de `w-[200px] md:w-[260px]` a `w-[240px] md:w-[300px]`.

**2. Velocidad de arrastre mas responsiva**
- Aumentar el multiplicador de drag de `0.05` a `0.1` (lineas 69 y 73) para que el giro responda mas rapido al movimiento del usuario.
- Reducir `damping` del spring de 30 a 20 para que la inercia dure un poco mas al soltar.

**3. Texto mas grande**
- Icono: de `h-8 w-8` a `h-10 w-10`.
- Titulo: de `text-lg` a `text-xl md:text-2xl`.
- Descripcion: de `text-sm` a `text-base`.

