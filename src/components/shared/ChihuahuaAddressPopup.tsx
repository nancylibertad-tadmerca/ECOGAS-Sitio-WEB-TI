import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import gasparImg from "@/assets/gaspar-saludando.png";

const STORAGE_KEY = "chihuahua-address-popup-seen";

const ChihuahuaAddressPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) setOpen(true);
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">Aviso Importante</DialogTitle>
          <DialogDescription className="sr-only">Cambio de dirección en Chihuahua</DialogDescription>
        </DialogHeader>

        <img
          src={gasparImg}
          alt="Gaspar, mascota de ECOGAS, saludando"
          className="mx-auto h-40 w-auto object-contain"
        />

        <p className="text-muted-foreground">
          Nuestra oficina en Chihuahua ha cambiado de dirección.
        </p>

        <div className="flex items-start justify-center gap-2 rounded-lg bg-muted p-4">
          <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <span className="font-semibold text-foreground">
            Calle Colegio #6300, Chihuahua, Chih.
          </span>
        </div>

        <Button onClick={handleClose} className="w-full">Entendido</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ChihuahuaAddressPopup;
