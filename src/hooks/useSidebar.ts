import React from "react";

type SidebarContextType = {
  isOpen: boolean;
  toggle(): void;
};

export const SidebarContext = React.createContext<SidebarContextType>(
  {} as SidebarContextType
);

export function useSidebar() {
  const { isOpen, toggle } = React.useContext(SidebarContext);

  return {
    isOpen,
    toggle,
  };
}

export default useSidebar;
