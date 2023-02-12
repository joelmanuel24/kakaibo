import React from "react";
import { hexToRGB } from "../../utils";

interface EmojiButtonProps {
  emoji: string;
  color: string;
  text?: string;
  size?: "sm" | "l" | "xl";
}
function EmojiButton(props: EmojiButtonProps) {
  // const textSpan = text ? (
  //   <span className="absolute text-xs font-medium -bottom-5">{text}</span>
  // ) : null;

  // const sizes = size === "sm" ? "w-10 h-10 text-xl pb-1" : "w-12 h-12 text-2xl";

  return <EmojiIcon as="button" {...props} />;
  // return (
  //   <button
  //     className={`relative flex items-center justify-center ${sizes} rounded-2xl`}
  //     style={{
  //       backgroundColor: hexToRGB(color, 1),
  //       boxShadow: `0 1px 3px 0 ${hexToRGB(
  //         color,
  //         0.1
  //       )}, 0 1px 2px -1px ${hexToRGB(color, 0.1)}`,
  //     }}
  //   >
  //     {emoji}
  //     {textSpan}
  //   </button>
  // );
}

interface Props<T extends React.ElementType<any> = "button" | "div">
  extends EmojiButtonProps {
  as: T;
}
export function EmojiIcon({ emoji, color, text, size, as }: Props) {
  const textSpan = text ? (
    <span className="absolute text-xs font-medium -bottom-5">{text}</span>
  ) : null;

  const sizes =
    size === "sm"
      ? "w-10 h-10 text-xl pb-1"
      : size === "l"
      ? "w-14 h-14 text-3xl"
      : size === "xl"
      ? "w-20 h-20 text-3xl"
      : "w-12 h-12 text-2xl";

  var children = (
    <>
      {emoji}
      {textSpan}
    </>
  );

  return React.createElement(as, {
    className: `relative flex items-center justify-center ${sizes} rounded-2xl`,
    style: {
      backgroundColor: hexToRGB(color, 1),
      boxShadow: `0 1px 3px 0 ${hexToRGB(
        color,
        0.1
      )}, 0 1px 2px -1px ${hexToRGB(color, 0.1)}`,
    },
    children,
  });
}

export default EmojiButton;
