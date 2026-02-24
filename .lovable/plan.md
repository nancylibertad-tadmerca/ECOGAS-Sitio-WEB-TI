

## Plan: Agregar mapa de Google Maps a la tarjeta de Torreon / La Laguna

### Que se hara

Agregar la URL del iframe de Google Maps proporcionada a la tarjeta de **Torreon / La Laguna** en la pagina de Cobertura, usando el mismo patron que ya funciona para Mexicali y Chihuahua: al dar clic en la tarjeta se abre un modal con el mapa embebido.

### Detalle tecnico

**Archivo a editar:** `src/pages/cobertura/Cobertura.tsx` (linea 15)

- Agregar la propiedad `mapEmbed` a la entrada de Torreon / La Laguna en el array `cities`:
  ```
  mapEmbed: "https://www.google.com/maps/d/embed?mid=1YaumPO09mcZQ__g4ZF3k8rMenf0&ehbc=2E312F"
  ```

No se requiere ningun otro cambio. La logica de clic, el modal Dialog y el iframe ya estan implementados y funcionaran automaticamente.

