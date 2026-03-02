

## Actualizar formulario HubSpot en "Cómo Contratar"

### Cambio

Modificar `src/pages/contratar/ComoContratar.tsx` para usar el nuevo Form ID `1abea590-7764-4f4e-a53b-bfba4ab708b3` en el componente `HubSpotForm` que aparece debajo de "Solicita una cita sin compromiso".

### Detalle tecnico

En la linea donde se renderiza el `HubSpotForm`, cambiar:
- `formId={SITE_CONFIG.hubspot.forms.quieroContratar}` (que apunta a `aa3bdd32-9678-453f-9de8-c2f065983720`)
- Por `formId="1abea590-7764-4f4e-a53b-bfba4ab708b3"` directamente, o actualizar el valor en `constants.ts`

Tambien se corregira el typo existente en "comprommiso" a "compromiso".

