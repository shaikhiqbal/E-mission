import { useRoutes } from "react-router-dom";
import VerticaleLayout from "../@core/layout/VerticaleLayout";

import pages from "./pages";

const AllRoutes = {
  path: "/",
  element: VerticaleLayout,
  children: [...pages],
};

const Routes = () => {
  const routes = useRoutes([...AllRoutes]);
console.log(routes);
  return routes
};

export default Routes;
