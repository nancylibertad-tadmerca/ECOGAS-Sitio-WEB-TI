

## Repositorio de PDFs de Calidad del Gas

### Enfoque

Almacenar los PDFs en `public/docs/calidad-gas/` con una convención de nombre estandarizada y crear un mapa de disponibilidad en el componente. Cuando el usuario seleccione ciudad/mes/año, se mostrará un botón para descargar o ver el PDF si existe, o un mensaje indicando que no está disponible.

### Convención de nombres

```text
public/docs/calidad-gas/{ciudad}-{mes}-{anio}.pdf
```
Ejemplo: `chihuahua-enero-2026.pdf`, `laguna-enero-2026.pdf`, `mexicali-enero-2026.pdf`

### Archivos a modificar/crear

**1. Copiar los 3 PDFs subidos a `public/docs/calidad-gas/`**
- `ChihuahuaENE2026.pdf` → `public/docs/calidad-gas/chihuahua-enero-2026.pdf`
- `LagunaENE2026.pdf` → `public/docs/calidad-gas/laguna-enero-2026.pdf`
- `MexicaliENE2026.pdf` → `public/docs/calidad-gas/mexicali-enero-2026.pdf`

**2. Modificar `src/pages/gas-natural/CalidadGas.tsx`**

- Crear un set/array de PDFs disponibles (e.g. `"chihuahua-enero-2026"`) para saber cuáles existen.
- Cuando el usuario seleccione los 3 filtros, construir la ruta del PDF y verificar si está en el set de disponibles.
- Si existe: mostrar un botón "Ver Informe PDF" (abre en nueva pestaña) y un botón "Descargar PDF".
- Si no existe: mostrar mensaje "Informe no disponible para esta selección".
- Actualizar el rango de años a 2020–2026.

### Escalabilidad

Cuando se agreguen los PDFs faltantes de 2020–2025, solo hay que:
1. Copiar el archivo a `public/docs/calidad-gas/` con la convención de nombre.
2. Agregar la clave al array de disponibles en el componente.

### Estructura visual con PDF disponible

```text
[Select Ciudad ▼]  [Select Mes ▼]  [Select Año ▼]

┌─────────────────────────────────────────┐
│  Informe de Calidad del Gas             │
│  Chihuahua — Enero 2026                 │
│                                         │
│  [📄 Ver Informe]  [⬇ Descargar PDF]   │
└─────────────────────────────────────────┘
```

