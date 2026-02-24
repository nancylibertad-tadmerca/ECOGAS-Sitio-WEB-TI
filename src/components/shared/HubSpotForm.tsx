import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region?: string;
          target: string;
        }) => void;
      };
    };
  }
}

const HubSpotForm = ({ portalId, formId, region }: HubSpotFormProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const targetId = `hubspot-form-${formId}`;

  useEffect(() => {
    const createForm = () => {
      if (window.hbspt && containerRef.current) {
        containerRef.current.innerHTML = "";
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${targetId}`,
        });
        setLoading(false);
      }
    };

    if (window.hbspt) {
      createForm();
      return;
    }

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => {
      setTimeout(createForm, 100);
    };
    document.head.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [portalId, formId, region, targetId]);

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-3 text-muted-foreground">Cargando formulario…</span>
        </div>
      )}
      <div id={targetId} ref={containerRef} />
    </div>
  );
};

export default HubSpotForm;
