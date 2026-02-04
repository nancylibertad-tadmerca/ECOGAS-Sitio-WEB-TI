import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight, Home, Building, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { SITE_CONFIG } from "@/lib/constants";

const Chihuahua = () => {
  const zonas = [
    "Centro Histórico",
    "Zona Norte",
    "Zona Sur",
    "Zona Poniente",
    "Parques Industriales",
    "Fraccionamientos residenciales",
  ];

  return (
    <Layout>
      <title>Gas Natural en Chihuahua | ECOGAS - Cobertura y Servicios</title>
      <meta name="description" content="ECOGAS ofrece servicio de gas natural en Chihuahua. Conoce nuestras zonas de cobertura, servicios para hogar, comercio e industria. Contrata hoy." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[
          { label: "Cobertura", href: "/cobertura/chihuahua/" },
          { label: "Chihuahua" }
        ]} />
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Gas Natural en Chihuahua</h1>
          </div>
          
          <ImagePlaceholder 
            text="Imagen representativa de Chihuahua" 
            aspectRatio="wide"
            className="mb-8"
          />
          
          <p className="text-lg text-muted-foreground mb-8">
            ECOGAS lleva gas natural a miles de hogares, comercios e industrias en la 
            ciudad de Chihuahua. Contamos con una amplia red de distribución que garantiza 
            un servicio confiable y continuo.
          </p>

          {/* Zones */}
          <div className="bg-muted rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Zonas con Cobertura</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {zonas.map((zona) => (
                <div key={zona} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{zona}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              * La cobertura está en constante expansión. Contáctanos para verificar 
              disponibilidad en tu zona.
            </p>
          </div>

          {/* Services */}
          <h2 className="text-2xl font-bold mb-6">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <Link to="/servicios/hogar/">
                <CardHeader>
                  <Home className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Hogar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Gas natural para tu familia con seguridad y eficiencia.
                  </p>
                </CardContent>
              </Link>
            </Card>
            
            <Card>
              <Link to="/servicios/comercios/">
                <CardHeader>
                  <Building className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Comercios</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Impulsa tu negocio con energía confiable y económica.
                  </p>
                </CardContent>
              </Link>
            </Card>
            
            <Card>
              <Link to="/servicios/industria/">
                <CardHeader>
                  <Factory className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Industria</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Soluciones energéticas para optimizar tus procesos.
                  </p>
                </CardContent>
              </Link>
            </Card>
          </div>

          {/* CTAs */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">¿Listo para contratar?</h3>
            <p className="opacity-90 mb-6">
              Comunícate con nosotros para verificar cobertura en tu domicilio y 
              comenzar el proceso de contratación.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contratar/como-contratar/">
                  Quiero Contratar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <a href={SITE_CONFIG.phoneLink}>
                  <Phone className="mr-2 h-4 w-4" />
                  {SITE_CONFIG.phone}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contacto/">Contacto</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chihuahua;
