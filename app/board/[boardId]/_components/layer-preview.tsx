"use client"

import { memo } from "react";

import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import { colorToCss } from "@/lib/utils";

import { Text } from "./text";
import { Rectangle } from "./rectangle";
import { Circle } from "./circle";
import { Note } from "./note";
import { Path } from "./path";

 
interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

export const LayerPreview = memo(({
  id,
  onLayerPointerDown,
  selectionColor
}: LayerPreviewProps) => {
  const layer = useStorage((root) => root.layers.get(id));

  if (!layer) {
    return null;
  }

  switch (layer.type) {
    case LayerType.Path: 
      return (
        <Path 
          key={id}
          points={layer.points}
          onPointerDown={(e) => onLayerPointerDown(e, id)}
          x={layer.x}
          y={layer.y}
          fill={layer.fill ? colorToCss(layer.fill) : "#CCC"}
          stroke={selectionColor} 
        />
      );
    case LayerType.Text:
      return (
        <Text 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      );
    case LayerType.Note:
      return (
        <Note 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      );
    case LayerType.Circle:
      return (
        <Circle 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      );
    case LayerType.Rectangle:
      return (
        <Rectangle
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      );
    default:
      // console.warn("Unknown layer type");
      return null;
  }
});

LayerPreview.displayName = "LayerPreview";