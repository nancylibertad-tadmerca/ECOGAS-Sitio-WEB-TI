

## Plan: Mapa de Mexico con imagen real y pines de flama ECOGAS animados

### Que se hara

Reemplazar el mapa SVG simplificado actual por la imagen real del mapa de Mexico que subiste, coloreada en Azul Cian. Los pines circulares se reemplazaran por la imagen de la flama ECOGAS con una animacion de parpadeo.

### Cambios en `src/pages/cobertura/Cobertura.tsx`

**1. Copiar las imagenes al proyecto:**
- `Mapa_México.png` a `src/assets/mapa-mexico.png` (mapa base)
- `FLAMA_ECOGAS-2.png` a `src/assets/flama-ecogas.png` (pin de flama)

**2. Reemplazar la seccion del mapa SVG completa:**
- Eliminar todo el bloque `<svg>` con los paths simplificados de Mexico
- Usar un contenedor `<div>` con `position: relative`
- Colocar la imagen del mapa de Mexico como fondo/imagen principal con un filtro CSS para colorearla en **Azul Cian #0085AD** (usando una combinacion de `filter` y un overlay de color, o aplicando un `mix-blend-mode` con un div de fondo azul cian)
- Sobre el mapa, posicionar 4 imagenes de la flama ECOGAS como pines absolutos en las coordenadas correspondientes a cada ciudad

**3. Pines con flama ECOGAS animados:**
- Cada pin sera un `<img>` de la flama posicionado con `position: absolute` usando porcentajes relativos al mapa
- Animacion CSS de parpadeo (blink/pulse): la flama alterna entre opacidad completa y reducida, creando un efecto de "parpadeando"
- Etiqueta de texto debajo de cada pin con el nombre de la ciudad y estado
- Coordenadas aproximadas (en porcentaje del contenedor):
  - Mexicali, Baja California: ~12%, ~12%
  - Chihuahua Capital: ~32%, ~22%
  - Torreon / La Laguna: ~40%, ~38%
  - Victoria de Durango: ~34%, ~42%

**4. Mantener sin cambios:**
- Breadcrumb, titulo, descripcion
- Tarjetas de ciudades debajo del mapa
- Seccion CTA inferior

### Detalle tecnico

**Colorear el mapa en Azul Cian:**
El mapa PNG es una silueta con contornos negros sobre fondo blanco. Se aplicara un enfoque de overlay: el mapa se coloca como imagen con `mix-blend-mode: multiply` sobre un fondo `#0085AD`, o se usa un filtro CSS (`brightness(0) saturate(100%)` + `invert` + `sepia` + `hue-rotate`) para teñirlo en azul cian.

**Animacion de parpadeo de los pines:**
```css
@keyframes flame-blink {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.9); }
}
```
Cada pin tendra un `animation-delay` diferente para que no parpadeen todos al mismo tiempo.

**Tamano de los pines:** Aproximadamente 30-40px de alto, responsive con unidades relativas.

