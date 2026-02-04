import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, Clock, Wrench, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";

const Comercios = () => {
  const beneficios = [
    {
      icon: DollarSign,
      title: "Ahorro en Costos",
      description: "Reduce tus gastos de operación con una fuente de energía más económica que otras alternativas."
    },
    {
      icon: Clock,
      title: "Continuidad de Operaciones",
      description: "Suministro constante 24/7 para que tu negocio nunca se detenga por falta de combustible."
    },
    {
      icon: Wrench,
      title: "Menor Mantenimiento",
      description: "Los equipos que funcionan con gas natural requieren menos mantenimiento y tienen mayor vida útil."
    },
    {
      icon: TrendingUp,
      title: "Competitividad",
      description: "Mejora tu rentabilidad con costos energéticos más bajos y predecibles."
    },
  ];

  return (
    <Layout>
      <title>Gas Natural para Comercios | ECOGAS - Ahorro y Eficiencia</title>
      <meta name="description" content="Gas natural para tu comercio. Reduce costos de operación, asegura continuidad de servicio y aumenta tu competitividad con ECOGAS." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[
          { label: "Servicios", href: "/servicios/hogar/" },
          { label: "Comercios" }
        ]} />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gas Natural para Comercios</h1>
          
          <ImagePlaceholder 
            text="Comercio usando gas natural" 
            aspectRatio="wide"
            className="mb-8"
          />
          
          <p className="text-lg text-muted-foreground mb-12">
            Impulsa tu negocio con gas natural. Restaurantes, panaderías, lavanderías, 
            hoteles y todo tipo de comercios pueden beneficiarse de una fuente de energía 
            confiable, económica y limpia.
          </p>

          {/* Benefits */}
          <h2 className="text-2xl font-bold mb-6">Beneficios para tu Negocio</h2>
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

          <div className="bg-muted rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4">¿Por qué elegir ECOGAS?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Asesoría personalizada para tu tipo de negocio</li>
              <li>✓ Instalación profesional y segura</li>
              <li>✓ Atención al cliente dedicada</li>
              <li>✓ Facturación clara y transparente</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/contratar/como-contratar/">
                Quiero Contratar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contacto/">Contacto Comercial</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Comercios;
