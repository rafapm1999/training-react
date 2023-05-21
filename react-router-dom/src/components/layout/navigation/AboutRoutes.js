//import "./AboutRoutes.css";
import { Route, Routes } from "react-router-dom";
import AboutWrappers from "../../wrappers/AboutWrappers";
import About from "../../../views/About";
import NewAbout from "../../../views/NewAbout";
import NotFound from "../../../views/NotFound";

function AboutRoutes() {
  return (
    <Routes>
      <Route element={<AboutWrappers></AboutWrappers>}>
        <Route index element={<About></About>} />
        <Route path=":id" element={<About></About>} />
        <Route path="new" element={<NewAbout></NewAbout>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Route>
    </Routes>
  );
}

export default AboutRoutes;
