//import './TextInputWithFocusButton.css';
import { useRef } from "react"; //Importamos useRef desde React

function TextInputWithFocusButton() {
    const inputElement = useRef(null);
    const clickHandler = () => {
        /* console.log(inputElement.current); */
        console.log(inputElement.current.value);
        
        inputElement.current.focus() //AL hacer click genera un focus() al elemento referenciado (inputElement), y current da el elemento en cuestion al completo, con sus attr, etiqueta, etc
    }
  return (
    <form 
        onSubmit={(e) => {e.preventDefault()}} 
        style={{
            width: "100%", 
            backgroundColor:"darkseagreen", 
            padding:"1em 3em", 
            textAlign:"center"
        }}
    >
        <input 
            ref={inputElement} //Con el atributo ref: referenciamos la constante inputElement la cual hace referencia al hook useRef, y el cual tiene el valor de NULL
            type="text" 
            style={{ 
                width: "100%",  
                padding:".5em 1em",
                borderRadius: ".5rem",
                marginBottom: "1em",
                }}
        />
        <button 
            onClick={clickHandler} 
            style={{
                width:"100%",
                padding:".5em 8em",
                borderRadius: ".5rem",
                backgroundColor:"dodgerblue", 
             }} 
        >
            Focus the Input
        </button>
    </form>
  );
}

export default TextInputWithFocusButton;
