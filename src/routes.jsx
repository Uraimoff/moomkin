import About from "./pages/About/About";
import Home from "./pages/Home/Home";

const routes = [
    { path: `/`, element: <Home /> },
    { path: `/about`, element: <About /> },
];
export default routes;