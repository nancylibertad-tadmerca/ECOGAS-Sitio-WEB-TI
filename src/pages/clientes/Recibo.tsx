import { Link } from "react-router-dom";
import { FileText, Download, Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import { SITE_CONFIG } from "@/lib/constants";

const Recibo = () => {
  const pasos = [
  {
    numero: 1,
    titulo: "Ingresa al portal",
    descripcion: "Haz clic en el botón 'Consultar Recibo' para acceder al portal."
  },
  {
    numero: 2,
    titulo: "Ingresa tu número de cliente",
    descripcion: "Escribe tu número de cliente que aparece en tu recibo anterior."
  },
  {
    numero: 3,
    titulo: "Consulta y descarga",
    descripcion: "Visualiza tu recibo actual y descárgalo en formato PDF."
  }];


  return (
    <Layout>
      <title>Consultar Recibo | ECOGAS - Descarga tu Recibo de Gas Natural</title>
      <meta name="description" content="Consulta y descarga tu recibo de gas natural ECOGAS. Accede a tu historial de consumo y realiza tus pagos de forma fácil." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[
        { label: "Soy Cliente", href: "/clientes/formas-de-pago/" },
        { label: "Consultar Recibo" }]
        } />
        
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Consultar Tu Factura </h1>
          
          <p className="text-lg text-muted-foreground mb-8">Accede a tu factura digital, revisa tu consumo y mantén un historial de tus pagos.

          </p>

          {/* Main CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-12">
            <FileText className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Portal de Autoservicio </h2>
            <p className="opacity-90 mb-6">
              Consulta y descarga tu factura de gas natural.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <a href={SITE_CONFIG.portals.consultaRecibo} target="_blank" rel="noopener noreferrer">
                Da clic para ir al Portal     
              </a>
            </Button>
          </div>

          {/* Steps */}
          <div className="text-left mb-12">
            <h2 className="text-xl font-bold mb-6">¿Cómo consultar tu recibo?</h2>
            <div className="space-y-6">
              {pasos.map((paso) =>
              <div key={paso.numero} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    {paso.numero}
                  </div>
                  <div>
                    <h3 className="font-semibold">{paso.titulo}</h3>
                    <p className="text-muted-foreground">{paso.descripcion}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            







            <Phone className="p-6 bg-muted rounded-lg text-left">
              <Download className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Descarga PDF</h3>
              <p className="text-sm text-muted-foreground">
                Guarda o imprime tu factura en formato digital.
              </p>
            </Phone>
          </div>

          {/* Support */}
          <div className="bg-muted rounded-lg p-6 mb-6">
            <p className="text-muted-foreground mb-4">¿No encuentras tu factura o necesitas ayuda?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <a href={SITE_CONFIG.phoneLink}>
                  <Phone className="mr-2 h-4 w-4" />
                  {SITE_CONFIG.phone}
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contacto/">Contacto</Link>
              </Button>
            </div>
          </div>

          {/* Return button */}
          <Button asChild variant="ghost" className="w-full">
            <Link to="/clientes/formas-de-pago/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Regresar al sitio ECOGAS
            </Link>
          </Button>
        </div>
      </div>
    </Layout>);
};

export default Recibo;