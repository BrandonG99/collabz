"use client"

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas"

interface ColorPickerProps {
  onChange: (color: Color) => void;
};

export const ColorPicker = ({
  onChange,
}: ColorPickerProps) => {
  return (
    <div
      className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200"
    >
      <ColorButton color={{ r: 64, g: 76, b: 224 }} onClick={onChange} />
      <ColorButton color={{ r: 5, g: 150, b: 137 }} onClick={onChange} />
      <ColorButton color={{ r: 65, g: 204, b: 101 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 247, b: 115 }} onClick={onChange} />
      <ColorButton color={{ r: 217, g: 116, b: 51 }} onClick={onChange} />
      <ColorButton color={{ r: 219, g: 39, b: 120 }} onClick={onChange} />
      <ColorButton color={{ r: 0, g: 0, b: 0 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 255, b: 255 }} onClick={onChange} />
    </div>
  )
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
};

const ColorButton = ({
  onClick,
  color,
}: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div 
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{
          background: colorToCss(color)
        }}
      />
    </button>
  )
}