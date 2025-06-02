import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./Components/global/Sidebar";
import Footer from "./Components/global/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfolioPage from "./Pages/PortfolioPage";
import CasscycleProject from "./Pages/ProjectPages/CasscycleProject";
import MobinDonutProject from "./Pages/ProjectPages/MobinDonutProject";
import EateryProject from "./Pages/ProjectPages/EateryProject";
import KaviProject from "./Pages/ProjectPages/KaviProject";
import LmsProject from "./Pages/ProjectPages/LmsProject";
import TiannliProject from "./Pages/ProjectPages/TiannliProject";
import ToliCuliPaliProject from "./Pages/ProjectPages/ToliCuliPaliProject";
import ViidaProject from "./Pages/ProjectPages/ViidaProject";
import UiuProject from "./Pages/ProjectPages/UiuProject";
import PetronewProject from "./Pages/ProjectPages/PetronewProject";
import CanadacaProject from "./Pages/ProjectPages/CanadacaProject";
import FoodLoopProject from "./Pages/ProjectPages/FoodLoopProject";

const Layout = () => {
  const location = useLocation();

  // Scroll to top while reloading a page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", 
    });
  }, [location.pathname]);

  return (
    <div className="relative grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-5 min-h-screen">
      {/* Empty column for spacing on the left (1 column) */}
      <div className="hidden md:block md:col-span-1"></div>

      {/* Sidebar: 1 col desktop, hidden on mobile */}
      <div className="md:col-span-1">
        <Sidebar />
      </div>

      {/* Main Content - 4 cols mobile, 9 cols desktop */}
      <div className="col-span-4 md:col-span-9 m-4">
        <Outlet />
      </div>

      {/* Empty column for spacing on the right (1 column) */}
      <div className="hidden md:block md:col-span-1"></div>

      {/* Footer - full width */}
      <div className="col-span-4 md:col-span-12">
        <Footer />
      </div>
    </div>
  );
};

function App() {
  
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/Casscycle-Project" element={<CasscycleProject />} />
          <Route
            path="/Mobin-Donut-Project"
            element={<MobinDonutProject />}
          />
          <Route path="/Eatery-Project" element={<EateryProject />} />
          <Route path="/Kavi-Project" element={<KaviProject />} />
          <Route path="/Lms-Project" element={<LmsProject />} />
          <Route path="/Tiannli-Project" element={<TiannliProject />} />
          <Route
            path="/ToliCuliPali-Project"
            element={<ToliCuliPaliProject />}
          />
          <Route path="/Viida-Project" element={<ViidaProject />} />
          <Route path="/Uiu-Project" element={<UiuProject />} />
          <Route path="/Petronew-Project" element={<PetronewProject />} />
          <Route path="/Canadaca-Project" element={<CanadacaProject />} />
          <Route path="/Foodloop-Project" element={<FoodLoopProject />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
