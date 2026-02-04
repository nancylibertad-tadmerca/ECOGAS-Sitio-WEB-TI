
# Plan de Implementación: Sitio Web ECOGAS

## Visión General
Sitio web corporativo informativo para ECOGAS, empresa de gas natural en México. Diseño minimalista, mobile-first, con enfoque en claridad informativa y SEO optimizado para 4 ciudades: Chihuahua, Torreón/La Laguna, Victoria de Durango y Mexicali.

---

## Fase 1: Fundamentos y Diseño Base

### 1.1 Sistema de Diseño
- Configurar paleta de colores ECOGAS en Tailwind (Azul Institucional, Azul Cian, Verde Vivo)
- Integrar tipografía Montserrat desde Google Fonts
- Copiar logos a assets del proyecto (color, mono azul, mono blanco)
- Definir estilos base (botones, cards, secciones, espaciado)

### 1.2 Componentes Globales
- **Header sticky:** Logo + menú de navegación + CTA "Contacto"
  - Menú: Empresa, Servicios, Soy cliente, Quiero contratar, Pagos (dropdown), Cobertura, Contacto
  - Menú hamburguesa responsive para móvil
- **Footer completo:** Sitemap, contacto (800 700 0000), ciudades de cobertura, enlaces legales
- **Chat flotante:** Botón fijo bottom-right con ícono de WhatsApp, enlace a wa.me/8007000000
- **Breadcrumbs:** Navegación contextual para páginas internas
- **Placeholder de imagen:** Componente reutilizable "(Imagen provista por ECOGAS)"
- **Placeholder HubSpot:** Componente para formularios con mensaje de configuración pendiente

---

## Fase 2: Páginas Principales

### 2.1 Home (/)
- **Hero minimalista:** Titular + subcopy + 3 CTAs suaves (Ver cobertura, Soy cliente, Quiero contratar)
- **Accesos rápidos:** Cards para Servicios, Pagos, Contacto, Cobertura
- **¿Qué es el gas natural?:** Preview con enlace a página completa
- **Beneficios residenciales:** Seguridad, Confiabilidad, Eficiencia (iconos)
- **Bloque "Soy cliente":** Cards de Formas de pago, Pago en línea, Recibo
- **CTA final:** "¿Necesitas ayuda?" + botón a contacto

### 2.2 Contacto (/contacto/)
- Hero + tarjetas de contacto (teléfono, horario)
- Formulario HubSpot placeholder (contacto general)
- Links rápidos a ciudades de cobertura
- Botón WhatsApp prominente
- SEO: Title y meta optimizados

---

## Fase 3: Sección Empresa

### 3.1 Quiénes Somos (/empresa/quienes-somos/)
- Historia y presencia de ECOGAS (subsidiaria de Sempra Infraestructura)
- Datos: +5,213 km de ductos, +168,870 clientes
- Bloque "Nuestros valores" con enlace a filosofía
- SEO implementado según especificaciones

### 3.2 Filosofía y Valores (/empresa/filosofia-y-valores/)
- Seguridad como eje central
- Cards de valores corporativos
- Enlace a empresa responsable

### 3.3 Empresa Responsable (/sustentabilidad/empresa-responsable/)
- Programas: educación, salud, medio ambiente, desarrollo social
- Compromiso ético y comunitario

### 3.4 ¿Qué es el Gas Natural? (/gas-natural/que-es/)
- Contenido educativo: definición, origen, seguridad
- Acordeón de FAQs
- Enlaces a cobertura y contratación

---

## Fase 4: Sección Servicios

### 4.1 Hogar (/servicios/hogar/)
- Beneficios para familias: seguridad, suministro continuo, eficiencia
- FAQs en acordeón
- CTAs: Llamar (800 700 0000), Agendar cita, Contacto

### 4.2 Comercios (/servicios/comercios/)
- Beneficios para negocios: ahorro, continuidad, menor mantenimiento
- Por qué elegir ECOGAS

### 4.3 Industria (/servicios/industria/)
- Optimización de procesos, reducción de costos
- Continuidad energética

---

## Fase 5: Sección Soy Cliente

### 5.1 Formas de Pago (/clientes/formas-de-pago/)
- Lista de métodos y centros de pago autorizados
- Aviso importante (si aplica)
- Enlaces a pago en línea y recibo

### 5.2 Pago en Línea (/clientes/pago-en-linea/)
- Botón principal "Ir a pagar" (URL placeholder configurable)
- FAQ breve
- Alternativa: llamar al 800 700 0000

### 5.3 Recibo (/clientes/recibo/)
- Botón "Consultar recibo" (URL placeholder configurable)
- Instrucciones paso a paso
- CTAs de soporte

### 5.4 Tips de Ahorro (/blog/ahorro/tips-ahorrar-gas-natural/)
- Artículo con bullets: revisión de instalaciones, uso eficiente, hábitos
- CTAs a servicios hogar y contacto

---

## Fase 6: Quiero Contratar

### 6.1 Cómo Contratar (/contratar/como-contratar/)
- Módulo visual de 4 pasos: visita, contratación, instalación, activación
- Formulario HubSpot placeholder (quiero contratar)
- Schema HowTo para SEO

---

## Fase 7: Cobertura

### 7.1 Chihuahua (/cobertura/chihuahua/)
- Información de zonas con cobertura
- CTAs: contratar, contacto, soporte
- Servicios relacionados

### 7.2 Plantilla para Futuras Ciudades
- Estructura reutilizable para:
  - /cobertura/torreon-laguna/
  - /cobertura/victoria-durango/
  - /cobertura/mexicali/
- Enlaces en footer y navegación (contenido pendiente)

---

## Fase 8: SEO y Optimizaciones

### 8.1 SEO por Página
- Implementar Title, Meta Description y H1 según especificaciones exactas
- OpenGraph básico con imagen placeholder
- Enlazado interno contextual (mínimo 3 enlaces por página)

### 8.2 Páginas Legales (Placeholders)
- /aviso-de-privacidad/
- /terminos-y-condiciones/

---

## Configuración Técnica

### Rutas del Sitio
```
/                                    → Home
/empresa/quienes-somos/             → Quiénes Somos
/empresa/filosofia-y-valores/       → Filosofía y Valores
/sustentabilidad/empresa-responsable/ → Empresa Responsable
/gas-natural/que-es/                → Qué es el Gas Natural
/servicios/hogar/                   → Servicios Hogar
/servicios/comercios/               → Servicios Comercios
/servicios/industria/               → Servicios Industria
/clientes/formas-de-pago/           → Formas de Pago
/clientes/pago-en-linea/            → Pago en Línea
/clientes/recibo/                   → Recibo
/blog/ahorro/tips-ahorrar-gas-natural/ → Tips de Ahorro
/contratar/como-contratar/          → Cómo Contratar
/contacto/                          → Contacto
/cobertura/chihuahua/               → Cobertura Chihuahua
```

### Datos Configurables (Fácil edición posterior)
- URLs de portales externos (pago, recibo)
- Códigos embed de HubSpot
- Teléfono/WhatsApp: 800 700 0000
- Horarios de atención
- Correo electrónico de contacto

---

## Resultado Final

✅ 15+ páginas completas con diseño minimalista ECOGAS
✅ Navegación clara con menú responsive
✅ SEO optimizado por página
✅ Formularios HubSpot listos para integrar
✅ Chat flotante WhatsApp en todo el sitio
✅ Placeholders de imagen para reemplazo fácil
✅ Mobile-first, corporativo, profesional
