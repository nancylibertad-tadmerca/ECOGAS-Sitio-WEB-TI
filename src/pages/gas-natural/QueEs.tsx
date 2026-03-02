import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Flame, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";


const QueEs = () => {
  const faqs = [
    {
      question: "¿El gas natural es seguro?",
      answer: "Sí, el gas natural es más seguro que otros combustibles. Es más ligero que el aire, por lo que en caso de fuga se disipa rápidamente hacia arriba, reduciendo el riesgo de acumulación. Además, tiene un olor característico agregado (mercaptano) que permite detectar cualquier fuga fácilmente."
    },
    {
      question: "¿Cuál es la diferencia entre gas natural y gas LP?",
      answer: "El gas natural se distribuye a través de una red de ductos directamente a tu hogar, eliminando la necesidad de tanques. Es más económico, más seguro (al ser más ligero que el aire) y tiene menor impacto ambiental que el gas LP."
    },
    {
      question: "¿El gas natural contamina?",
      answer: "El gas natural es el combustible fósil más limpio. Produce menos emisiones de CO2 que el carbón o el petróleo, y prácticamente no emite partículas ni óxidos de azufre, contribuyendo a una mejor calidad del aire."
    },
    {
      question: "¿Cómo llega el gas natural a mi casa?",
      answer: "El gas natural viaja a través de una extensa red de ductos de alta presión desde los campos de extracción. Esta red se conecta a ductos de menor presión que distribuyen el gas a cada hogar de forma continua y segura."
    },
  ];

  return (
    <Layout>
      <title>¿Qué es el Gas Natural? | ECOGAS - Energía Limpia y Segura</title>
      <meta name="description" content="Descubre qué es el gas natural, cómo funciona y por qué es la opción más segura y eficiente para tu hogar. Origen, beneficios y seguridad del gas natural en México." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[
          { label: "Gas Natural", href: "/gas-natural/que-es/" },
          { label: "¿Qué es el Gas Natural?" }
        ]} />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">¿Qué es el Gas Natural?</h1>
          
          <div className="aspect-video mb-8 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/waCflGIaPtU"
              title="¿Qué es el Gas Natural? - ECOGAS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground">
              El gas natural es una fuente de energía que se encuentra en depósitos subterráneos 
              de la tierra. Está compuesto principalmente por metano y es considerado uno de los 
              combustibles más limpios y eficientes disponibles.
            </p>
            <p className="text-muted-foreground">
              A diferencia de otros combustibles que requieren almacenamiento en tanques, 
              el gas natural llega directamente a tu hogar a través de una red segura de ductos, 
              garantizando un suministro continuo las 24 horas del día, los 365 días del año.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-muted rounded-lg">
              <Shield className="h-10 w-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold mb-2">Seguro</h3>
              <p className="text-sm text-muted-foreground">
                Más ligero que el aire, se disipa rápidamente
              </p>
            </div>
            <div className="text-center p-6 bg-muted rounded-lg">
              <Zap className="h-10 w-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold mb-2">Eficiente</h3>
              <p className="text-sm text-muted-foreground">
                Mayor poder calorífico, menor consumo
              </p>
            </div>
            <div className="text-center p-6 bg-muted rounded-lg">
              <Flame className="h-10 w-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold mb-2">Limpio</h3>
              <p className="text-sm text-muted-foreground">
                Menores emisiones que otros combustibles
              </p>
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <HelpCircle className="h-6 w-6" />
            Preguntas Frecuentes
          </h2>
          <Accordion type="single" collapsible className="mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/contratar/como-contratar/">
                Quiero Contratar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QueEs;
