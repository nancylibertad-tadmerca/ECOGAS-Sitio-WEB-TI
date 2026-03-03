

## Crear pagina de Certificaciones y agregarla al Footer

### Archivos a crear/modificar

**1. Crear `src/pages/empresa/Certificaciones.tsx`** (nuevo archivo)

Pagina con el contenido de certificaciones de ECOGAS, replicando la informacion obtenida del sitio oficial. Incluira:
- Hero o titulo principal: "Certificaciones"
- Subtitulo: "Estamos orgullosos de contar con certificaciones de calidad, medio ambiente y seguridad."
- 4 tarjetas (cards) con cada certificacion:
  - **ISO 9001:2008** - Sistema de gestion de calidad certificado bajo la norma ISO 9001:2008.
  - **PROFEPA y STPS** - Primera empresa privada del Norte del pais en distribucion de Gas Natural en recibir Industria Limpia y Empresa Segura.
  - **Empresa Familiarmente Responsable** - Distintivo por desarrollo y respeto hacia sus empleados.
  - **Empresa Segura** - Certificacion de seguridad.
- Cada tarjeta tendra un icono representativo (usando iconos de Lucide como Shield, Award, Heart, ShieldCheck), titulo y descripcion.
- Estructura y estilos consistentes con las demas paginas del sitio (Layout, PageBreadcrumb, etc.).
- Las imagenes originales de ecogas.com.mx no se incrustan directamente; se usan iconos de Lucide en su lugar.

**2. Modificar `src/App.tsx`**

- Importar el nuevo componente `Certificaciones`.
- Agregar ruta: `/empresa/certificaciones/`.

**3. Modificar `src/components/layout/Footer.tsx`**

- En la columna "Enlaces Rapidos", agregar un nuevo `<li>` con enlace a `/empresa/certificaciones/` con texto "Certificaciones".

### Estructura visual de la pagina

```text
Breadcrumb: Inicio > Certificaciones

CERTIFICACIONES
Estamos orgullosos de contar con certificaciones...

[Card ISO 9001]  [Card PROFEPA]
[Card EFR]       [Card Empresa Segura]
```

