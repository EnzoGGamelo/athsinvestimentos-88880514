import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
}

const ImageLightbox = ({ images, currentIndex, onClose }: ImageLightboxProps) => {
  const [index, setIndex] = useState(currentIndex);

  const prev = useCallback(() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = useCallback(() => setIndex((i) => (i === images.length - 1 ? 0 : i + 1)), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white z-10">
        <X size={32} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-white/70 hover:text-white z-10">
        <ChevronLeft size={40} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-white/70 hover:text-white z-10">
        <ChevronRight size={40} />
      </button>
      <img
        src={images[index].src}
        alt={images[index].alt}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setIndex(i); }}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
      <p className="absolute bottom-14 left-1/2 -translate-x-1/2 text-white/60 text-sm font-sans">
        {index + 1} / {images.length}
      </p>
    </div>
  );
};

export default ImageLightbox;
