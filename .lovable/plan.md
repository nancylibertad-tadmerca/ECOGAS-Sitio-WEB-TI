
## Colocar foto de abuelita con nieta como fondo del carrusel 3D

### Cambio
Copiar la imagen subida (`Receta_de_Siempre_9Jul25_01.jpg`) al proyecto y usarla como fondo estatico unicamente detras de la seccion del carrusel de beneficios. El carrusel 3D quedara superpuesto sobre la foto, con un overlay oscuro semitransparente para mantener la legibilidad de las tarjetas.

### Detalle tecnico

**1. Copiar imagen**
- Guardar `user-uploads://Receta_de_Siempre_9Jul25_01.jpg` como `src/assets/abuela-nieta-cocina.jpg`.

**2. Modificar `src/pages/servicios/Hogar.tsx`**
- Importar la nueva imagen.
- Envolver la seccion del carrusel (lineas 77-81: titulo "Beneficios para tu Familia" + `ThreeDCardCarousel`) en un contenedor con posicion relativa que se extienda fuera del contenedor principal (full-width).
- Agregar la imagen como fondo con `bg-cover bg-center` y un overlay oscuro semitransparente (`bg-black/40`) para contraste con las tarjetas blancas.
- El titulo "Beneficios para tu Familia" pasara a ser blanco para contrastar con el fondo oscuro.

Estructura resultante de la seccion de beneficios:

```text
{/* Seccion de beneficios con fondo de imagen - sale del contenedor */}
<div className="relative -mx-[calc(...)] px-[calc(...)] py-12 mb-12">
  {/* Imagen de fondo */}
  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: `url(${abuelaNietaImg})` }} />
  {/* Overlay oscuro para legibilidad */}
  <div className="absolute inset-0 bg-black/50" />
  {/* Contenido */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-6 text-white">Beneficios para tu Familia</h2>
    <ThreeDCardCarousel cards={beneficios} />
  </div>
</div>
```

Solo se modifica `src/pages/servicios/Hogar.tsx` y se agrega un asset.
