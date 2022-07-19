import About from "./pages/About/About";
import BusinessAnalysis from "./pages/Home/ServicesPages/BusinessAnalysis";
import Home from "./pages/Home/Home";
import Services from "./pages/Home/ServicesPages/Services";

const routes = [
    { path: `/`, element: <Home /> },
    { path: `/services`, element: <Services /> },
    { path: `/services/business-analysis-services`, element: <BusinessAnalysis /> },
    { path: `/about`, element: <About /> },
];
export default routes;