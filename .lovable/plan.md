

## Plan: Reemplazar texto de bancos con imagen de logos

### Que se hara

En la tarjeta de **Bancos** de la pagina Formas de Pago, reemplazar el texto "Banamex . Bancomer . Santander . Banorte . HSBC" con la imagen proporcionada que muestra los logos reales de los bancos participantes.

### Detalle tecnico

**1. Copiar imagen al proyecto**
- Copiar `user-uploads://image-2.png` a `src/assets/bancos-pago.png`

**2. Editar `src/pages/clientes/FormasDePago.tsx`**

- Importar la imagen: `import bancosPagoImg from "@/assets/bancos-pago.png";`
- En el array `metodos`, reemplazar la propiedad `banks` del objeto "Bancos" por una nueva propiedad `bankImage` que apunte a la imagen importada
- En el renderizado de las tarjetas, donde actualmente se muestra `metodo.banks.join(" . ")`, renderizar en su lugar un `<img>` con la imagen, ajustada al ancho de la tarjeta con bordes redondeados

