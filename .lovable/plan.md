

## Plan: Reemplazar formulario de contacto en la pagina Contacto

### Unico cambio necesario

Solo existe **una pagina** usando el formulario de contacto anterior (`1abea590-...`): la pagina **Contacto**.

La pagina **Como Contratar** ya usa el formulario solicitado (`aa3bdd32-...`).

### Cambios en `src/pages/Contacto.tsx`

- Cambiar el `formId` de `"1abea590-7764-4f4e-a53b-bfba4ab708b3"` a `"aa3bdd32-9678-453f-9de8-c2f065983720"`
- Usar las constantes de `SITE_CONFIG` en lugar de valores hardcodeados

### Cambios en `src/lib/constants.ts`

- Actualizar `hubspot.forms.contacto` al nuevo Form ID: `"aa3bdd32-9678-453f-9de8-c2f065983720"`

### Archivos a modificar
- **Editar:** `src/pages/Contacto.tsx`
- **Editar:** `src/lib/constants.ts`

