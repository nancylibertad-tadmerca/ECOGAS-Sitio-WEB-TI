import { Link } from "react-router-dom";
import gasparImg from "@/assets/gaspar-servicio.png";
import gasparWhatsapp from "@/assets/gaspar-whatsapp.png";
import { Phone, Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import HubSpotForm from "@/components/shared/HubSpotForm";
import { SITE_CONFIG } from "@/lib/constants";

const Contacto = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>Contacto | ECOGAS - Atención al Cliente Gas Natural</title>
      <meta name="description" content="Contáctanos en ECOGAS. Teléfono 800 700 0000, atención al cliente, soporte técnico y consultas sobre gas natural en Chihuahua, Torreón, Durango y Mexicali." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[{ label: "Contacto" }]} />
        
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por el medio que prefieras.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Phone className="h-10 w-10 mx-auto text-primary mb-2" />
              <CardTitle>Teléfono</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <a
                href={SITE_CONFIG.phoneLink}
                className="text-2xl font-bold text-primary hover:underline block">

                {SITE_CONFIG.phone}
              </a>
              <p className="text-sm text-muted-foreground">Línea gratuita</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Clock className="h-10 w-10 mx-auto text-primary mb-2" />
              <CardTitle>Horario de Atención</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-primary bg-primary-foreground text-sm whitespace-pre-line">{SITE_CONFIG.hours.weekdays}</p>
              <p className="text-primary">{SITE_CONFIG.hours.weekends}</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Mail className="h-10 w-10 mx-auto text-primary mb-2" />
              <CardTitle>Correo Electrónico</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-primary hover:underline">

                {SITE_CONFIG.email}
              </a>
            </CardContent>
          </Card>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-primary text-white rounded-lg p-8 mb-12 py-[32px] px-[40px]">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <MessageCircle className="h-12 w-12 mb-4 mx-auto lg:mx-0" />
              <h2 className="font-bold mb-2 text-4xl">Contáctanos por WhatsApp</h2>
              <p className="mb-4 opacity-90 text-2xl">Respuesta rápida a tus consultas</p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-[#25D366] hover:bg-white/90">
                <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">
                  Enviar mensaje
                </a>
              </Button>
            </div>
            <div className="flex justify-center items-end">
              <img
                src={gasparWhatsapp}
                alt="Gaspar - Servicio al Cliente ECOGAS"
                className="h-120 w-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            <HubSpotForm
              portalId={SITE_CONFIG.hubspot.portalId}
              formId="84a31ebf-3a17-4df1-8f24-c3511f4980d3"
              region={SITE_CONFIG.hubspot.region} />

          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Nuestras Ciudades</h2>
            <div className="space-y-4">
              {SITE_CONFIG.cities.map((city) =>
              <Link
                key={city.slug}
                to="/cobertura/"
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted transition-colors">

                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">{city.name}</span>
                </Link>
              )}
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">¿Quieres contratar gas natural?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Conoce los pasos para tener gas natural en tu hogar o negocio.
              </p>
              <Button asChild>
                <Link to="/contratar/como-contratar/">Cómo Contratar</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>);

};

export default Contacto;