

## Plan: Redirigir todas las acciones de pago, saldo y factura al portal de autoservicio

### URL destino
Todas las acciones de **pagar en linea**, **consulta de saldo** y **consulta de factura** apuntaran a:
`https://clientes.ecogas.com.mx/react/master/#INDEX`

### Cambios necesarios

#### 1. `src/lib/constants.ts`
- Actualizar `portals.pagoEnLinea` de placeholder a `https://clientes.ecogas.com.mx/react/master/#INDEX` (misma URL que `consultaRecibo`)

#### 2. `src/pages/clientes/FormasDePago.tsx`
- Tarjeta "Pago en Linea": cambiar el enlace interno (`/clientes/pago-en-linea/`) por enlace externo al portal
- Boton inferior "Pagar en Linea": cambiar de `Link` a enlace externo `<a>` al portal
- Boton inferior "Consultar Recibo": cambiar de `Link` a enlace externo `<a>` al portal

#### 3. `src/pages/Index.tsx`
- Tarjeta "Pagos" (seccion acceso rapido): cambiar de `Link` a enlace externo al portal
- Tarjeta "Pago en Linea" (seccion Soy Cliente): cambiar de `Link` a enlace externo al portal
- Tarjeta "Consultar Recibo" (seccion Soy Cliente): cambiar de `Link` a enlace externo al portal

#### 4. `src/components/layout/Footer.tsx`
- Enlace "Pago en Linea": cambiar de `Link` a `<a>` externo al portal
- Enlace "Consultar Recibo": cambiar de `Link` a `<a>` externo al portal

#### 5. `src/lib/constants.ts` (NAV_LINKS)
- Enlace "Pago en Linea" en menu "Soy Cliente": cambiar href a URL externa del portal
- Enlace "Consultar Recibo" en menu "Soy Cliente": cambiar href a URL externa del portal

### Archivos a modificar
- `src/lib/constants.ts` (constante del portal + enlaces de navegacion)
- `src/pages/clientes/FormasDePago.tsx`
- `src/pages/Index.tsx`
- `src/components/layout/Footer.tsx`

### Nota
Las paginas internas `/clientes/pago-en-linea/` y `/clientes/recibo/` seguiran existiendo (para SEO y usuarios que lleguen directamente), pero todos los enlaces del sitio ahora dirigiran al portal externo.

