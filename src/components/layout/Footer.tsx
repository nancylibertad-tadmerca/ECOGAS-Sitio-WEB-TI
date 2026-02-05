import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import logoWhite from "@/assets/logo-ecogas-white.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Contact */}
          <div className="space-y-4">
            <Link to="/">
              <img 
                src={logoWhite} 
                alt="ECOGAS" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm opacity-90">
              {SITE_CONFIG.company.description}
            </p>
            <div className="space-y-2 text-sm">
              <a 
                href={SITE_CONFIG.phoneLink} 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                {SITE_CONFIG.phone}
              </a>
              <a 
                href={`mailto:${SITE_CONFIG.email}`} 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:opacity-80 transition-opacity">Inicio</Link>
              </li>
              <li>
                <Link to="/empresa/quienes-somos/" className="hover:opacity-80 transition-opacity">Quiénes Somos</Link>
              </li>
              <li>
                <Link to="/servicios/hogar/" className="hover:opacity-80 transition-opacity">Servicios para Hogar</Link>
              </li>
              <li>
                <Link to="/contratar/como-contratar/" className="hover:opacity-80 transition-opacity">Quiero Contratar</Link>
              </li>
              <li>
                <Link to="/gas-natural/que-es/" className="hover:opacity-80 transition-opacity">¿Qué es el Gas Natural?</Link>
              </li>
              <li>
                <Link to="/contacto/" className="hover:opacity-80 transition-opacity">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Soy Cliente */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Soy Cliente</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/clientes/formas-de-pago/" className="hover:opacity-80 transition-opacity">Formas de Pago</Link>
              </li>
              <li>
                <Link to="/clientes/pago-en-linea/" className="hover:opacity-80 transition-opacity">Pago en Línea</Link>
              </li>
              <li>
                <Link to="/clientes/recibo/" className="hover:opacity-80 transition-opacity">Consultar Recibo</Link>
              </li>
              <li>
                <Link to="/blog/ahorro/tips-ahorrar-gas-natural/" className="hover:opacity-80 transition-opacity">Tips de Ahorro</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© {currentYear} {SITE_CONFIG.company.fullName}. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link to="/aviso-de-privacidad/" className="hover:opacity-100 transition-opacity">
                Aviso de Privacidad
              </Link>
              <Link to="/terminos-y-condiciones/" className="hover:opacity-100 transition-opacity">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
