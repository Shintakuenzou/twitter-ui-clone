import { Outlet } from "react-router-dom";
import { SideBar } from "./components/SideBar";
//CSS
import "./app.css";

export function App() {
  return (
    <div className="layout">
      <SideBar />
      <div className="content">
        {/* Outlet: Renderiza o elemento da rota filho, se houver. */}
        <Outlet />
      </div>
    </div>
  );
}
