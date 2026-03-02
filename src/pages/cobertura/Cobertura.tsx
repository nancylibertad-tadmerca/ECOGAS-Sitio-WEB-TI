import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight, Map } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import { SITE_CONFIG } from "@/lib/constants";
import mapaImg from "@/assets/mapa-mexico.png";
import durangoInfoImg from "@/assets/durango-info.png";

const cities = [
  { name: "Mexicali", state: "Mexicali", x: 12, y: 12, mapEmbed: "https://www.google.com/maps/d/embed?mid=1iiZmgyP3R0ZEu6t2qJJ1t2gRgVY&ehbc=2E312F" },
  { name: "Chihuahua", state: "Chihuahua", x: 32, y: 22, mapEmbed: "https://www.google.com/maps/d/embed?mid=10fep7Se2Bcx4N7vh1DHAjlGO47U&ehbc=2E312F", address: "Calle Colegio 6300, Chihuahua, Chih.", addressMapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d875.4641886962296!2d-106.12466672397125!3d28.634054994557236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzAyLjYiTiAxMDbCsDA3JzI0LjQiVw!5e0!3m2!1ses-419!2smx!4v1771978669318!5m2!1ses-419!2smx" },
  { name: "Torreón / La Laguna", state: "Torreón / Laguna", x: 40, y: 38, mapEmbed: "https://www.google.com/maps/d/embed?mid=1YaumPO09mcZQ__g4ZF3k8rMenf0&ehbc=2E312F" },
  { name: "Victoria de Durango", state: "Durango", x: 34, y: 42, infoImage: durangoInfoImg },
];

const Cobertura = () => {
  const [selectedCity, setSelectedCity] = useState<typeof cities[number] | null>(null);

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
        <div className="max-w-3xl mx-auto mb-12 px-4 md:px-0">
          <img
            src={mapaImg}
            alt="Mapa de México - Cobertura ECOGAS"
            className="w-full h-auto block rounded-lg animate-fade-in animate-[pulse_3s_ease-in-out_infinite]"
          />
        </div>

        {/* City Cards */}
        <TooltipProvider delayDuration={200}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cities.map((city) => {
              const cardEl = (
                <Card
                  key={city.name}
                  className={`text-center hover:shadow-lg transition-shadow ${(city.mapEmbed || city.infoImage) ? "cursor-pointer ring-accent/30 hover:ring-2" : ""}`}
                  onClick={() => (city.mapEmbed || city.infoImage) && setSelectedCity(city)}
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{city.name}</h3>
                    <p className="text-sm text-muted-foreground">{city.state}</p>
                    {(city.mapEmbed || city.infoImage) && (
                      <p className="text-xs text-accent mt-2 flex items-center justify-center gap-1">
                        <Map className="h-3 w-3" /> Ver mapa
                      </p>
                    )}
                  </CardContent>
                </Card>
              );

              if (city.address) {
                return (
                  <Tooltip key={city.name}>
                    <TooltipTrigger asChild>{cardEl}</TooltipTrigger>
                    <TooltipContent side="bottom" className="w-80 p-3">
                      <p className="font-semibold text-sm mb-2">{city.address}</p>
                      {city.addressMapEmbed && (
                        <iframe
                          src={city.addressMapEmbed}
                          className="w-full h-48 rounded border-0"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      )}
                    </TooltipContent>
                  </Tooltip>
                );
              }

              return cardEl;
            })}
          </div>
        </TooltipProvider>

        {/* Google Maps Dialog */}
        <Dialog open={!!selectedCity} onOpenChange={(open) => !open && setSelectedCity(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Cobertura en {selectedCity?.name}</DialogTitle>
            </DialogHeader>
            {selectedCity?.mapEmbed ? (
              <iframe
                src={selectedCity.mapEmbed}
                className="w-full h-[400px] md:h-[480px] rounded border-0"
                allowFullScreen
                loading="lazy"
              />
            ) : selectedCity?.infoImage ? (
              <img src={selectedCity.infoImage} alt={`Información de ${selectedCity.name}`} className="w-full h-auto rounded" />
            ) : null}
          </DialogContent>
        </Dialog>

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
            <Button asChild size="lg" variant="secondary">
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
