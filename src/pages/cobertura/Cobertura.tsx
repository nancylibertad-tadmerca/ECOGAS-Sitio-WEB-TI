import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { SITE_CONFIG } from "@/lib/constants";

const cities = [
  { name: "Mexicali", state: "Baja California", x: 82, y: 68 },
  { name: "Chihuahua", state: "Chihuahua", x: 175, y: 120 },
  { name: "Torreón / La Laguna", state: "Coahuila / Durango", x: 225, y: 195 },
  { name: "Victoria de Durango", state: "Durango", x: 195, y: 215 },
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
        <div className="relative max-w-3xl mx-auto mb-12">
          <svg
            viewBox="0 0 500 400"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Mexico silhouette - simplified path */}
            <path
              d="M45,95 L55,80 L60,60 L70,45 L85,35 L95,30 L105,32 L110,40 L108,55 L100,65 L95,75 L90,80 L85,90 L82,100 L78,110 L72,115 L65,120 L60,130 L58,140 L62,148 L68,152 L75,150 L82,142 L90,135 L98,130 L108,128 L118,125 L128,120 L138,115 L148,108 L155,100 L162,92 L170,85 L180,80 L190,78 L200,80 L210,85 L220,82 L230,78 L240,75 L250,72 L260,68 L270,65 L280,62 L290,60 L300,58 L310,60 L320,65 L328,72 L332,80 L335,90 L340,98 L345,105 L350,112 L355,120 L358,128 L360,135 L358,145 L352,155 L345,162 L338,168 L330,175 L322,180 L315,188 L308,195 L300,202 L292,210 L285,218 L278,225 L270,232 L262,240 L255,248 L250,255 L248,262 L252,268 L258,272 L265,275 L272,280 L278,288 L282,295 L280,305 L275,312 L268,318 L260,322 L252,325 L245,330 L238,335 L230,338 L222,340 L215,342 L210,345 L208,350 L212,355 L218,358 L225,360 L230,365 L228,370 L222,372 L215,368 L208,362 L200,358 L192,355 L185,352 L178,348 L172,342 L168,335 L165,328 L160,322 L155,318 L148,315 L142,310 L138,305 L135,298 L132,290 L130,282 L128,275 L125,268 L120,262 L115,258 L108,255 L102,250 L98,245 L95,238 L92,230 L88,225 L82,222 L75,220 L70,215 L68,208 L72,200 L78,195 L82,188 L85,180 L80,175 L72,172 L65,168 L58,165 L52,160 L48,152 L45,145 L42,138 L40,130 L38,122 L38,112 L40,102 Z"
              fill="hsl(197, 100%, 26%)"
              stroke="hsl(193, 100%, 34%)"
              strokeWidth="1.5"
              opacity="0.9"
            />
            {/* Baja California peninsula */}
            <path
              d="M45,95 L40,102 L35,108 L30,115 L28,125 L30,135 L35,145 L40,155 L42,165 L40,175 L35,185 L32,195 L30,205 L32,215 L38,222 L45,228 L50,220 L48,210 L50,200 L55,190 L58,180 L55,170 L50,160 L48,152 L52,160 L58,165 L60,155 L55,148 L52,140 L55,132 L58,125 L60,118 L58,110 L52,105 L48,100 Z"
              fill="hsl(197, 100%, 26%)"
              stroke="hsl(193, 100%, 34%)"
              strokeWidth="1.5"
              opacity="0.9"
            />
            {/* Yucatan peninsula */}
            <path
              d="M340,270 L350,265 L360,262 L370,258 L380,255 L388,258 L392,265 L390,275 L385,282 L378,288 L370,292 L362,290 L355,285 L348,280 L342,275 Z"
              fill="hsl(197, 100%, 26%)"
              stroke="hsl(193, 100%, 34%)"
              strokeWidth="1.5"
              opacity="0.9"
            />

            {/* City pins with pulse animation */}
            <style>{`
              @keyframes pulse-ring {
                0% { r: 6; opacity: 0.8; }
                100% { r: 16; opacity: 0; }
              }
              .pin-pulse {
                animation: pulse-ring 2s ease-out infinite;
              }
            `}</style>

            {cities.map((city, i) => (
              <g key={city.name}>
                {/* Pulse ring */}
                <circle
                  cx={city.x}
                  cy={city.y}
                  r="6"
                  fill="none"
                  stroke="hsl(85, 71%, 43%)"
                  strokeWidth="2"
                  className="pin-pulse"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
                {/* Pin dot */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r="6"
                      fill="hsl(85, 71%, 43%)"
                      stroke="white"
                      strokeWidth="2"
                      className="cursor-pointer drop-shadow-md hover:r-8 transition-all"
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="font-semibold">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {city.name}
                    </div>
                  </TooltipContent>
                </Tooltip>
                {/* Label */}
                <text
                  x={city.x}
                  y={city.y - 14}
                  textAnchor="middle"
                  className="fill-foreground text-[8px] font-semibold pointer-events-none"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {city.name}
                </text>
              </g>
            ))}
          </svg>
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
