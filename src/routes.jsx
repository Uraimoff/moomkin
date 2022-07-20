import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import BusinessAnalysis from "./pages/Services/BusinessAnalysis/BusinessAnalysis";
import FrontendDevelopment from "./pages/Services/FrontendDevelopment/FrontendDevelopment";
import ITStaff from "./pages/Services/ITStaff/ITStaff";
import Services from "./pages/Services/Services";
import TestingServices from "./pages/Services/TestingServices/TestingServices";
import UiUxDesign from "./pages/Services/UiUxDesign/UiUxDesign";

const routes = [
    { path: `/`, element: <Home /> },
    { path: `/services`, element: <Services /> },
    { path: `/services/business-analysis-services`, element: <BusinessAnalysis /> },
    { path: `/services/ui-ux-design`, element: <UiUxDesign/> },
    { path: `/services/web-frontend-and-backend-development`, element: <FrontendDevelopment/>  },
    { path: `/services/quality-assurance`, element: <TestingServices/> },
    { path: `/services/it-staff-augmentation`, element: <ITStaff/>  },
    { path: `/about`, element: <About /> },
];
export default routes;