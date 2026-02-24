

## Plan: Redirigir enlaces del menu a paginas internas con opcion de regresar

### Problema actual
Los enlaces "Pago en Linea" y "Consultar tu factura" en el menu de navegacion llevan directamente al portal externo (`clientes.ecogas.com.mx`), lo que saca al usuario del sitio sin opcion clara de regresar.

### Solucion
Cambiar esos dos enlaces en el menu para que lleven a las paginas internas del sitio (`/clientes/pago-en-linea/` y `/clientes/recibo/`), donde el usuario puede ver informacion y luego decidir ir al portal externo. Desde esas paginas, el usuario siempre tiene el menu de navegacion y puede regresar facilmente al sitio.

Ademas, agregar un boton explicito "Regresar al sitio ECOGAS" en ambas paginas internas para que sea mas claro como volver.

### Cambios a realizar

**1. `src/lib/constants.ts`** - Actualizar los enlaces del menu de navegacion:
- "Pago en Linea": cambiar de URL externa a `/clientes/pago-en-linea/` y quitar `external: true`
- "Consultar tu factura": cambiar de URL externa a `/clientes/recibo/` y quitar `external: true`

**2. `src/pages/clientes/PagoEnLinea.tsx`** - Agregar boton "Regresar al sitio ECOGAS":
- Agregar un boton/enlace visible tipo `Link` que regrese al usuario a la pagina principal o a `/clientes/formas-de-pago/`
- Se colocara en la seccion inferior de la pagina junto a las opciones de ayuda

**3. `src/pages/clientes/Recibo.tsx`** - Agregar boton "Regresar al sitio ECOGAS":
- Mismo tratamiento: agregar un boton/enlace para regresar al sitio
- Se colocara en la seccion inferior junto a las opciones de soporte

### Detalle tecnico

En `constants.ts`, los dos enlaces cambiaran de:
```
{ label: "Pago en Linea", href: "https://clientes.ecogas.com.mx/...", external: true }
{ label: "Consultar tu factura", href: "https://clientes.ecogas.com.mx/...", external: true }
```
A:
```
{ label: "Pago en Linea", href: "/clientes/pago-en-linea/" }
{ label: "Consultar tu factura", href: "/clientes/recibo/" }
```

En ambas paginas se agregara un boton con icono `ArrowLeft` y texto "Regresar al sitio ECOGAS" que lleve a `/clientes/formas-de-pago/` usando `Link` de React Router.

