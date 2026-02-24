import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import { SITE_CONFIG } from "@/lib/constants";
import mapaImg from "@/assets/mapa-mexico.png";
import flamaImg from "@/assets/flama-ecogas.png";

const cities = [
  { name: "Mexicali", state: "Baja California", x: 12, y: 12 },
  { name: "Chihuahua", state: "Chihuahua", x: 32, y: 22 },
  { name: "Torreón / La Laguna", state: "Coahuila / Durango", x: 40, y: 38 },
  { name: "Victoria de Durango", state: "Durango", x: 34, y: 42 },
];

const Cobertura = () => {
  return (
    <Layout>
      <title>Cobertura | ECOGAS - Gas Natural en México</title>
      <meta name="description" content="Conoce las ciudades donde ECOGAS distribuye gas natural: Chihuahua, Torreón/La Laguna, Victoria de Durango y Mexicali." />

      <div className="container py-8 md:py-12">
        <PageBreadcrumb items={[{ label: "Cobertura" }]} />

        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Cobertura</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ECOGAS distribuye gas natural en 4 ciudades del norte de México, brindando energía limpia y eficiente a hogares, comercios e industrias.
          </p>
        </div>

        {/* Map Section */}
        <style>{`
          @keyframes flame-blink {
            0%, 100% { opacity: 1; transform: translate(-50%, -100%) scale(1); }
            50% { opacity: 0.35; transform: translate(-50%, -100%) scale(0.85); }
          }
        `}</style>
        <div className="relative max-w-3xl mx-auto mb-12">
          {/* Map with cyan overlay */}
          <div className="relative rounded-lg overflow-hidden">
            <div className="bg-secondary rounded-lg">
              <img
                src={mapaImg}
                alt="Mapa de México - Cobertura ECOGAS"
                className="w-full h-auto block"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>

            {/* Flame pins */}
            {cities.map((city, i) => (
              <div
                key={city.name}
                className="absolute flex flex-col items-center pointer-events-none"
                style={{ left: `${city.x}%`, top: `${city.y}%` }}
              >
                <img
                  src={flamaImg}
                  alt={city.name}
                  className="h-8 md:h-10 w-auto drop-shadow-lg"
                  style={{
                    animation: `flame-blink 1.8s ease-in-out infinite`,
                    animationDelay: `${i * 0.4}s`,
                    transform: "translate(-50%, -100%)",
                  }}
                />
                <span
                  className="text-[10px] md:text-xs font-bold text-foreground bg-background/80 px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap -mt-1"
                >
                  {city.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* City Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cities.map((city) => (
            <Card key={city.name} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-1">{city.name}</h3>
                <p className="text-sm text-muted-foreground">{city.state}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">¿Estás en nuestra zona de cobertura?</h2>
          <p className="mb-6 opacity-90 max-w-xl mx-auto">
            Contrata gas natural para tu hogar o negocio. Es más económico, limpio y seguro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contratar/como-contratar/">
                Quiero Contratar <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href={SITE_CONFIG.phoneLink}>
                <Phone className="mr-1 h-4 w-4" /> {SITE_CONFIG.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cobertura;
