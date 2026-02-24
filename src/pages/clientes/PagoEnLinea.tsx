import { Link } from "react-router-dom";
import { CreditCard, Shield, Clock, Phone, HelpCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import { SITE_CONFIG } from "@/lib/constants";

const PagoEnLinea = () => {
  const faqs = [
    {
      question: "¿Qué necesito para pagar en línea?",
      answer: "Necesitas tu número de cliente (que aparece en tu recibo) y una tarjeta de débito o crédito vigente."
    },
    {
      question: "¿Es seguro pagar en línea?",
      answer: "Sí, utilizamos tecnología de encriptación para proteger tu información. Todas las transacciones son procesadas de forma segura."
    },
    {
      question: "¿Cuánto tarda en reflejarse mi pago?",
      answer: "Los pagos en línea generalmente se reflejan en menos de 24 horas. Recibirás una confirmación por correo electrónico."
    },
  ];

  return (
    <Layout>
      <title>Pago en Línea | ECOGAS - Paga tu Recibo de Gas Natural</title>
      <meta name="description" content="Paga tu recibo de gas natural en línea de forma rápida y segura. Portal de pago ECOGAS disponible 24/7." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[
          { label: "Soy Cliente", href: "/clientes/formas-de-pago/" },
          { label: "Pago en Línea" }
        ]} />
        
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pago en Línea</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Paga tu recibo de gas natural de forma rápida, fácil y segura desde cualquier lugar.
          </p>

          {/* Main CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-8">
            <CreditCard className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Portal de Pagos</h2>
            <p className="opacity-90 mb-6">
              Haz clic en el botón para ir al portal de pagos seguro.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <a href={SITE_CONFIG.portals.pagoEnLinea} target="_blank" rel="noopener noreferrer">
                Ir a Pagar
              </a>
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold">Seguro</h3>
                <p className="text-sm text-muted-foreground">Transacciones encriptadas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold">24/7</h3>
                <p className="text-sm text-muted-foreground">Disponible siempre</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold">Fácil</h3>
                <p className="text-sm text-muted-foreground">Tarjeta de débito o crédito</p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="text-left">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="mb-8">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Alternative */}
          <div className="bg-muted rounded-lg p-6 mb-6">
            <p className="text-muted-foreground mb-4">
              ¿Prefieres pagar por teléfono o necesitas ayuda?
            </p>
            <Button asChild variant="outline">
              <a href={SITE_CONFIG.phoneLink}>
                <Phone className="mr-2 h-4 w-4" />
                {SITE_CONFIG.phone}
              </a>
            </Button>
          </div>

          {/* Return button */}
          <Button asChild variant="ghost" className="w-full">
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

export default PagoEnLinea;
