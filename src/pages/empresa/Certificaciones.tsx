import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Heart, ShieldCheck } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2008",
    description:
      "Sistema de gestión de calidad certificado bajo la norma ISO 9001:2008, que garantiza procesos eficientes y orientados a la satisfacción del cliente.",
  },
  {
    icon: Award,
    title: "PROFEPA y STPS",
    description:
      "Primera empresa privada del Norte del país en distribución de Gas Natural en recibir los reconocimientos de Industria Limpia y Empresa Segura.",
  },
  {
    icon: Heart,
    title: "Empresa Familiarmente Responsable",
    description:
      "Distintivo otorgado por el compromiso con el desarrollo integral y el respeto hacia sus empleados y sus familias.",
  },
  {
    icon: ShieldCheck,
    title: "Empresa Segura",
    description:
      "Certificación que avala el cumplimiento de los más altos estándares de seguridad en nuestras operaciones.",
  },
];

const Certificaciones = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <PageBreadcrumb
          items={[{ label: "Empresa", href: "/empresa/quienes-somos/" }, { label: "Certificaciones" }]}
        />

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Certificaciones
          </h1>
          <p className="text-lg text-muted-foreground">
            Estamos orgullosos de contar con certificaciones de calidad, medio ambiente y seguridad que respaldan nuestro compromiso con la excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <Card key={cert.title} className="text-card-foreground">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <cert.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">{cert.title}</h2>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Certificaciones;
