import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { SITE_CONFIG } from "@/lib/constants";

const QuienesSomos = () => {
  return (
    <Layout>
      <title>Quiénes Somos | ECOGAS - Distribuidora de Gas Natural en México</title>
      <meta name="description" content="Conoce ECOGAS, subsidiaria de Sempra Infraestructura. Más de 5,213 km de ductos y 168,870 clientes en Chihuahua, Torreón, Durango y Mexicali." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[
          { label: "Empresa", href: "/empresa/quienes-somos/" },
          { label: "Quiénes Somos" }
        ]} />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quiénes Somos</h1>
          
          <ImagePlaceholder 
            text="Imagen corporativa ECOGAS" 
            aspectRatio="wide"
            className="mb-8"
          />
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground">
              ECOGAS es una empresa distribuidora de gas natural, subsidiaria de Sempra Infraestructura, 
              con presencia en el norte de México. Nos dedicamos a llevar energía limpia, segura y 
              eficiente a hogares, comercios e industrias.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6">
              <CardContent className="pt-4">
                <Building2 className="h-10 w-10 mx-auto text-primary mb-4" />
                <p className="text-3xl font-bold text-primary">+{SITE_CONFIG.company.stats.kmDuctos}</p>
                <p className="text-muted-foreground">km de ductos</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-4">
                <Users className="h-10 w-10 mx-auto text-primary mb-4" />
                <p className="text-3xl font-bold text-primary">+{SITE_CONFIG.company.stats.clientes}</p>
                <p className="text-muted-foreground">clientes atendidos</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-4">
                <Award className="h-10 w-10 mx-auto text-primary mb-4" />
                <p className="text-3xl font-bold text-primary">4</p>
                <p className="text-muted-foreground">ciudades de cobertura</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-muted-foreground mb-4">
              La seguridad es nuestro valor principal. Conoce la filosofía que guía 
              nuestras operaciones y compromiso con la comunidad.
            </p>
            <Button asChild>
              <Link to="/empresa/filosofia-y-valores/">
                Filosofía y Valores
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline">
              <Link to="/sustentabilidad/empresa-responsable/">Empresa Responsable</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contacto/">Contacto</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuienesSomos;
