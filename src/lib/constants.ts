// ECOGAS Site Configuration
// Easily editable values for external URLs, contact info, etc.

export const SITE_CONFIG = {
  // Contact Information
  phone: "800 700 0000",
  phoneLink: "tel:8007000000",
  whatsapp: "8007000000",
  whatsappLink: "https://wa.me/528007000000",
  email: "contacto@ecogas.com.mx", // Placeholder
  
  // Business Hours
  hours: {
    weekdays: "Atención Digital\nLunes a Viernes: 8:00 - 18:00",
    weekends: "Sábado: 9:00 - 14:00",
  },
  
  // External Portal URLs (Placeholders - replace with actual URLs)
  portals: {
    pagoEnLinea: "https://clientes.ecogas.com.mx/react/master/#INDEX",
    consultaRecibo: "https://clientes.ecogas.com.mx/react/master/#INDEX",
  },
  
  // HubSpot Form IDs (Placeholders - replace with actual IDs)
  hubspot: {
    portalId: "49715152",
    region: "na1",
    forms: {
      contacto: "aa3bdd32-9678-453f-9de8-c2f065983720",
      quieroContratar: "aa3bdd32-9678-453f-9de8-c2f065983720",
    },
  },
  
  // Company Data
  company: {
    name: "ECOGAS",
    fullName: "ECOGAS México",
    tagline: "El gas natural",
    description: "Distribuidora de gas natural en México, subsidiaria de Sempra Infraestructura",
    stats: {
      kmDuctos: "5,213",
      clientes: "168,870",
    },
  },
  
  // Coverage Cities
  cities: [
    { name: "Chihuahua", slug: "chihuahua" },
    { name: "Torreón / La Laguna", slug: "torreon-laguna" },
    { name: "Victoria de Durango", slug: "victoria-durango" },
    { name: "Mexicali", slug: "mexicali" },
  ],
} as const;

export const NAV_LINKS = [
  {
    label: "Empresa",
    children: [
      { label: "Quiénes Somos", href: "/empresa/quienes-somos/" },
      { label: "Filosofía y Valores", href: "/empresa/filosofia-y-valores/" },
      { label: "Empresa Responsable", href: "/sustentabilidad/empresa-responsable/" },
    ],
  },
  {
    label: "Servicios",
    children: [
      { label: "Hogar", href: "/servicios/hogar/" },
      { label: "Comercios", href: "/servicios/comercios/" },
      { label: "Industria", href: "/servicios/industria/" },
    ],
  },
  {
    label: "Soy Cliente",
    children: [
      { label: "Formas de Pago", href: "/clientes/formas-de-pago/" },
      { label: "Pago en Línea", href: "/clientes/pago-en-linea/" },
      { label: "Consultar tu factura", href: "/clientes/recibo/" },
      { label: "Tips de Ahorro", href: "/blog/ahorro/tips-ahorrar-gas-natural/" },
    ],
  },
  { label: "Quiero Contratar", href: "/contratar/como-contratar/" },
  { label: "Mitos GN", href: "/gas-natural/que-es/" },
  { label: "Contacto", href: "/contacto/" },
] as const;
