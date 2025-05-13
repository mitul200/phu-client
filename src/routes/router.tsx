import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";

import Regester from "../pages/Regester";

import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "regester",
    element: <Regester />,
  },
]);

export default router;
