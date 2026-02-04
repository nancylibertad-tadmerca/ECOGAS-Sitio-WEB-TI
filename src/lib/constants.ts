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
    weekdays: "Lunes a Viernes: 8:00 - 18:00",
    weekends: "Sábado: 9:00 - 14:00",
  },
  
  // External Portal URLs (Placeholders - replace with actual URLs)
  portals: {
    pagoEnLinea: "https://portal-pago.ecogas.com.mx", // Placeholder
    consultaRecibo: "https://portal-recibo.ecogas.com.mx", // Placeholder
  },
  
  // HubSpot Form IDs (Placeholders - replace with actual IDs)
  hubspot: {
    portalId: "HUBSPOT_PORTAL_ID", // Replace with actual Portal ID
    forms: {
      contacto: "HUBSPOT_FORM_CONTACTO", // Replace with actual Form ID
      quieroContratar: "HUBSPOT_FORM_CONTRATAR", // Replace with actual Form ID
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
      { label: "Consultar Recibo", href: "/clientes/recibo/" },
      { label: "Tips de Ahorro", href: "/blog/ahorro/tips-ahorrar-gas-natural/" },
    ],
  },
  { label: "Quiero Contratar", href: "/contratar/como-contratar/" },
  { label: "Gas Natural", href: "/gas-natural/que-es/" },
  { label: "Cobertura", href: "/cobertura/chihuahua/" },
  { label: "Contacto", href: "/contacto/" },
] as const;
