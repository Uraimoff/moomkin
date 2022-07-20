import About from "./pages/About/About";
import EnterpriseApps from "./pages/ExpertiseVsIndustries/Expertise/EnterpriseApps/EnterpriseApps";
import InternetOfThings from "./pages/ExpertiseVsIndustries/Expertise/InternetOfThings/InternetOfThings";
import MobileApps from "./pages/ExpertiseVsIndustries/Expertise/MobileApps/MobileApps";
import SaasDevelopment from "./pages/ExpertiseVsIndustries/Expertise/SaasDevelopment/SaasDevelopment";
import StartupsApps from "./pages/ExpertiseVsIndustries/Expertise/StartupsApps/StartupsApps";
import AddTechMarketing from "./pages/ExpertiseVsIndustries/Industries/AddTechMarketing/AddTechMarketing";
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
    { path: `/solutions/enterprise-software-development`, element: <EnterpriseApps/>  },
    { path: `/solutions/startups-development`, element: <StartupsApps/>  },
    { path: `/solutions/internet-of-things-software-development`, element: <InternetOfThings/>  },
    { path: `/solutions/mobile-app-development`, element: <MobileApps/>  },
    { path: `/solutions/saas-development`, element: <SaasDevelopment/>  },
    { path: `/industries/advertising-and-marketing-automation-development`, element: <AddTechMarketing/>  },
    
    { path: `/about`, element: <About /> },
];
export default routes;