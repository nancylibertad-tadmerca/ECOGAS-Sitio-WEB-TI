## Hacer que el carrusel gire mas lento y tarjeta por tarjeta

### Archivo a modificar

`src/components/ui/3d-carousel.tsx`

### Cambios

**1. Reducir sensibilidad del arrastre**

- Bajar el multiplicador de `onDrag` de `0.1` a `0.05` para que el giro sea mas lento al arrastrar.
- Bajar el multiplicador de velocidad en `onDragEnd` de `0.1` a `0.05` para que la inercia al soltar tambien sea mas suave.

**2. Snap tarjeta por tarjeta**

- Calcular el angulo por tarjeta: `360 / faceCount` (con 4 tarjetas = 90 grados).
- En `onDragEnd`, en lugar de dejar que el carrusel gire libremente, redondear la rotacion final al multiplo mas cercano del angulo por tarjeta. Esto hara que siempre se detenga mostrando una tarjeta centrada al frente.

**3. Transicion mas suave para el snap**

- Aumentar `damping` de 20 a 30 y `stiffness` de 100 a 60 para que la animacion de snap sea mas lenta y elegante al detenerse en cada tarjeta.

### Resultado

El carrusel girara mas lento al arrastrarlo y al soltarlo siempre se detendra alineado en una tarjeta, avanzando de una en una con una animacion suave.  
Las letras de la tarjeta en color negro.