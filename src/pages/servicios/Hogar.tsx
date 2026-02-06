import { Link } from "react-router-dom";
import { Phone, Calendar, ArrowRight, Shield, Clock, Zap, ThermometerSun, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import { SITE_CONFIG } from "@/lib/constants";
import cocinaFamiliaImg from "@/assets/cocina-familia-hogar.jpg";

const Hogar = () => {
  const beneficios = [
    {
      icon: Shield,
      title: "Seguridad",
      description: "El gas natural es más seguro que el gas LP. Al ser más ligero que el aire, en caso de fuga se disipa rápidamente."
    },
    {
      icon: Clock,
      title: "Suministro Continuo",
      description: "Olvídate de quedarte sin gas. El suministro es constante las 24 horas del día, los 365 días del año."
    },
    {
      icon: Zap,
      title: "Eficiencia Energética",
      description: "Mayor poder calorífico significa que cocinas más rápido y calientas agua en menos tiempo."
    },
    {
      icon: ThermometerSun,
      title: "Confort",
      description: "Ideal para calefacción, agua caliente, estufa y secadora. Todo con un solo servicio."
    },
  ];

  const faqs = [
    {
      question: "¿Es seguro el gas natural en casa?",
      answer: "Sí, es muy seguro. El gas natural es más ligero que el aire, por lo que en caso de fuga se disipa hacia arriba. Además, tiene un olor característico que permite detectar cualquier anomalía."
    },
    {
      question: "¿Qué aparatos puedo usar con gas natural?",
      answer: "Puedes usar estufa, horno, calentador de agua, calefacción, secadora de ropa y parrillas. Algunos aparatos pueden requerir una conversión menor."
    },
    {
      question: "¿Cómo se cobra el servicio?",
      answer: "El cobro es mensual basado en tu consumo real, medido por un medidor instalado en tu propiedad. Recibes un recibo detallado cada mes."
    },
  ];

  return (
    <Layout>
      <title>Gas Natural para Hogar | ECOGAS - Seguridad y Eficiencia</title>
      <meta name="description" content="Gas natural para tu hogar. Seguro, eficiente y con suministro continuo. Conoce los beneficios del gas natural residencial con ECOGAS." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[
          { label: "Servicios", href: "/servicios/hogar/" },
          { label: "Hogar" }
        ]} />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gas Natural para tu Hogar</h1>
          
          <img 
            src={cocinaFamiliaImg} 
            alt="Familia cocinando con gas natural en su hogar" 
            className="w-full rounded-lg object-cover aspect-[21/9] mb-8"
          />
          
          <p className="text-lg text-muted-foreground mb-12">
            El gas natural transforma la vida en tu hogar. Disfruta de una fuente de energía 
            segura, económica y confiable para todas tus necesidades: cocinar, calentar agua, 
            calefacción y más.
          </p>

          {/* Benefits */}
          <h2 className="text-2xl font-bold mb-6">Beneficios para tu Familia</h2>
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

          {/* CTAs */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">¿Listo para disfrutar del gas natural?</h3>
            <p className="opacity-90 mb-6">
              Contáctanos para conocer cómo llevar el gas natural a tu hogar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <a href={SITE_CONFIG.phoneLink}>
                  <Phone className="mr-2 h-4 w-4" />
                  {SITE_CONFIG.phone}
                </a>
              </Button>
              <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contratar/como-contratar/">
                  Cómo Contratar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contacto/">Contacto</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hogar;
