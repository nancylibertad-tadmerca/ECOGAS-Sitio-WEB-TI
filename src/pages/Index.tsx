import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Clock, CreditCard, FileText, MapPin, Home, Building, Factory, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { SITE_CONFIG } from "@/lib/constants";
const Index = () => {
  return <Layout>
      {/* SEO */}
      <title>ECOGAS | Gas Natural para tu Hogar, Comercio e Industria en México</title>
      <meta name="description" content="ECOGAS distribuye gas natural seguro, eficiente y confiable en Chihuahua, Torreón, Durango y Mexicali. Contrata hoy y disfruta los beneficios del gas natural." />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                El gas natural que tu hogar merece
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Seguro, eficiente y confiable. ECOGAS lleva energía limpia a tu hogar, negocio o industria en México.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/cobertura/chihuahua/">
                    Ver Cobertura
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/clientes/formas-de-pago/">Soy Cliente</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/contratar/como-contratar/">Quiero Contratar</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImagePlaceholder text="Hero image - familia usando gas natural" aspectRatio="video" className="shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Qué necesitas hoy?</h2>
            <p className="text-muted-foreground">Accede rápidamente a nuestros servicios</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/servicios/hogar/">
                <CardHeader className="text-center">
                  <Home className="h-10 w-10 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">Servicios</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Para hogar, comercio e industria
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/clientes/pago-en-linea/">
                <CardHeader className="text-center">
                  <CreditCard className="h-10 w-10 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">Pagos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Paga en línea o consulta opciones
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/contacto/">
                <CardHeader className="text-center">
                  <Phone className="h-10 w-10 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">Contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Atención al cliente y soporte
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/cobertura/chihuahua/">
                <CardHeader className="text-center">
                  <MapPin className="h-10 w-10 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">Cobertura</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Ciudades donde operamos
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* What is Natural Gas */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImagePlaceholder text="Imagen ilustrativa gas natural" aspectRatio="video" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">¿Qué es el gas natural?</h2>
              <p className="text-muted-foreground">
                El gas natural es una fuente de energía limpia, segura y eficiente que se extrae directamente de la tierra. 
                A diferencia de otros combustibles, no requiere almacenamiento en casa y llega directamente a tu hogar 
                a través de una red de ductos seguros.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span>Más seguro que el gas LP</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-accent" />
                  <span>Mayor eficiencia energética</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>Suministro continuo 24/7</span>
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link to="/gas-natural/que-es/">
                  Conoce más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Beneficios del Gas Natural</h2>
            <p className="opacity-90">Para hogares, comercios e industrias</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Crear relaciones positivas</h3>
              <p className="opacity-90">
                El gas natural es más ligero que el aire y se disipa rápidamente, 
                reduciendo riesgos de acumulación.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Confiabilidad</h3>
              <p className="opacity-90">
                Suministro continuo sin interrupciones. No necesitas preocuparte 
                por quedarte sin combustible.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Eficiencia</h3>
              <p className="opacity-90">
                Mayor rendimiento energético significa menor consumo y ahorro 
                en tu recibo cada mes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Soy Cliente</h2>
            <p className="text-muted-foreground">Gestiona tu servicio de forma fácil</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <Link to="/clientes/formas-de-pago/">
                <CardHeader>
                  <CreditCard className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Formas de Pago</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Conoce todos los métodos y centros de pago autorizados.
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <Link to="/clientes/pago-en-linea/">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Pago en Línea</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Paga tu recibo de forma rápida y segura desde cualquier lugar.
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <Link to="/clientes/recibo/">
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Consultar Recibo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Revisa tu consumo y descarga tu recibo digital.
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 text-accent">¿Necesitas ayuda?</h2>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            Nuestro equipo está listo para atenderte. Contáctanos por teléfono o WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
              <Link to="/contacto/">Contactar</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href={SITE_CONFIG.phoneLink}>
                <Phone className="mr-2 h-4 w-4" />
                {SITE_CONFIG.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;