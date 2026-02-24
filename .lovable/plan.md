

## Plan: Incorporar Google Maps interactivo en la tarjeta de Chihuahua

### Que se hara

Al dar clic en la tarjeta de **Chihuahua**, se abrira un **Dialog (modal)** que mostrara el mapa de Google Maps embebido con la red de distribucion de gas natural de ECOGAS. Las demas tarjetas de ciudades se mantienen igual por ahora.

### Cambios en `src/pages/cobertura/Cobertura.tsx`

**1. Agregar estado y componentes de Dialog:**
- Importar `useState` de React
- Importar `Dialog, DialogContent, DialogHeader, DialogTitle` del componente UI existente
- Agregar un estado `selectedCity` para controlar cual ciudad tiene el modal abierto

**2. Agregar datos de mapa por ciudad:**
- Extender el array `cities` con una propiedad opcional `mapEmbed` que contenga la URL del iframe de Google Maps
- Solo Chihuahua tendra esta propiedad por ahora:
  ```
  mapEmbed: "https://www.google.com/maps/d/embed?mid=10fep7Se2Bcx4N7vh1DHAjlGO47U&ehbc=2E312F"
  ```

**3. Hacer clickeable la tarjeta de Chihuahua:**
- Las tarjetas que tengan `mapEmbed` se convertiran en clickeables con `cursor-pointer` y un indicador visual (texto "Ver mapa" o icono)
- Al hacer clic, se abre el Dialog con el iframe de Google Maps

**4. Dialog con el mapa embebido:**
- Modal centrado con un iframe responsive que ocupe el ancho completo del dialog
- Titulo del dialog: "Cobertura en Chihuahua"
- El iframe tendra dimensiones responsivas (ancho completo, alto ~400px en movil, ~480px en desktop)
- Boton de cierre estandar del componente Dialog

### Detalle tecnico

**Componentes utilizados:** Se reutiliza el componente `Dialog` ya existente en `src/components/ui/dialog.tsx` (Radix UI).

**Estructura del modal:**
```
Dialog -> DialogContent (max-w-2xl)
  -> DialogHeader -> DialogTitle ("Cobertura en Chihuahua")
  -> iframe (src=Google Maps embed URL, w-full, h-[400px] md:h-[480px], rounded, border-0)
```

**Interaccion:**
- Clic en tarjeta de Chihuahua -> abre modal con mapa
- Clic fuera del modal o en X -> cierra modal
- Las otras 3 tarjetas no tienen accion de clic (sin `mapEmbed`)

