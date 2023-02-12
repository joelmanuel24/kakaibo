import { Menu } from "@headlessui/react";
import React from "react";
import { HeroIconType } from "../icon-button/icon-button";

type Props<T extends React.ElementType<any> = "span" | "button"> =
  T extends "span"
    ? React.HTMLProps<HTMLSpanElement>
    : React.HTMLProps<HTMLButtonElement>;

interface TagProps<TType extends React.ElementType<any> = "span" | "button"> {
  icon?: HeroIconType;
  text?: string;
  minimal?: boolean;
  iconSize?: "md";
  as: TType;
}
function Tag({
  as = "span",
  icon,
  text,
  minimal,
  iconSize,
  ...props
}: TagProps & Props) {
  const colors = !minimal
    ? "bg-slate-500/30 text-slate-600 dark:text-slate-300"
    : "text-slate-500";
  const padding = iconSize === "md" ? "py-1 px-2" : "py-.5 px-1";
  Menu.Item;
  const classNames = `inline-flex items-center justify-end rounded text-xs font-medium ${colors} ${padding}`;

  const iconElement = icon
    ? React.createElement(icon, { className: "h-4 w-4" })
    : "";
  return React.createElement(as, {
    className: classNames,
    children: [iconElement, text],
    ...props,
  });
}

export default Tag;
