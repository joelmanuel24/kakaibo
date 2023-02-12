import { RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { SidebarContext } from "./hooks/useSidebar";
import "./index.css";
import KakeiboProvider from "./kakeibo";
import { router } from "./router";

console.log(import.meta.env);

function SidebarProvider({ children }: React.PropsWithChildren) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen((v) => !v);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <KakeiboProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </KakeiboProvider>
  </React.StrictMode>
);
