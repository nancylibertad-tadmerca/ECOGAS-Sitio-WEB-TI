import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  text?: string;
  aspectRatio?: "video" | "square" | "wide";
  className?: string;
}

const ImagePlaceholder = ({ 
  text = "Imagen provista por ECOGAS", 
  aspectRatio = "video",
  className = ""
}: ImagePlaceholderProps) => {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  };

  return (
    <div 
      className={`bg-muted flex flex-col items-center justify-center rounded-lg ${aspectClasses[aspectRatio]} ${className}`}
    >
      <ImageIcon className="h-12 w-12 text-muted-foreground/50 mb-2" />
      <p className="text-sm text-muted-foreground text-center px-4">
        ({text})
      </p>
    </div>
  );
};

export default ImagePlaceholder;
