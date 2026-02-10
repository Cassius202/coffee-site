import { useState } from "react";
import { cn } from "./cn";

const LazyImage = ({ src, alt, definition = "width", className, innerClassName="" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative bg-transparent overflow-hidden", className)}>
      {/* The Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-all duration-700 ease-in-out object-cover",
          definition === 'height' ? 'h-full' : 'w-full',
          isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-lg scale-105",
          innerClassName
        )}
      />
    </div>
  );
};

export default LazyImage;