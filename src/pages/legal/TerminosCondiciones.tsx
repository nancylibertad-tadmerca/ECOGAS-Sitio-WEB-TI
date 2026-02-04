import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";

const TerminosCondiciones = () => {
  return (
    <Layout>
      <title>Términos y Condiciones | ECOGAS</title>
      <meta name="description" content="Términos y condiciones de uso del sitio web y servicios de ECOGAS." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[{ label: "Términos y Condiciones" }]} />
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Términos y Condiciones</h1>
          
          <div className="bg-muted rounded-lg p-8 text-center">
            <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Contenido Pendiente</h2>
            <p className="text-muted-foreground mb-6">
              Los términos y condiciones completos serán proporcionados por ECOGAS 
              para su integración en esta página.
            </p>
            <Button asChild variant="outline">
              <Link to="/contacto/">Contactar para más información</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TerminosCondiciones;
