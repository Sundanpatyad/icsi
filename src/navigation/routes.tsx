import { RouteObject } from "react-router-dom";
import Home from "../screens/Home";
import AboutICSI from "../screens/About_us";
import MainLayout from "../components/MainLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutICSI /> },
    ],
  },
];

export default routes;
