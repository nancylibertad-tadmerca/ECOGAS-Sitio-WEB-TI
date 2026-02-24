

## Plan: Integrar formulario real de HubSpot en la pagina Como Contratar

### Cambios en `src/pages/contratar/ComoContratar.tsx`

1. Reemplazar la importacion de `HubSpotFormPlaceholder` por `HubSpotForm`
2. Sustituir el componente placeholder por el formulario real con estos datos:
   - **Portal ID:** 49715152
   - **Form ID:** aa3bdd32-9678-453f-9de8-c2f065983720
   - **Region:** na1

### Cambio en `src/lib/constants.ts`

3. Actualizar el valor de `hubspot.forms.quieroContratar` con el Form ID real: `aa3bdd32-9678-453f-9de8-c2f065983720`

### Archivos a modificar
- **Editar:** `src/pages/contratar/ComoContratar.tsx`
- **Editar:** `src/lib/constants.ts`

