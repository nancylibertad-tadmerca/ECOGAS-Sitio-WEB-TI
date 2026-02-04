import { Link } from "react-router-dom";
import { GraduationCap, Heart, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";

const EmpresaResponsable = () => {
  const programas = [
    {
      icon: GraduationCap,
      title: "Educación",
      description: "Programas educativos sobre seguridad y uso eficiente del gas natural en escuelas y comunidades."
    },
    {
      icon: Heart,
      title: "Salud",
      description: "Iniciativas de apoyo a la salud comunitaria y campañas de bienestar para nuestros colaboradores."
    },
    {
      icon: Leaf,
      title: "Medio Ambiente",
      description: "Promoción del gas natural como energía limpia y acciones de reforestación en nuestras zonas de operación."
    },
    {
      icon: Users,
      title: "Desarrollo Social",
      description: "Apoyo a organizaciones locales y programas de voluntariado corporativo."
    },
  ];

  return (
    <Layout>
      <title>Empresa Responsable | ECOGAS - Compromiso Social y Ambiental</title>
      <meta name="description" content="ECOGAS está comprometida con las comunidades donde opera. Conoce nuestros programas de educación, salud, medio ambiente y desarrollo social." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[
          { label: "Sustentabilidad", href: "/sustentabilidad/empresa-responsable/" },
          { label: "Empresa Responsable" }
        ]} />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Empresa Responsable</h1>
          
          <ImagePlaceholder 
            text="Imagen de programa social ECOGAS" 
            aspectRatio="wide"
            className="mb-8"
          />
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground">
              En ECOGAS creemos que el éxito empresarial va de la mano con el bienestar de 
              las comunidades donde operamos. Por eso, desarrollamos programas que generan 
              un impacto positivo en la sociedad y el medio ambiente.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Nuestros Programas</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {programas.map((programa) => (
              <Card key={programa.title}>
                <CardHeader>
                  <programa.icon className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>{programa.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{programa.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Compromiso Ético</h3>
            <p className="opacity-90 mb-4">
              Operamos bajo los más altos estándares de ética empresarial, respetando 
              las normativas y promoviendo prácticas comerciales justas y transparentes.
            </p>
            <Button asChild variant="secondary" className="bg-white text-accent hover:bg-white/90">
              <Link to="/empresa/filosofia-y-valores/">Conoce nuestros valores</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EmpresaResponsable;
