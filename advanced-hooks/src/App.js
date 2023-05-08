//import './App.css';
import ReactDOM from "react-dom" /* Para crear un portal (createPortal(), necesitamos importar el elemento ReactDOM desde "react-dom") */
import TextInputWithFocusButton from "./components/TextImputWithFocusButton";

function App() {
  return (
    <>
  {/*{ReactDOM.createPortal( /* createPortal renderiza lo que pongamos en el primer lugar (en este caso un <h1>, dentro de donde le indiquemos en el segundo lugar, en seste caso un elemento html con id hello) 
        <h1>Hello World!</h1>, // 1. Child, que es lo que vamos a renderizar
        document.querySelector("#hello") // 2. Component, donde vamor a renderizarlo
      )};
      <p>Lorem Ipsum dolor si tamet consectetur adipisicing elit.</p> */}

      <TextInputWithFocusButton></TextInputWithFocusButton>
    </>
  );
}

export default App;
