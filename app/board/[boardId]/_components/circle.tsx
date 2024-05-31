import { colorToCss } from "@/lib/utils";
import { CircleLayer } from "@/types/canvas";

interface CircleProps {
  id: string;
  layer: CircleLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string; 
};

export const Circle = ({ 
  id,
  layer,
  onPointerDown,
  selectionColor,
}: CircleProps) => {
  return (
    <ellipse 
      className="drop-shadow-md"
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        transform: `translate(
          ${layer.x}px,
          ${layer.y}px
        )`
      }}
      cx={layer.width / 2}
      cy={layer.height / 2}
      rx={layer.width / 2}
      ry={layer.height / 2}
      fill={layer.fill ? colorToCss(layer.fill) : "#CCC" }
      stroke={selectionColor || "transparent"}
      strokeWidth="1"
    />
  );
};