import { useState } from "react";
import { RoadmapModal } from "./roadmap-modal";

interface RoadmapItemProps {
  id: string;
  title: string;
  description: string;
  content: string;
  version: string;
  isEnabled: boolean;
  isMultipleItems?: boolean;
  isActive?: boolean;
  onModalClose?: () => void;
  modalPosition?: { x: number; y: number };
  onGridItemClick?: (event: React.MouseEvent) => void;
  category?: string;
}

export function RoadmapItem({
  id,
  title,
  description,
  content,
  version,
  isEnabled,
  isMultipleItems = false,
  isActive = false,
  onModalClose,
  modalPosition,
  onGridItemClick,
  category,
}: RoadmapItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    if (isEnabled) {
      setIsModalOpen(true);
      onGridItemClick?.(event);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    onModalClose?.();
  };

  return (
    <>
        <button
          onClick={handleClick}
          disabled={!isEnabled}
          className={`
            w-full p-0 transition-all duration-200
            ${isEnabled
              ? `cursor-pointer hover:text-primary ${isActive ? 'text-primary' : 'text-foreground'}`
              : 'opacity-40 cursor-not-allowed text-muted-foreground'
            }
            focus:outline-none focus:ring-2 focus:ring-primary/20
            ${isMultipleItems ? 'text-left' : 'text-center'}
          `}
          aria-label={`${title} - ${description}`}
        >
          <h3 className="font-normal text-xs tracking-wider">
            {title}
          </h3>
        </button>

      <RoadmapModal
        isOpen={isModalOpen && isActive}
        onClose={handleModalClose}
        title={title}
        description={description}
        content={content}
        version={version}
        position={modalPosition}
        category={category}
      />
    </>
  );
}
