
# Mejorar Legibilidad de Botones en Servicios/Hogar

## Problema Actual
Los botones "Cómo Contratar" y "Contacto" usan `variant="outline"` con clases `border-white text-white hover:bg-white/10`, lo que hace que el texto blanco sobre fondo azul con borde delgado sea difícil de leer.

## Solución
Cambiar ambos botones para usar un estilo similar al botón del teléfono - fondo blanco con texto azul (primary) que ofrece excelente contraste.

## Cambios

**Archivo:** `src/pages/servicios/Hogar.tsx`

### Líneas 121-126 (Botón "Cómo Contratar")
```tsx
// De:
<Button asChild variant="outline" className="border-white text-white hover:bg-white/10">

// A:
<Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
```

### Líneas 127-129 (Botón "Contacto")
```tsx
// De:
<Button asChild variant="outline" className="border-white text-white hover:bg-white/10">

// A:
<Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
```

## Resultado
Los tres botones tendrán el mismo estilo consistente: fondo blanco con texto azul institucional, proporcionando máximo contraste y legibilidad sobre el fondo azul.
