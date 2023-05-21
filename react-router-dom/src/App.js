//import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/navigation/NavBar";
import Aside from "./components/layout/navigation/Aside";
import MainRoutes from "./components/layout/navigation/MainRoutes";

function App() {
  return (
    <>
      <header>
        <h1>React Router Dom</h1>
        <NavBar></NavBar>
      </header>
      <main>
        <aside>
          <Routes>
            <Route path="/blog" element={<Aside></Aside>}>
              <Route path=":id" element={<Aside></Aside>}></Route>
            </Route>
          </Routes>
        </aside>
        <div className="container">
          {/* <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/blog" element={<Blog></Blog>}>
              <Route path=":id" element={<Blog></Blog>}></Route>
            </Route>
           <Route path="/about/*" element={<AboutRoutes></AboutRoutes>}></Route>
            <Route element={<FormWrapper></FormWrapper>}>
              <Route path="/contact" element={<Contact></Contact>} />
              <Route path="/survey" element={<Survey></Survey>} />
            </Route>
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes> */}
          <MainRoutes></MainRoutes>
        </div>
      </main>
    </>
  );
}
export default App;
