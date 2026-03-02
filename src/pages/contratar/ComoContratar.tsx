import { Link } from "react-router-dom";
import { Search, FileText, Wrench, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import HubSpotForm from "@/components/shared/HubSpotForm";
import { SITE_CONFIG } from "@/lib/constants";
const ComoContratar = () => {
  const pasos = [{
    numero: 1,
    icon: Search,
    titulo: "Verifica cobertura",
    descripcion: "Confirma que tu domicilio está dentro de nuestra zona de cobertura. Puedes verificarlo en línea o llamarnos."
  }, {
    numero: 2,
    icon: FileText,
    titulo: "Solicita tu contrato",
    descripcion: "Completa el formulario de solicitud con tus datos. Un asesor te contactará para programar una visita."
  }, {
    numero: 3,
    icon: Wrench,
    titulo: "Instalación",
    descripcion: "Nuestro equipo técnico realizará la instalación de la acometida y el medidor en tu propiedad."
  }, {
    numero: 4,
    icon: CheckCircle,
    titulo: "Activación",
    descripcion: "Una vez completada la instalación, activamos tu servicio y puedes comenzar a disfrutar del gas natural."
  }];
  return <Layout>
      <title>Cómo Contratar Gas Natural | ECOGAS - Guía de Contratación</title>
      <meta name="description" content="Conoce los pasos para contratar gas natural con ECOGAS. Verifica cobertura, solicita tu contrato y disfruta del servicio en tu hogar o negocio." />
      
      {/* Schema HowTo */}
      <script type="application/ld+json">
        {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Cómo contratar gas natural con ECOGAS",
        "description": "Guía paso a paso para contratar el servicio de gas natural.",
        "step": pasos.map(paso => ({
          "@type": "HowToStep",
          "name": paso.titulo,
          "text": paso.descripcion
        }))
      })}
      </script>
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[{
        label: "Contratar",
        href: "/contratar/como-contratar/"
      }, {
        label: "Cómo Contratar"
      }]} />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Cómo Contratar Gas Natural
          </h1>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Contratar el servicio de gas natural es fácil. Sigue estos pasos y pronto 
            estarás disfrutando de los beneficios del gas natural en tu hogar o negocio.
          </p>

          {/* Steps */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {pasos.map(paso => <div key={paso.numero} className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                    {paso.numero}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <paso.icon className="h-5 w-5 text-primary" />
                      <h2 className="text-xl font-semibold">{paso.titulo}</h2>
                    </div>
                    <p className="text-muted-foreground">{paso.descripcion}</p>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Solicita una cita sin compromiso</h2>
              <HubSpotForm 
                portalId={SITE_CONFIG.hubspot.portalId}
                formId="1abea590-7764-4f4e-a53b-bfba4ab708b3"
                region={SITE_CONFIG.hubspot.region}
                redirectUrl="https://info.ecogas.com.mx/gracias-por-tus-datos"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">¿Necesitas ayuda?</h2>
              <div className="bg-primary text-primary-foreground rounded-lg p-6 mb-6">
                <Phone className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">Llámanos</h3>
                <p className="opacity-90 mb-4">
                  Nuestros asesores están listos para ayudarte con el proceso de contratación.
                </p>
                <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <a href={SITE_CONFIG.phoneLink}>{SITE_CONFIG.phone}</a>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default ComoContratar;