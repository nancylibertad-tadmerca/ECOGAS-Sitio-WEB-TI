## Plan: Quitar flamas animadas y animar la imagen del mapa

### Que se hara

1. **Eliminar los pines de flama animados** del mapa (el bloque que renderiza las imagenes de flama con la animacion `flame-blink` sobre cada ciudad).
2. **Animar la imagen del mapa de Mexico** con un efecto sutil de entrada y/o pulso continuo para darle vida. Se usara una combinacion de:
  - Animacion de entrada `fade-in` + `scale-in` al cargar la pagina (el mapa aparece suavemente)
  - Un efecto de pulso suave continuo (`pulse`) para que el mapa "respire" ligeramente
  &nbsp;

### Detalle tecnico

**Archivo a editar:** `src/pages/cobertura/Cobertura.tsx`

- Eliminar el import de `flamaImg` (ya no se usa)
- Eliminar el bloque `<style>` con la animacion `@keyframes flame-blink`
- Eliminar el bloque `{cities.map(...)}` que renderiza los pines de flama sobre el mapa
- Agregar clases de animacion a la imagen del mapa: `animate-fade-in` para la entrada y una animacion sutil de pulso con CSS (`animate-[pulse_3s_ease-in-out_infinite]`) para un efecto continuo de "respiracion"
- La imagen del mapa quedara limpia, sin pines superpuestos, y con movimiento propio