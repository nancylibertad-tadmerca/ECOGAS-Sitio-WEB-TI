

## Agregar nueva imagen de Gaspar al bloque de WhatsApp

### Cambios

1. **Copiar la imagen** `user-uploads://14.png` a `src/assets/gaspar-whatsapp.png`.

2. **Modificar `src/pages/Contacto.tsx`**:
   - Importar la nueva imagen: `import gasparWhatsapp from "@/assets/gaspar-whatsapp.png";`
   - En el div vacío de la columna derecha (linea 87-89), agregar la imagen:

```text
<div className="flex justify-center items-end">
  <img
    src={gasparWhatsapp}
    alt="Gaspar - Servicio al Cliente ECOGAS"
    className="h-80 w-auto object-contain drop-shadow-lg"
  />
</div>
```

La imagen quedara alineada al centro-derecha del rectangulo azul, con un tamano grande (`h-80`) y una sombra sutil para destacar sobre el fondo.

