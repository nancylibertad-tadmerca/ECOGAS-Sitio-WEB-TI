import { Link } from "react-router-dom";
import { ArrowRight, Factory, Gauge, DollarSign, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import instalacionIndustrialImg from "@/assets/instalacion-industrial-gas.jpg";

const Industria = () => {
  const beneficios = [
    {
      icon: Gauge,
      title: "Optimización de Procesos",
      description: "El gas natural permite un control preciso de temperatura, mejorando la calidad de tus procesos industriales."
    },
    {
      icon: DollarSign,
      title: "Reducción de Costos",
      description: "Costos energéticos más bajos y predecibles que impactan directamente en tu rentabilidad."
    },
    {
      icon: Factory,
      title: "Continuidad Energética",
      description: "Suministro estable y continuo para mantener tu producción sin interrupciones."
    },
    {
      icon: Leaf,
      title: "Menor Huella Ambiental",
      description: "Cumple con regulaciones ambientales con un combustible de bajas emisiones."
    },
  ];

  return (
    <Layout>
      <title>Gas Natural Industrial | ECOGAS - Soluciones para Industria</title>
      <meta name="description" content="Soluciones de gas natural para industria. Optimiza procesos, reduce costos y mejora tu competitividad con el suministro confiable de ECOGAS." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[
          { label: "Servicios", href: "/servicios/hogar/" },
          { label: "Industria" }
        ]} />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gas Natural para la Industria</h1>
          
          <img 
            src={instalacionIndustrialImg} 
            alt="Instalación industrial de gas natural ECOGAS" 
            className="w-full rounded-lg object-cover aspect-[21/9] mb-8"
          />
          
          <p className="text-lg text-muted-foreground mb-12">
            Potencia tus operaciones industriales con gas natural. Una fuente de energía 
            versátil, económica y confiable que impulsa la productividad y competitividad 
            de tu empresa.
          </p>

          {/* Benefits */}
          <h2 className="text-2xl font-bold mb-6">Ventajas para tu Industria</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {beneficios.map((beneficio) => (
              <Card key={beneficio.title}>
                <CardHeader>
                  <beneficio.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{beneficio.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{beneficio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4">Aplicaciones Industriales</h3>
            <div className="grid md:grid-cols-2 gap-4 opacity-90">
              <ul className="space-y-2">
                <li>• Hornos y calderas</li>
                <li>• Generación de vapor</li>
                <li>• Secado industrial</li>
              </ul>
              <ul className="space-y-2">
                <li>• Procesos térmicos</li>
                <li>• Cogeneración</li>
                <li>• Climatización industrial</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/contacto/">
                Solicitar Asesoría
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/cobertura/chihuahua/">Ver Cobertura</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Industria;
