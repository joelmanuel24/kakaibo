import { createRouteConfig, Outlet } from "@tanstack/react-router";
import Drawer from "../components/drawer/drawer";
import Sidebar from "../components/sidebar/sidebar";
import useSidebar from "../hooks/useSidebar";

export const rootRoute = createRouteConfig({
  component: () => {
    const { toggle, isOpen } = useSidebar();
    return (
      <>
        <Drawer isOpen={isOpen} onClose={toggle}>
          <Sidebar  />
        </Drawer>
        <Outlet />
      </>
    );
  },
});
