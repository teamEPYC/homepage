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

    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent all scrolling on the document
      document.addEventListener("wheel", preventScroll, { passive: false });
      document.addEventListener("touchmove", preventScroll, { passive: false });
      document.addEventListener("scroll", preventScroll, { passive: false });
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("scroll", preventScroll);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const getModalPosition = () => {
    if (position) {
      const { x, y } = position;
      const padding = 20;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let modalWidth = 448;
      let modalHeight = 300;
      
      if (viewportWidth >= 1280) {
        modalWidth = 576;
      } else if (viewportWidth >= 768) {
        modalWidth = 384;
      }

      let left = x - modalWidth / 2;
      let top = y;

      // Ensure popup stays within viewport
      if (left + modalWidth > viewportWidth - padding) {
        left = viewportWidth - modalWidth - padding;
      }
      
      if (left < padding) {
        left = padding;
      }

      left = Math.max(padding, left);
      left = Math.min(left, viewportWidth - modalWidth - padding);


      // Vertical positioning
      if (top < -200) {
        top = -200;
      } else if (top + modalHeight > viewportHeight - padding) {
        top = viewportHeight - modalHeight - padding;
      }

      top = Math.max(-200, top);

      return { left, top, originalX: x, originalY: y };
    }

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
        className="absolute bg-white border !border-black/5 max-w-md w-full focus:outline-none xl:max-w-xl md:max-w-sm"
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
        <div className="p-4 xl:pr-17">
          {category && (
            <div className="text-[8px] font-medium text-primary uppercase mb-1">
              {category}
            </div>
          )}
          
          <h2 id="modal-title" className="text-base xl:text-xl font-medium text-black uppercase mb-1">
            {title}
          </h2>
          
          <p className="text-xs text-black">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
