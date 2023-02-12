import React from "react";

type SidebarContextType = {
  isOpen: boolean;
  toggle(): void;
};

export const SidebarContext = React.createContext<SidebarContextType>(
  {} as SidebarContextType
);

export function useModal() {
  const { isOpen, toggle } = React.useContext(SidebarContext);

  return {
    isOpen,
    toggle,
  };
}

export default useModal;
