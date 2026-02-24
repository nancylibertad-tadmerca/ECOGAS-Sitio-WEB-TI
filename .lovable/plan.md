

## Plan: Integrar formulario real de HubSpot en la pagina de Contacto

### Resumen
Reemplazar el componente placeholder `HubSpotFormPlaceholder` en la pagina de Contacto con el formulario real de HubSpot, usando los datos proporcionados:
- **Portal ID:** 49715152
- **Form ID:** 1abea590-7764-4f4e-a53b-bfba4ab708b3
- **Region:** na1

### Detalles tecnicos

**1. Crear componente reutilizable `HubSpotForm`** (`src/components/shared/HubSpotForm.tsx`)
- Componente React que carga el script de HubSpot (`//js.hsforms.net/forms/embed/v2.js`) dinamicamente via `useEffect`
- Renderiza el formulario en un contenedor `div` con un `ref`
- Props: `portalId`, `formId`, `region`
- Incluye estado de carga mientras el formulario se inicializa

**2. Modificar `src/pages/Contacto.tsx`**
- Reemplazar `HubSpotFormPlaceholder` por el nuevo componente `HubSpotForm` con los valores reales:

```tsx
<HubSpotForm
  portalId="49715152"
  formId="1abea590-7764-4f4e-a53b-bfba4ab708b3"
  region="na1"
/>
```

**3. Actualizar `src/lib/constants.ts`**
- Actualizar los valores placeholder de HubSpot con los datos reales del formulario de contacto

### Archivos a modificar
- **Nuevo:** `src/components/shared/HubSpotForm.tsx`
- **Editar:** `src/pages/Contacto.tsx`
- **Editar:** `src/lib/constants.ts`

