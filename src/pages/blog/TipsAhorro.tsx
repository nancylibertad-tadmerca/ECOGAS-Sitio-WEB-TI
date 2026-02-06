import { Link } from "react-router-dom";
import { Lightbulb, ThermometerSun, Wrench, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import clientaAhorroImg from "@/assets/clienta-ahorro-recibo.jpg";

const TipsAhorro = () => {
  const tips = [
    {
      icon: Wrench,
      titulo: "Revisa tus instalaciones",
      descripcion: "Programa una revisión anual de tus instalaciones de gas. Un sistema en buen estado es más eficiente y seguro."
    },
    {
      icon: ThermometerSun,
      titulo: "Usa el termostato correctamente",
      descripcion: "Ajusta tu calentador de agua a una temperatura moderada (50-60°C). Temperaturas más altas consumen más gas sin beneficio adicional."
    },
    {
      icon: Clock,
      titulo: "Cocina de manera eficiente",
      descripcion: "Usa tapas en tus ollas, descongela alimentos antes de cocinar y apaga la estufa unos minutos antes de que termine la cocción."
    },
    {
      icon: Lightbulb,
      titulo: "Aprovecha la luz natural",
      descripcion: "En invierno, abre cortinas durante el día para calentar tu hogar naturalmente y reduce el uso de calefacción."
    },
  ];

  return (
    <Layout>
      <title>Tips para Ahorrar Gas Natural | ECOGAS - Consejos de Ahorro</title>
      <meta name="description" content="Descubre consejos prácticos para ahorrar gas natural en tu hogar. Tips de eficiencia energética para reducir tu consumo y cuidar tu bolsillo." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[
          { label: "Blog", href: "/blog/ahorro/tips-ahorrar-gas-natural/" },
          { label: "Ahorro", href: "/blog/ahorro/tips-ahorrar-gas-natural/" },
          { label: "Tips para Ahorrar" }
        ]} />
        
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tips para Ahorrar Gas Natural en tu Hogar
          </h1>
          
          <img 
            src={clientaAhorroImg} 
            alt="Colaboradora ECOGAS dando servicio al cliente" 
            className="w-full rounded-lg object-cover object-center aspect-[21/9] mb-8"
          />
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground">
              El gas natural es una fuente de energía eficiente, pero con algunos hábitos 
              simples puedes optimizar aún más tu consumo y reducir tu recibo mensual. 
              Aquí te compartimos consejos prácticos para ahorrar.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {tips.map((tip, index) => (
              <div key={index} className="flex gap-4 p-6 bg-muted rounded-lg">
                <tip.icon className="h-8 w-8 text-accent shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">{tip.titulo}</h2>
                  <p className="text-muted-foreground">{tip.descripcion}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4">Más consejos de ahorro</h3>
            <ul className="space-y-2 opacity-90 mb-6">
              <li>• Sella puertas y ventanas para evitar fugas de calor</li>
              <li>• Mantén limpios los quemadores de tu estufa</li>
              <li>• Considera instalar un calentador de paso para agua caliente</li>
              <li>• Aísla las tuberías de agua caliente</li>
              <li>• Usa ollas del tamaño adecuado para cada quemador</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/servicios/hogar/">
                Servicios para Hogar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contacto/">Contacto</Link>
            </Button>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default TipsAhorro;
