import { RouteObject } from "react-router-dom";
import Home from "../screens/Home";
import AboutICSI from "../screens/About_us";
import MainLayout from "../components/MainLayout";
import ComingSoon from "../screens/Coming_soon";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutICSI /> },
    ],
  },
  { path: "/courses", element: <ComingSoon /> },
  { path: "/member", element: <ComingSoon /> },
  { path: "/student", element: <ComingSoon /> },
  { path: "/contact", element: <ComingSoon /> },
];

export default routes;
