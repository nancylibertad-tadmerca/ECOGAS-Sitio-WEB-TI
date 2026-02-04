import { FileText } from "lucide-react";

interface HubSpotFormPlaceholderProps {
  formType: "contacto" | "quieroContratar";
  title?: string;
}

const HubSpotFormPlaceholder = ({ 
  formType, 
  title = "Formulario de Contacto" 
}: HubSpotFormPlaceholderProps) => {
  return (
    <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center bg-muted/30">
      <FileText className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Este formulario de HubSpot está pendiente de configuración.
      </p>
      <div className="bg-muted rounded-md p-4 text-left text-xs font-mono">
        <p className="text-muted-foreground">
          {`// Configurar en src/lib/constants.ts:`}
        </p>
        <p className="text-muted-foreground mt-1">
          {`hubspot.portalId: "TU_PORTAL_ID"`}
        </p>
        <p className="text-muted-foreground">
          {`hubspot.forms.${formType}: "TU_FORM_ID"`}
        </p>
      </div>
    </div>
  );
};

export default HubSpotFormPlaceholder;
