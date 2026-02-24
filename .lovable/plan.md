

## Plan: Actualizar pagina Consultar Recibo con URL real y enlaces en tarjetas

### Cambios en `src/pages/clientes/Recibo.tsx`

1. **Boton principal "Consultar Recibo"** (linea 53-55): Cambiar el texto a **"Portal Autoservicio"** y la URL a `https://clientes.ecogas.com.mx/react/master/#INDEX`

2. **Tarjeta "Historial de Consumo"** (lineas 79-85): Convertir el `div` en un enlace `<a>` que apunte a la misma URL, manteniendo el estilo visual

3. **Tarjeta "Descarga PDF"** (lineas 86-92): Convertir el `div` en un enlace `<a>` que apunte a la misma URL, manteniendo el estilo visual

### Cambio en `src/lib/constants.ts`

4. Actualizar el valor de `portals.consultaRecibo` con la URL real: `https://clientes.ecogas.com.mx/react/master/#INDEX`

### Resultado
- El boton principal dira "Portal Autoservicio" y abrira el portal real en nueva pestana
- Las dos tarjetas inferiores seran clicables y tambien llevaran al portal real
- La URL quedara centralizada en constants.ts para facilitar futuros cambios

