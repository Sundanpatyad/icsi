import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
    </div>
  );
};

export default MainLayout;
