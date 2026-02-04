import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { SITE_CONFIG } from "@/lib/constants";

const Torreon = () => {
  return (
    <Layout>
      <title>Gas Natural en Torreón / La Laguna | ECOGAS</title>
      <meta name="description" content="ECOGAS ofrece servicio de gas natural en Torreón y la región de La Laguna. Contáctanos para conocer disponibilidad en tu zona." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[
          { label: "Cobertura", href: "/cobertura/chihuahua/" },
          { label: "Torreón / La Laguna" }
        ]} />
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Gas Natural en Torreón / La Laguna</h1>
          </div>
          
          <ImagePlaceholder 
            text="Imagen representativa de Torreón" 
            aspectRatio="wide"
            className="mb-8"
          />
          
          <p className="text-lg text-muted-foreground mb-8">
            ECOGAS tiene presencia en la región de La Laguna, llevando gas natural 
            a hogares, comercios e industrias de Torreón y municipios cercanos.
          </p>

          <div className="bg-muted rounded-lg p-8 mb-8">
            <h2 className="text-xl font-bold mb-4">Información de Cobertura</h2>
            <p className="text-muted-foreground mb-4">
              Contáctanos para verificar la disponibilidad del servicio en tu zona 
              y conocer los requisitos de contratación.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/contacto/">
                  Contactar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href={SITE_CONFIG.phoneLink}>
                  <Phone className="mr-2 h-4 w-4" />
                  {SITE_CONFIG.phone}
                </a>
              </Button>
            </div>
          </div>

          <Button asChild variant="link">
            <Link to="/contratar/como-contratar/">
              Conoce cómo contratar →
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Torreon;
