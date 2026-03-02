## Insertar foto de equipo como fondo con degradado en Filosofia y Valores

### Cambio

Copiar la imagen subida (`DSC08646.jpg`) a `src/assets/equipo-ecogas-oficina.jpg` y usarla como fondo de toda la seccion de contenido en la pagina de Filosofia y Valores, con un degradado blanco semitransparente detrás para garantizar la legibilidad del texto.

### Detalle tecnico

**1. Copiar la imagen** al proyecto: `src/assets/equipo-ecogas-oficina.jpg`

**2. Modificar `src/pages/empresa/FilosofiaValores.tsx`:**

- Importar la imagen: `import equipoOficina from "@/assets/equipo-ecogas-oficina.jpg";`
- Envolver todo el contenido (lineas 37-85) en un contenedor con posicion relativa que tenga la imagen de fondo y un overlay con degradado blanco semitransparente.

Estructura resultante:

```text
<div className="relative min-h-screen">
  {/* Imagen de fondo fija */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
    style={{ backgroundImage: `url(${equipoOficina})` }}
  />
  {/* Overlay degradado blanco para legibilidad */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/95" />
  {/* Contenido existente con z-index */}
  <div className="relative z-10 container py-8 md:py-12">
    ... contenido existente sin cambios ...
  </div>
</div>
```

El degradado `from-white/90 via-white/85 to-white/95` permite ver sutilmente la foto detras del contenido manteniendo la lectura clara. Se modifica un solo archivo y se agrega un asset.