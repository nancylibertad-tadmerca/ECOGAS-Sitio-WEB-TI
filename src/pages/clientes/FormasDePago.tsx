import { Link } from "react-router-dom";
import bancosPagoImg from "@/assets/bancos-pago.png";
import { CreditCard, Building, Store, Smartphone, ArrowRight, AlertCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import { SITE_CONFIG } from "@/lib/constants";

const FormasDePago = () => {
  const metodos = [
    {
      icon: Smartphone,
      title: "Pago en Línea",
      description: "Paga desde cualquier lugar con tu tarjeta de débito o crédito.",
      link: SITE_CONFIG.portals.pagoEnLinea
    },
    {
      icon: Building,
      title: "Bancos",
      description: "Realiza tu pago en ventanilla de cualquier banco participante.",
      bankImage: bancosPagoImg
    },
    {
      icon: Store,
      title: "Tiendas de Conveniencia",
      description: "Paga en tiendas autorizadas cerca de tu casa.",
      stores: ["OXXO", "7-Eleven", "Farmacias del Ahorro", "Coppel"]
    },
    {
      icon: CreditCard,
      title: "Centros de Atención",
      description: "Visita nuestros centros de atención al cliente.",
      note: "Consulta ubicaciones en tu ciudad"
    },
  ];

  return (
    <Layout>
      <title>Formas de Pago | ECOGAS - Opciones para Pagar tu Recibo</title>
      <meta name="description" content="Conoce todas las formas de pago de ECOGAS: en línea, bancos, tiendas de conveniencia y centros de atención. Paga tu recibo de gas natural fácilmente." />
      
      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[
          { label: "Soy Cliente", href: "/clientes/formas-de-pago/" },
          { label: "Formas de Pago" }
        ]} />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Formas de Pago</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Elige la forma de pago que más te convenga. Tenemos múltiples opciones 
            para que pagues tu recibo de manera fácil y segura.
          </p>

          <Alert className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Importante:</strong> Al realizar tu pago, conserva tu comprobante. 
              El pago puede tardar hasta 48 horas en reflejarse en tu cuenta.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {metodos.map((metodo) => (
              <Card key={metodo.title}>
                <CardHeader>
                  <metodo.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{metodo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{metodo.description}</p>
                  {metodo.bankImage && (
                    <img src={metodo.bankImage} alt="Logos de bancos participantes" className="mt-2 w-full h-auto rounded" />
                  )}
                  {metodo.stores && (
                    <p className="text-sm">{metodo.stores.join(" • ")}</p>
                  )}
                  {metodo.note && (
                    <p className="text-sm text-muted-foreground">{metodo.note}</p>
                  )}
                  {metodo.link && (
                    <Button asChild variant="link" className="p-0 h-auto mt-2">
                      <a href={metodo.link} target="_blank" rel="noopener noreferrer">
                        Ir a pagar en línea
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href={SITE_CONFIG.portals.pagoEnLinea} target="_blank" rel="noopener noreferrer">
                Pagar en Línea
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={SITE_CONFIG.portals.consultaRecibo} target="_blank" rel="noopener noreferrer">
                Consultar Factura
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormasDePago;
