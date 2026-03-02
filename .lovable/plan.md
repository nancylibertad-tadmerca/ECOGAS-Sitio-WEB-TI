

## Agregar carrusel 3D animado a los beneficios del Hogar

### Resumen
Reemplazar la cuadricula estatica de 4 tarjetas de beneficios por un carrusel 3D interactivo que el usuario puede arrastrar para rotar. Las 4 tarjetas (Seguridad, Suministro Continuo, Eficiencia Energetica, Confort) giraran en un cilindro 3D.

### Pasos

**1. Instalar dependencia**
- Agregar `framer-motion` al proyecto.

**2. Crear componente `src/components/ui/3d-carousel.tsx`**
- Adaptar el componente proporcionado para que en lugar de mostrar imagenes, acepte un arreglo de objetos con contenido (icono, titulo, descripcion).
- Cada "cara" del carrusel sera una tarjeta con el beneficio correspondiente en lugar de una imagen.
- Eliminar la funcionalidad de "click para expandir imagen" ya que no aplica para tarjetas de contenido.
- Mantener la rotacion 3D con drag y la animacion de spring.
- Ajustar el ancho del cilindro para 4 elementos (mas compacto que 14 imagenes).

**3. Modificar `src/pages/servicios/Hogar.tsx`**
- Importar el nuevo componente de carrusel 3D.
- Reemplazar el `div.grid` de beneficios (lineas 78-90) por el componente de carrusel, pasando los 4 beneficios como datos.
- Cada cara del carrusel mostrara: icono, titulo y descripcion con el mismo estilo visual actual (Card de shadcn).

### Detalle tecnico

El componente adaptado:
- Usara `useMotionValue` y `useTransform` de framer-motion para la rotacion 3D con `rotate3d`.
- Soportara drag horizontal para girar el carrusel.
- Calculara el radio del cilindro basado en 4 caras (en vez de 14).
- Sera responsivo: en movil el cilindro sera mas pequeno.
- Cada cara renderizara un `Card` con icono, titulo y descripcion en lugar de un `img`.

Archivos modificados:
- `src/components/ui/3d-carousel.tsx` (nuevo)
- `src/pages/servicios/Hogar.tsx` (editado)

Dependencia nueva: `framer-motion`

