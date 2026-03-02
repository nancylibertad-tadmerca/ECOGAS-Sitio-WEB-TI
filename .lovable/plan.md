
## Agregar imagen de Gaspar al bloque de WhatsApp en Contacto

### Cambios

1. **Copiar la imagen** `user-uploads://Servicio_al_Cliente2.png` a `src/assets/gaspar-servicio.png`.

2. **Modificar `src/pages/Contacto.tsx`** - Redisenar la franja de WhatsApp:
   - Cambiar el fondo de verde (`bg-[#78c021]`) a azul primario (`bg-primary`).
   - Convertir el layout de centrado a un grid de 2 columnas (`grid lg:grid-cols-2`).
   - Columna izquierda: texto "Contáctanos por WhatsApp", subtitulo y boton "Enviar mensaje" (texto en blanco, alineado a la izquierda).
   - Columna derecha: imagen de Gaspar importada desde `@/assets/gaspar-servicio.png`.
   - El boton mantiene su estilo blanco con texto verde de WhatsApp.

### Detalle tecnico

En `src/pages/Contacto.tsx`:

- Agregar import: `import gasparImg from "@/assets/gaspar-servicio.png";`
- Reemplazar el bloque WhatsApp CTA (lineas 73-83) con:

```text
<div className="bg-primary text-white rounded-lg p-8 mb-12">
  <div className="grid lg:grid-cols-2 gap-8 items-center">
    <div className="text-center lg:text-left">
      <MessageCircle className="h-12 w-12 mb-4 mx-auto lg:mx-0" />
      <h2 className="text-2xl font-bold mb-2">Contáctanos por WhatsApp</h2>
      <p className="mb-4 opacity-90">Respuesta rápida a tus consultas</p>
      <Button ...>Enviar mensaje</Button>
    </div>
    <div className="flex justify-center">
      <img src={gasparImg} alt="Gaspar - Servicio al Cliente ECOGAS"
           className="h-64 object-contain" />
    </div>
  </div>
</div>
```

Solo se modifica un archivo y se agrega un asset.
