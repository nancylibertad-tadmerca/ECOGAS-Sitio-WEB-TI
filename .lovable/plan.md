

## Plan: Crear pagina de Cobertura con mapa de Mexico

### Descripcion
Crear una nueva pagina `/cobertura/` que muestre un mapa de Mexico en colores corporativos de ECOGAS (Azul Institucional #005F87, Azul Cian #0085AD, Verde Vivo #78BE20) con pines/marcadores en las 4 ciudades de cobertura: Chihuahua, Torreon/La Laguna, Victoria de Durango y Mexicali. Los enlaces de ciudades en la pagina de Contacto se redirigiran a esta nueva pagina.

### Cambios a realizar

**1. Crear `src/pages/cobertura/Cobertura.tsx`** - Nueva pagina con:
- Breadcrumb de navegacion
- Titulo "Nuestra Cobertura" con descripcion
- Mapa SVG de Mexico dibujado con los colores corporativos (silueta del pais en Azul Institucional)
- 4 pines animados (en Verde Vivo) ubicados en las coordenadas aproximadas de cada ciudad
- Al pasar el cursor o hacer clic en un pin, se muestra el nombre de la ciudad
- Tarjetas debajo del mapa con informacion de cada ciudad
- Seccion CTA para contratar servicio

**2. Editar `src/App.tsx`** - Agregar la ruta:
- Importar el nuevo componente `Cobertura`
- Agregar ruta `/cobertura/` que renderice la pagina

**3. Editar `src/pages/Contacto.tsx`** - Actualizar enlaces de ciudades:
- Cambiar los `Link` de cada ciudad de `/cobertura/${city.slug}/` a `/cobertura/` para que todos apunten a la misma pagina del mapa

### Detalle tecnico

- El mapa de Mexico sera un componente SVG inline con la silueta del pais, usando `fill` con el color Azul Institucional (`#005F87`) y borde en Azul Cian (`#0085AD`)
- Los pines seran circulos SVG con efecto de pulso (animacion CSS) en Verde Vivo (`#78BE20`), posicionados en coordenadas relativas al SVG del mapa
- Coordenadas aproximadas de las ciudades dentro del SVG:
  - Mexicali: noroeste (Baja California)
  - Chihuahua: norte-centro
  - Torreon/La Laguna: centro-norte (Coahuila/Durango)
  - Victoria de Durango: centro-oeste
- Se usara un `path` SVG simplificado pero reconocible de Mexico
- Tooltips nativos con `title` o componentes Tooltip de Radix para los nombres de ciudades
- Responsive: el mapa se ajustara al ancho del contenedor

