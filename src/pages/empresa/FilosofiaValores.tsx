import { Link } from "react-router-dom";
import { Shield, Heart, Users, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import equipoOficina from "@/assets/equipo-ecogas-oficina.jpg";

const FilosofiaValores = () => {
  const valores = [
    {
      icon: Shield,
      title: "Seguridad",
      description: "La seguridad es nuestra prioridad número uno. Todas nuestras operaciones están diseñadas para proteger a nuestros clientes, empleados y comunidades."
    },
    {
      icon: Heart,
      title: "Integridad",
      description: "Actuamos con honestidad y transparencia en todas nuestras relaciones, cumpliendo siempre con nuestros compromisos."
    },
    {
      icon: Users,
      title: "Servicio",
      description: "Nos enfocamos en brindar la mejor experiencia a nuestros clientes, atendiendo sus necesidades con profesionalismo y calidez."
    },
    {
      icon: Leaf,
      title: "Responsabilidad Ambiental",
      description: "Promovemos el uso del gas natural como una alternativa energética más limpia, contribuyendo al cuidado del medio ambiente."
    },
  ];

  return (
    <Layout>
      <title>Filosofía y Valores | ECOGAS - Seguridad y Compromiso</title>
      <meta name="description" content="Conoce la filosofía y valores de ECOGAS. Seguridad, integridad, servicio y responsabilidad ambiental guían nuestro compromiso con clientes y comunidades." />
      
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${equipoOficina})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/95" />
        <div className="relative z-10 container py-8 md:py-12">
          <PageBreadcrumb items={[
            { label: "Empresa", href: "/empresa/quienes-somos/" },
            { label: "Filosofía y Valores" }
          ]} />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Filosofía y Valores</h1>
            
            <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-12">
              <Shield className="h-12 w-12 mb-4" />
              <h2 className="text-2xl font-bold mb-4">La Seguridad es Primero</h2>
              <p className="opacity-90">
                En ECOGAS, la seguridad no es solo un valor, es la base de todo lo que hacemos. 
                Cada decisión, cada proceso y cada acción están guiados por nuestro compromiso 
                inquebrantable con la seguridad de nuestros clientes, empleados y comunidades.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {valores.map((valor) => (
                <Card key={valor.title}>
                  <CardHeader>
                    <valor.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>{valor.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{valor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Nuestro Compromiso Social</h3>
              <p className="text-muted-foreground mb-4">
                Como empresa responsable, desarrollamos programas que benefician a las comunidades 
                donde operamos.
              </p>
              <Button asChild>
                <Link to="/sustentabilidad/empresa-responsable/">
                  Empresa Responsable
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FilosofiaValores;
