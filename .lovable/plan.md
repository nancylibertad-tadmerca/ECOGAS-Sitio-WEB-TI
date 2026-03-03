

## Agregar selectores de Ciudad/Mes/Año en Términos y Condiciones para consultar promociones vigentes

### Enfoque

Transformar la página de Términos y Condiciones de un placeholder vacío a una página funcional con selectores similares a los de Calidad del Gas, donde el usuario pueda elegir ciudad, mes y año para consultar los términos y condiciones de las promociones vigentes.

### Cambios

**`src/pages/legal/TerminosCondiciones.tsx`**

- Agregar `useState` para ciudad, mes y año.
- Reutilizar el mismo patrón de selectores (Ciudad, Mes, Año) que existe en `CalidadGas.tsx`.
- Usar las mismas 3 ciudades: Chihuahua, Laguna, Mexicali.
- Rango de años: 2020–2026, meses completos.
- Crear un `Set` de PDFs disponibles de promociones (inicialmente vacío o con algunos ejemplos).
- Convención de archivos: `public/docs/terminos-condiciones/{ciudad}-{mes}-{anio}.pdf`.
- Cuando hay selección y el PDF existe: mostrar botón "Descargar PDF".
- Cuando no existe: mostrar mensaje "Promociones no disponibles para esta selección".
- Cuando no hay selección completa: mostrar mensaje indicando que seleccione los 3 filtros.
- Mantener el título "Términos y Condiciones" y actualizar la descripción para mencionar promociones vigentes.

### Estructura visual

```text
Términos y Condiciones
Consulta los términos y condiciones de las promociones vigentes.

[Select Ciudad ▼]  [Select Mes ▼]  [Select Año ▼]

┌─────────────────────────────────────────┐
│  Selecciona ciudad, mes y año para      │
│  consultar las promociones vigentes.    │
└─────────────────────────────────────────┘
```

