import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

// Empresa
import QuienesSomos from "./pages/empresa/QuienesSomos";
import FilosofiaValores from "./pages/empresa/FilosofiaValores";
import Certificaciones from "./pages/empresa/Certificaciones";

// Sustentabilidad
import EmpresaResponsable from "./pages/sustentabilidad/EmpresaResponsable";

// Gas Natural
import QueEsGasNatural from "./pages/gas-natural/QueEs";
import CalidadGas from "./pages/gas-natural/CalidadGas";

// Servicios
import ServiciosHogar from "./pages/servicios/Hogar";
import ServiciosComercios from "./pages/servicios/Comercios";
import ServiciosIndustria from "./pages/servicios/Industria";

// Clientes
import FormasDePago from "./pages/clientes/FormasDePago";
import PagoEnLinea from "./pages/clientes/PagoEnLinea";
import Recibo from "./pages/clientes/Recibo";
import LlamaAntesDeExcavar from "./pages/clientes/LlamaAntesDeExcavar";

// Blog
import TipsAhorro from "./pages/blog/TipsAhorro";

// Contratar
import ComoContratar from "./pages/contratar/ComoContratar";

// Legal
import AvisoPrivacidad from "./pages/legal/AvisoPrivacidad";
import TerminosCondiciones from "./pages/legal/TerminosCondiciones";

// Cobertura
import Cobertura from "./pages/cobertura/Cobertura";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />
          
          {/* Contacto */}
          <Route path="/contacto/" element={<Contacto />} />
          
          {/* Empresa */}
          <Route path="/empresa/quienes-somos/" element={<QuienesSomos />} />
          <Route path="/empresa/filosofia-y-valores/" element={<FilosofiaValores />} />
          <Route path="/empresa/certificaciones/" element={<Certificaciones />} />
          
          {/* Sustentabilidad */}
          <Route path="/sustentabilidad/empresa-responsable/" element={<EmpresaResponsable />} />
          
          {/* Gas Natural */}
          <Route path="/gas-natural/que-es/" element={<QueEsGasNatural />} />
          <Route path="/gas-natural/calidad/" element={<CalidadGas />} />
          
          {/* Servicios */}
          <Route path="/servicios/hogar/" element={<ServiciosHogar />} />
          <Route path="/servicios/comercios/" element={<ServiciosComercios />} />
          <Route path="/servicios/industria/" element={<ServiciosIndustria />} />
          
          {/* Clientes */}
          <Route path="/clientes/formas-de-pago/" element={<FormasDePago />} />
          <Route path="/clientes/pago-en-linea/" element={<PagoEnLinea />} />
          <Route path="/clientes/recibo/" element={<Recibo />} />
          <Route path="/clientes/llama-antes-de-excavar/" element={<LlamaAntesDeExcavar />} />
          
          {/* Blog */}
          <Route path="/blog/ahorro/tips-ahorrar-gas-natural/" element={<TipsAhorro />} />
          
          {/* Contratar */}
          <Route path="/contratar/como-contratar/" element={<ComoContratar />} />
          
          {/* Cobertura */}
          <Route path="/cobertura/" element={<Cobertura />} />
          
          {/* Legal */}
          <Route path="/aviso-de-privacidad/" element={<AvisoPrivacidad />} />
          <Route path="/terminos-y-condiciones/" element={<TerminosCondiciones />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
