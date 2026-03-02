

## Igualar el cuadro de "Horario de Atencion" con los demas

### Problema actual
La tarjeta central ("Horario de Atencion") tiene el fondo azul (`bg-primary`) en el header y fondo blanco invertido (`bg-primary-foreground`) en el contenido, lo que la hace verse diferente a las tarjetas de "Telefono" y "Correo Electronico".

### Cambio
En `src/pages/Contacto.tsx`, modificar la tarjeta central para que tenga el mismo estilo que las otras dos: fondo blanco con texto en azul primario.

### Detalle tecnico

Lineas 48-56, reemplazar:

```text
<Card className="text-center">
  <CardHeader className="bg-primary px-0 py-0">
    <Clock className="h-10 w-10 mx-auto text-primary mb-2" />
    <CardTitle>Horario de Atención</CardTitle>
  </CardHeader>
  <CardContent className="space-y-2 text-sm">
    <p className="text-primary bg-primary-foreground whitespace-pre-line text-2xl">...</p>
    <p className="text-primary text-2xl">...</p>
  </CardContent>
</Card>
```

Por:

```text
<Card className="text-center">
  <CardHeader>
    <Clock className="h-10 w-10 mx-auto text-primary mb-2" />
    <CardTitle>Horario de Atención</CardTitle>
  </CardHeader>
  <CardContent className="space-y-2">
    <p className="text-primary whitespace-pre-line text-2xl">...</p>
    <p className="text-primary text-2xl">...</p>
  </CardContent>
</Card>
```

Cambios puntuales:
- Quitar `bg-primary px-0 py-0` del `CardHeader` para que use el padding y fondo por defecto (blanco).
- Quitar `bg-primary-foreground` y `text-sm` del `CardContent` y el parrafo para igualar el estilo.

Solo se modifica un archivo, una tarjeta.

