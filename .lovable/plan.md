
## Redirigir a pagina de agradecimiento al enviar formulario HubSpot

### Cambio

Modificar el componente `HubSpotForm` para que al enviar el formulario redirija a la URL externa de agradecimiento. Tambien se reemplazara la entrada actual del historial del navegador para que al presionar "atras" el usuario regrese al home.

### Detalle tecnico

1. **Agregar prop opcional `redirectUrl`** al componente `HubSpotForm`
2. **Agregar `redirectUrl` en la config de `hbspt.forms.create`** - La API de HubSpot soporta la opcion `redirectUrl` que redirige automaticamente al enviar el formulario
3. **Reemplazar historial del navegador** - Antes de redirigir, usar `window.history.replaceState` para que la entrada actual sea `/` (home), asi al dar "back" el usuario llega al inicio
4. **Usar `onFormSubmitted` callback** de HubSpot para ejecutar la logica de reemplazo de historial y luego redirigir manualmente con `window.location.href`

### Archivos a modificar

- `src/components/shared/HubSpotForm.tsx` - Agregar prop `redirectUrl`, agregar callback `onFormSubmitted` en la configuracion del formulario que reemplace el historial y redirija
- `src/pages/contratar/ComoContratar.tsx` - Pasar `redirectUrl="https://info.ecogas.com.mx/gracias-por-tus-datos"` al componente `HubSpotForm`
