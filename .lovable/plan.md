

## Plan: Actualizar mapa de cobertura con nueva imagen, nombres de ciudades y optimizacion movil

### Que se hara

1. **Reemplazar la imagen del mapa** por la nueva imagen proporcionada (`Mapa_2.png`), que muestra Mexico con contornos suaves en azul claro y los pines de flama ECOGAS ya integrados visualmente como referencia.

2. **Copiar la nueva imagen** `Mapa_2.png` a `src/assets/mapa-mexico.png` (reemplazando la actual).

3. **Actualizar `src/pages/cobertura/Cobertura.tsx`**:
   - Quitar el overlay `bg-secondary` con `mix-blend-mode: multiply` ya que la nueva imagen ya tiene el estilo correcto (fondo blanco con contornos azul claro)
   - Mantener los pines de flama ECOGAS animados (`flama-ecogas.png`) con la animacion de parpadeo
   - Agregar etiquetas visibles con el nombre de cada ciudad y estado debajo de cada pin
   - Ajustar coordenadas de los pines para que coincidan con la nueva imagen
   - **Optimizacion movil**:
     - Reducir el tamano de las flamas en pantallas pequenas (`h-6` en movil vs `h-10` en desktop)
     - Reducir el tamano del texto de las etiquetas de ciudad en movil (`text-[8px]` vs `text-xs`)
     - Agregar padding lateral para que los pines en los bordes (Mexicali) no se corten
     - Asegurar que el mapa ocupe el ancho completo en movil sin desbordamiento

### Detalle tecnico

**Archivo a copiar:** `user-uploads://Mapa_2.png` -> `src/assets/mapa-mexico.png`

**Archivo a editar:** `src/pages/cobertura/Cobertura.tsx`
- Eliminar el wrapper `<div className="bg-secondary">` y el `mixBlendMode: "multiply"` ya que la nueva imagen no necesita overlay de color
- Mantener la animacion `@keyframes flame-blink` existente
- Cada pin mostrara: flama animada + nombre de ciudad + estado en una etiqueta debajo
- Clases responsive para tamano de flama: `className="h-6 md:h-10"`
- Clases responsive para etiquetas: `className="text-[8px] md:text-xs"`
- Contenedor del mapa con `px-4 md:px-0` para margen lateral en movil

