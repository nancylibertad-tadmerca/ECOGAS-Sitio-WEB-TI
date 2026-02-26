import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";

const LlamaAntesDeExcavar = () => {
  return (
    <Layout>
      <title>Llama antes de excavar | ECOGAS</title>
      <meta name="description" content="Antes de excavar, llama a ECOGAS para verificar la ubicación de tuberías de gas natural y evitar accidentes." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[
          { label: "Soy Cliente", href: "/clientes/formas-de-pago/" },
          { label: "Llama antes de excavar" }
        ]} />
        
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://info.ecogas.com.mx/llamaantesdeexcavar"
            className="w-full min-h-[80vh] border-0 rounded-lg shadow-sm"
            title="Llama antes de excavar"
          />

          <Button asChild variant="ghost" className="w-full mt-6">
            <Link to="/clientes/formas-de-pago/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Regresar al sitio ECOGAS
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default LlamaAntesDeExcavar;
