
## Plan: Reemplazar placeholder con video de YouTube

### Cambio
Sustituir el componente `ImagePlaceholder` en la pagina "¿Que es el Gas Natural?" por un video embebido de YouTube.

### Detalles tecnicos

**Archivo a modificar:** `src/pages/gas-natural/QueEs.tsx`

1. Eliminar la importacion de `ImagePlaceholder`
2. Reemplazar el componente `ImagePlaceholder` por un `iframe` de YouTube con el video `https://www.youtube.com/embed/waCflGIaPtU`
3. El iframe mantendra el aspect ratio 16:9, bordes redondeados y estilos consistentes con el sitio
4. Se incluiran atributos de seguridad y accesibilidad: `allow`, `allowFullScreen`, `title`, `loading="lazy"`

**Codigo resultante (seccion relevante):**
```tsx
<div className="aspect-video mb-8 rounded-lg overflow-hidden">
  <iframe
    src="https://www.youtube.com/embed/waCflGIaPtU"
    title="¿Qué es el Gas Natural? - ECOGAS"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    loading="lazy"
    className="w-full h-full"
  />
</div>
```

Este es el unico archivo que necesita cambios.
