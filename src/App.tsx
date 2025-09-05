import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./navigation/routes";
import { RouteObject } from "react-router-dom";

function AppRoutes() {
  // useRoutes takes the route config and renders
  return useRoutes(routes as RouteObject[]);
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}
