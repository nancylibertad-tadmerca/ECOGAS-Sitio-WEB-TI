

## Igualar estilo del botón 800 700 0000 al de "Quiero Contratar" en Cobertura

### Cambio

En `src/pages/cobertura/Cobertura.tsx`, cambiar el estilo del botón de teléfono para que sea idéntico al botón "Quiero Contratar" (ambos con `variant="secondary"` y `size="lg"`), eliminando las clases personalizadas de outline blanco.

### Detalle técnico

En `src/pages/cobertura/Cobertura.tsx`, reemplazar:

```text
<Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
```

Por:

```text
<Button asChild size="lg" variant="secondary">
```

Solo se modifica una línea en un archivo.

