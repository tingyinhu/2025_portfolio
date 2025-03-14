import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      {/* Grid: 4 cols mobile, 12 cols desktop */}
      {/* relative: project pages baneer */}
      <div className="relative grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-5 ">
        {/* Sidebar: 1 col desktop, hidden mobile */}
        <div className="md:col-span-1">
          <Sidebar />
        </div>
        <div className="md:col-span-1"></div>
        {/* Main Content - 4 cols 16px margin mobile, 11 columns on laptop/desktop, margin 1 column in each */}
        <div className="col-span-4 m-4 md:col-span-9">
          <Routes>
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
          </Routes>
        </div>

        <div className="md:col-span-1"></div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
