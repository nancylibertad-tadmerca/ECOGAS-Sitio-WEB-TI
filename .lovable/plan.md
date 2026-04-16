

## Reemplazar iconos en "¿Qué necesitas hoy?" con estilo ilustrado

### Referencia
La imagen muestra iconos coloridos sobre fondos circulares azul claro, con colores distintos por tarjeta:
- **Servicios**: casa naranja/roja
- **Pagos**: tarjeta azul/amarilla
- **Contacto**: teléfono rosa/morado
- **Cobertura**: pin rosa

### Cambio

**`src/pages/Index.tsx`** — Sección "Quick Access Cards"

Reemplazar los iconos Lucide planos por versiones estilizadas con:
- Un contenedor circular `bg-blue-100` (fondo azul claro) de ~60px
- Colores individuales por icono:
  - Home → `text-orange-500`
  - CreditCard → `text-blue-500`
  - Phone → `text-pink-500`
  - MapPin → `text-pink-500`
- Quitar la clase `text-primary` actual de los iconos
- Aumentar ligeramente el tamaño del icono a `h-8 w-8`

Ejemplo de estructura por tarjeta:
```tsx
<div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-2">
  <Home className="h-8 w-8 text-orange-500" />
</div>
```

