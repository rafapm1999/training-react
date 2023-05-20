//import './App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/layout/navigation/NavBar"
import Home from "./views/Home"
import About from "./views/About"
import Contact from "./views/Contact"
import NotFound from "./views/NotFound"
import NewAbout from "./views/NewAbout"

function App() {
  return(
  <>
    <header>
      <h1>React Router Dom</h1>
      <NavBar></NavBar>
    </header>
    <main>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/about/:id" element={<About></About>}/>
          <Route path="/about/new" element={<NewAbout></NewAbout>}/>
          <Route path="/contact" element={<Contact></Contact>}/>
          <Route path="*" element={<NotFound></NotFound>}/>
        </Routes>
      </div>
    </main>
  </>
  )
};

export default App;
