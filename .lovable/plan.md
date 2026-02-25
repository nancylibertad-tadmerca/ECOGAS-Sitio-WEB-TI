

## Plan: Mostrar imagen informativa al dar clic en la tarjeta de Durango

### Que se hara

Al dar clic en la tarjeta de **Victoria de Durango**, se abrira un modal (Dialog) mostrando la imagen proporcionada con informacion de formas de pago en Durango.

### Detalle tecnico

**1. Copiar la imagen al proyecto**
- Copiar `user-uploads://image.png` a `src/assets/durango-info.png`

**2. Editar `src/pages/cobertura/Cobertura.tsx`**

- Agregar una nueva propiedad opcional `infoImage` al tipo de ciudades (actualmente es un tipo implicito)
- En la entrada de "Victoria de Durango", agregar `infoImage` apuntando a la imagen importada
- Hacer la tarjeta de Durango clickeable (igual que las demas)
- En el Dialog, mostrar la imagen cuando la ciudad seleccionada tenga `infoImage` en lugar de un iframe

Cambios concretos:
- Importar la imagen: `import durangoInfoImg from "@/assets/durango-info.png";`
- Agregar al objeto de Durango: `infoImage: durangoInfoImg`
- Actualizar la logica del `onClick` de las tarjetas para que tambien funcione cuando haya `infoImage`
- En el Dialog, renderizar condicionalmente: si hay `mapEmbed` mostrar iframe, si hay `infoImage` mostrar `<img>`
- Actualizar el texto "Ver mapa" para que aparezca tambien en Durango

No se crean archivos nuevos ni se modifican otros componentes.

