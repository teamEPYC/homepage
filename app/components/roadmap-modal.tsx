import { useEffect, useRef } from "react";

interface RoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  content: string;
  version: string;
  position?: { x: number; y: number };
  category?: string;
}

export function RoadmapModal({
  isOpen,
  onClose,
  title,
  description,
  content,
  version,
  position,
  category,
}: RoadmapModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Calculate modal position
  const getModalPosition = () => {
    if (position) {
      const { x, y } = position;
      const modalWidth = 400; // Approximate modal width
      const modalHeight = 300; // Approximate modal height

      // Use the exact position passed from parent (already calculated with offset)
      let left = x - modalWidth / 2; // Center the modal horizontally on the x position
      let top = y - modalHeight / 2; // Center the modal vertically on the y position

      // Ensure modal stays within viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      if (left < 20) left = 20;
      if (left + modalWidth > viewportWidth - 20) left = viewportWidth - modalWidth - 20;
      if (top < 20) top = 20;
      if (top + modalHeight > viewportHeight - 20) top = viewportHeight - modalHeight - 20;

      return { left, top };
    }

    // Fallback to center
    return { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' };
  };

  const modalPosition = getModalPosition();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="absolute bg-white border !border-black/10 max-w-md w-full focus:outline-none lg:max-w-md md:max-w-sm sm:max-w-xs"
        style={{
          left: typeof modalPosition.left === 'number' ? `${modalPosition.left}px` : modalPosition.left,
          top: typeof modalPosition.top === 'number' ? `${modalPosition.top}px` : modalPosition.top,
          transform: modalPosition.transform,
        }}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Content */}
        <div className="p-6">
          {/* Category at top in orange */}
          {category && (
            <div className="text-[8px] font-medium text-primary uppercase mb-1">
              {category}
            </div>
          )}
          
          {/* Title */}
          <h2 id="modal-title" className="text-xl font-medium text-black uppercase mb-1">
            {title}
          </h2>
          
          {/* Description */}
          <p className="text-xs text-black">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
