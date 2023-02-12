import { Outlet } from "@tanstack/react-router";
import "./App.css";
import Drawer from "./components/drawer/drawer";
import Sidebar from "./components/sidebar/sidebar";
import useSidebar from "./hooks/useSidebar";

function App() {
  const { toggle, isOpen } = useSidebar();
  return (
    <>
      <Drawer isOpen={isOpen} onClose={toggle}>
        <Sidebar onClickMenu={toggle} />
      </Drawer>
      <Outlet />
    </>
  );
}

export default App;
