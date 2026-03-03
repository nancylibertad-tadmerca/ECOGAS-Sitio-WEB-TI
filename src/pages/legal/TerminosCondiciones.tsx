import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, Download } from "lucide-react";

const ciudades = ["Chihuahua", "Laguna", "Mexicali"];
const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const anios = Array.from({ length: 7 }, (_, i) => String(2020 + i));

const mesesMap: Record<string, string> = {
  Enero: "enero", Febrero: "febrero", Marzo: "marzo", Abril: "abril",
  Mayo: "mayo", Junio: "junio", Julio: "julio", Agosto: "agosto",
  Septiembre: "septiembre", Octubre: "octubre", Noviembre: "noviembre", Diciembre: "diciembre",
};

const ciudadesMap: Record<string, string> = {
  Chihuahua: "chihuahua", Laguna: "laguna", Mexicali: "mexicali",
};

// Agregar aquí las claves de los PDFs disponibles de promociones
const availablePDFs = new Set<string>([
  // Ejemplo: "chihuahua-enero-2026",
]);

const TerminosCondiciones = () => {
  const [ciudad, setCiudad] = useState<string>("");
  const [mes, setMes] = useState<string>("");
  const [anio, setAnio] = useState<string>("");

  const hasSelection = ciudad && mes && anio;

  const pdfKey = hasSelection
    ? `${ciudadesMap[ciudad]}-${mesesMap[mes]}-${anio}`
    : "";
  const pdfAvailable = availablePDFs.has(pdfKey);
  const pdfPath = `/docs/terminos-condiciones/${pdfKey}.pdf`;

  return (
    <Layout>
      <title>Términos y Condiciones | ECOGAS</title>
      <meta name="description" content="Consulta los términos y condiciones de las promociones vigentes de ECOGAS por ciudad, mes y año." />

      <div className="container py-12 md:py-16">
        <PageBreadcrumb items={[{ label: "Términos y Condiciones" }]} />

        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-lg text-muted-foreground">
            Consulta los términos y condiciones de las promociones vigentes. Selecciona una ciudad, mes y año para ver la información disponible.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Ciudad</label>
              <Select value={ciudad} onValueChange={setCiudad}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una ciudad" />
                </SelectTrigger>
                <SelectContent>
                  {ciudades.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Mes</label>
              <Select value={mes} onValueChange={setMes}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un mes" />
                </SelectTrigger>
                <SelectContent>
                  {meses.map((m) => (
                    <SelectItem key={m} value={m}>{m}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Año</label>
              <Select value={anio} onValueChange={setAnio}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un año" />
                </SelectTrigger>
                <SelectContent>
                  {anios.map((a) => (
                    <SelectItem key={a} value={a}>{a}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card className="text-card-foreground">
            <CardContent className="p-8 text-center">
              {hasSelection ? (
                pdfAvailable ? (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-foreground">
                      Promociones Vigentes
                    </h2>
                    <p className="text-muted-foreground">
                      {ciudad} — {mes} {anio}
                    </p>
                    <div className="pt-2">
                      <Button asChild className="gap-2">
                        <a href={pdfPath} download>
                          <Download className="h-4 w-4" />
                          Descargar PDF
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold text-foreground">
                      {ciudad} — {mes} {anio}
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Info className="h-5 w-5" />
                      <p>Promociones no disponibles para esta selección.</p>
                    </div>
                  </div>
                )
              ) : (
                <div className="space-y-3 text-muted-foreground">
                  <Info className="h-8 w-8 mx-auto opacity-50" />
                  <p>Selecciona una ciudad, mes y año para consultar las promociones vigentes.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TerminosCondiciones;
