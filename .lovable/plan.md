

## Crear página "Calidad del Gas" en `/gas-natural/calidad/`

### Descripción

Página dedicada a consultar la calidad del gas natural por ciudad, mes y año. Incluirá tres selectores (dropdowns) para filtrar la información.

### Archivos a crear/modificar

**1. Crear `src/pages/gas-natural/CalidadGas.tsx`**

- Layout + PageBreadcrumb (Inicio > Gas Natural > Calidad del Gas)
- Título: "Calidad del Gas"
- Subtítulo descriptivo sobre la transparencia en la calidad del servicio
- Tres `Select` (de shadcn/ui) en fila responsiva:
  - **Ciudad**: Chihuahua, Laguna, Mexicali
  - **Mes**: Enero–Diciembre
  - **Año**: 2020–2026
- Debajo de los selectores, un área de resultados (placeholder por ahora) que muestre la combinación seleccionada y un mensaje tipo "Información no disponible aún" o datos de ejemplo en una tabla/card
- Estilo consistente con las demás páginas del sitio

**2. Modificar `src/App.tsx`**

- Importar `CalidadGas` y agregar ruta `/gas-natural/calidad/`

**3. Modificar `src/pages/empresa/Certificaciones.tsx`**

- Agregar botón "Calidad del Gas" (`bg-[#0085AD]`) debajo de las tarjetas de "Empresa Familiarmente Responsable" y "Empresa Segura", enlazando a `/gas-natural/calidad/`

### Estructura visual

```text
Breadcrumb: Inicio > Gas Natural > Calidad del Gas

CALIDAD DEL GAS
Consulta los indicadores de calidad del gas natural...

[Select Ciudad ▼]  [Select Mes ▼]  [Select Año ▼]

┌─────────────────────────────────────┐
│  Resultados para: Chihuahua,        │
│  Enero 2025                         │
│  (Información próximamente)         │
└─────────────────────────────────────┘
```

