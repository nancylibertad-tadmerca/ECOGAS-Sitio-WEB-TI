

## Cambio en TerminosCondiciones.tsx

Modificar la línea que genera el array de años para que solo contenga "2026" en lugar del rango 2020–2026.

**Archivo:** `src/pages/legal/TerminosCondiciones.tsx`

Cambiar:
```tsx
const anios = Array.from({ length: 7 }, (_, i) => String(2020 + i));
```
Por:
```tsx
const anios = ["2026"];
```

