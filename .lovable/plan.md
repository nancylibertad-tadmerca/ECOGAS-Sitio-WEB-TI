

## Plan: Agregar mapa de Google Maps a la tarjeta de Mexicali

### Que se hara

Agregar la URL del iframe de Google Maps proporcionada a la tarjeta de **Mexicali** en la pagina de Cobertura, usando el mismo patron que ya funciona para Chihuahua: al dar clic en la tarjeta se abre un modal con el mapa embebido.

### Detalle tecnico

**Archivo a editar:** `src/pages/cobertura/Cobertura.tsx` (linea 13)

- Agregar la propiedad `mapEmbed` a la entrada de Mexicali en el array `cities`:
  ```
  mapEmbed: "https://www.google.com/maps/d/embed?mid=1iiZmgyP3R0ZEu6t2qJJ1t2gRgVY&ehbc=2E312F"
  ```

No se requiere ningun otro cambio. La logica de clic, el modal Dialog y el iframe ya estan implementados de forma generica y funcionaran automaticamente para cualquier ciudad que tenga `mapEmbed`.

