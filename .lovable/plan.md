

## Plan: Corregir enlace "Ver Cobertura" en la pagina de Industria

### Cambio

En el archivo `src/pages/servicios/Industria.tsx`, actualizar el enlace del boton "Ver Cobertura" de `/cobertura/chihuahua/` a `/cobertura/` para que dirija correctamente a la pagina centralizada de Cobertura.

### Detalle tecnico

**Archivo:** `src/pages/servicios/Industria.tsx` (linea 91)

Cambiar:
```tsx
<Link to="/cobertura/chihuahua/">Ver Cobertura</Link>
```
Por:
```tsx
<Link to="/cobertura/">Ver Cobertura</Link>
```

Un solo cambio de una linea.

