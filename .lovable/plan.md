

## Eliminar apartado "Verifica tu cobertura"

### Cambio

Eliminar el bloque completo de "Verifica tu cobertura" en `src/pages/contratar/ComoContratar.tsx` (lineas 110-119), que incluye el titulo, texto descriptivo y boton "Ver Cobertura".

### Detalle tecnico

Eliminar estas lineas en `src/pages/contratar/ComoContratar.tsx`:

```text
<div className="bg-muted rounded-lg p-6">
  <h3 className="font-semibold mb-4">Verifica tu cobertura</h3>
  <p className="text-sm text-muted-foreground mb-4">
    Antes de solicitar el servicio, confirma que tu domicilio está 
    dentro de nuestra zona de operación.
  </p>
  <Button asChild variant="outline">
    <Link to="/cobertura/chihuahua/">Ver Cobertura</Link>
  </Button>
</div>
```

Solo se modifica un archivo. El resto de la pagina queda intacto.

