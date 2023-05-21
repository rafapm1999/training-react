//import './MainRoutes.css';
import { useRoutes } from "react-router-dom";
import FormWrapper from "../../wrappers/FormWrapper";
import AboutRoutes from "./AboutRoutes";
import Home from "../../../views/Home";
import Blog from "../../../views/Blog";
import Contact from "../../../views/Contact";
import Survey from "../../../views/Survey";
import NotFound from "../../../views/NotFound";

function MainRoutes() {
  const myRoutes = useRoutes([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "blog",
      element: <Blog></Blog>,
      children: [
        {
          path: ":id",
          element: <Blog></Blog>,
        },
      ],
    },
    {
      path: "/about/*",
      element: <AboutRoutes></AboutRoutes>,
    },
    {
      element: <FormWrapper></FormWrapper>,
      children: [
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/survey",
          element: <Survey></Survey>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);
  return myRoutes;
}

export default MainRoutes;
