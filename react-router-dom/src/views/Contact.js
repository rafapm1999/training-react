//import './Contact.css';
import { Navigate , useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

function Contact() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      /* setLoggedIn(true); */
      navigate("/")
    }, 3000);
  }, []);

  return (
    <>
    {/* {loggedIn && <Navigate to ="/"></Navigate>} */}
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rem.
      </p>
    </>
  );
}

export default Contact;

