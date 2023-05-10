// import './StringModifier.css';


import { useContext } from "react";
import {StringContext} from "../store/StringProvider"

function StringModifier() {
    const {state, dispatch} = useContext(StringContext);

    const buttonStyle = {
        backgroundColor: "DarkSeaGreen",
        padding: ".4em 1em",
        color: "white",
        borderRadius: ".25rem",
        fontSize: "2rem",
        marginTop: "1em"
    }
  return (
    <div style={{
        backgroundColor: "dodgerblue",
        padding: "2em",
        color: "white",
      }}>
        <h1>String Modifier</h1>
        <button style={buttonStyle} onClick={ () => dispatch({type: "SET", payload: state.text.toUpperCase()})}>Uppercase!</button>
    </div>
  );
}

export default StringModifier;
