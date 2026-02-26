

## Agregar "Llama antes de excavar" en Soy Cliente

### Resumen
Agregar una nueva opción "Llama antes de excavar" en el menú "Soy Cliente" que lleve a una página interna con la página de HubSpot embebida mediante iframe.

### Cambios

1. **Actualizar navegación** (`src/lib/constants.ts`)
   - Agregar `{ label: "Llama antes de excavar", href: "/clientes/llama-antes-de-excavar/" }` al array de children de "Soy Cliente"

2. **Crear página** (`src/pages/clientes/LlamaAntesDeExcavar.tsx`)
   - Usar el componente `Layout` existente
   - Incluir `PageBreadcrumb` con la ruta correspondiente
   - Embeber `https://info.ecogas.com.mx/llamaantesdeexcavar` en un iframe a pantalla completa dentro del contenedor principal

3. **Agregar ruta** (`src/App.tsx`)
   - Importar el nuevo componente
   - Agregar `<Route path="/clientes/llama-antes-de-excavar/" element={<LlamaAntesDeExcavar />} />`

### Detalles técnicos
- El iframe tendrá altura mínima de ~80vh para una buena experiencia
- Se seguirá el mismo patrón que las páginas de Pago en Línea y Consultar Factura (landing interna con header/footer del sitio)

