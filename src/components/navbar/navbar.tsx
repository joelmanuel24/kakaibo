import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "@tanstack/react-router";
import React, { PropsWithChildren, ReactNode } from "react";
import { hexToRGB } from "../../utils";
import { HeroIconType } from "../icon-button/icon-button";

interface NavbarProps extends PropsWithChildren {
  title: string;
  // onMenuClick(): void;
  tabs?: ReactNode;
  leftButton:
    | {
        type: "button";
        icon: HeroIconType;
        onClick?(): void;
      }
    | {
        type: "link";
        icon: HeroIconType;
        link: string;
      };
  bgColor?: string;
}
function Navbar({ children, title, tabs, leftButton, bgColor }: NavbarProps) {
  // let backgroundColor = bgColor ? bgColor : "#242424";
  const button =
    leftButton.type === "button" ? (
      <button className="p-2" onClick={leftButton.onClick}>
        {React.createElement(leftButton.icon, { className: "h-6 w-6" })}
      </button>
    ) : (
      <Link className="p-2" to={leftButton.link} search={{}} params={{}}>
        {React.createElement(leftButton.icon, { className: "h-6 w-6" })}
      </Link>
    );

  if (tabs) {
    return (
      <div className="fixed top-0 inset-x-0 backdrop-blur z-10 bg-slate-100/30 dark:bg-[#242424]/30">
        <div className="flex items-center h-16 px-2 ">
          {button}

          <div className="text-lg mx-1 font-medium flex-1 ">{title}</div>
          {children}
        </div>
        <div className="grid grid-cols-2">{tabs}</div>
      </div>
    );
  }
  return (
    <div className="flex items-center h-16 px-2 fixed top-0 inset-x-0 bg-slate-100/30 dark:bg-[#242424]/30 backdrop-blur z-10">
      {button}
      <div className="text-lg mx-1 font-medium flex-1 ">{title}</div>
      {children}
    </div>
  );
}

export default Navbar;
