
# Agregar Imagen Flotilla ECOGAS a Quiénes Somos

## Cambios a Realizar

### 1. Copiar imagen a assets
- Copiar `user-uploads://Flotilla_Ecogas-30.jpg` a `src/assets/flotilla-ecogas-30.jpg`

### 2. Actualizar página Quiénes Somos
**Archivo:** `src/pages/empresa/QuienesSomos.tsx`

- Remover import de `ImagePlaceholder`
- Agregar import de la nueva imagen: `import flotillaEcogas from "@/assets/flotilla-ecogas-30.jpg";`
- Reemplazar el componente `<ImagePlaceholder>` con una etiqueta `<img>`:

```tsx
<img 
  src={flotillaEcogas}
  alt="Flotilla ECOGAS - Equipo de trabajo con vehículos corporativos"
  className="w-full rounded-lg mb-8 object-cover aspect-[21/9]"
/>
```

## Resultado
La imagen de la flotilla ECOGAS con el equipo de trabajo aparecerá en la sección corporativa de "Quiénes Somos", reemplazando el placeholder actual.
