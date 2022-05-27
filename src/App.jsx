import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            style={{ background: "blue", borderRadius: "50%" }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>

      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          Sidebar
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>
      )}

      <div
        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
          activeMenu ? "md:ml-72" : "flex-2"
        }`}
      ></div>

      <Routes>
        {/* Dashboard */}
        <Route path="/" element="Ecommerce" />
        <Route path="/ecommerce" element="Ecommerce" />

        {/* Pages */}
        <Route path="/orders" element="Orders" />
        <Route path="/employees" element="Employees" />
        <Route path="/customers" element="Customers" />

        {/* Apps */}
        <Route path="/kanban" element="Kanban" />
        <Route path="/editor" element="Editor" />
        <Route path="/calender" element="calender" />
        <Route path="/color-picker" element="color-picker" />

        {/* Charts */}
        <Route path="/line" element="line" />
        <Route path="/area" element="area" />
        <Route path="/bar" element="bar" />
        <Route path="/pie" element="pie" />
        <Route path="/financial" element="financial" />
        <Route path="/color-mapping" element="color-mapping" />
        <Route path="/pyramid" element="pyramid" />
        <Route path="/stacked" element="stacked" />
      </Routes>
    </div>
  );
};

export default App;
