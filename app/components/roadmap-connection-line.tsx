interface RoadmapConnectionLineProps {
  fromPosition: { x: number; y: number };
  toPosition: { x: number; y: number };
  isVisible: boolean;
}

export function RoadmapConnectionLine({
  fromPosition,
  toPosition,
  isVisible,
}: RoadmapConnectionLineProps) {
  if (!isVisible || !fromPosition || !toPosition) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      style={{ 
        width: '100vw', 
        height: '100vh',
        background: 'transparent'
      }}
    >
      <svg
        width="100%"
        height="100%" 
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <line
          x1={fromPosition.x}
          y1={fromPosition.y}
          x2={toPosition.x}
          y2={toPosition.y}
          stroke="#00000033"
          strokeWidth="2"
          className="transition-opacity duration-300"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
