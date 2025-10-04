import { RouteObject } from "react-router-dom";
import Home from "../screens/Home";
import AboutICSI from "../screens/About_us";
import Courses from "../screens/Courses";
import Examination from "../screens/Examination";
import Member from "../screens/Member";
import Student from "../screens/Student";
import Contact from "../screens/Contact";
import MainLayout from "../components/MainLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutICSI /> },
      { path: "/courses", element: <Courses /> },
      { path: "/examination", element: <Examination /> },
      { path: "/member", element: <Member /> },
      { path: "/student", element: <Student /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];

export default routes;
