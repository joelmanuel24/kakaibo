import React from "react";

export type HeroIconType = (
  props: React.ComponentProps<"svg"> & {
    title?: string;
    titleId?: string;
  }
) => JSX.Element;

interface IconButtonProps {
  size?: "sm";
  icon: HeroIconType;
}
const IconButton = ({ size, icon }: IconButtonProps) => {
  const sizes = size === "sm" ? "w-10 h-10 text-xl" : "w-12 h-12 text-2xl";
  return (
    <button
      className={`relative flex items-center justify-center ${sizes} rounded-2xl border-spacing-1 border-slate-500 border-2`}
    >
      {React.createElement(icon, {
        className: "h-6 w-6 text-slate-500",
      })}
    </button>
  );
};

export default IconButton;
