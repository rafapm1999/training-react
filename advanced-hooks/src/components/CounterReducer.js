/* import './CounterReducer.css'; */
import { useReducer } from "react";
import { initialState, counterReducer } from "../reducers/counterReducer";

/* //Use reduce necesita un initialState
const initialState = 0;

//La función por convención reduce dos estados por defecto, state y action
const counterReducer = (state, action) => {

    //Para cada posibilidad hay que generar un lugar, ya sea con if, o con los case de un switch
    //en la condición ponemos action.type === "CONSTANTE (ACCION) QUE RETORNA EN MAYUSCULAS"
    if (action.type === "INCREMENT") {
        state = state + 1; //En este caso incrementamos el valor de state
    } else if (action.type === "DECREMENT"){
        state = state - 1; //EN este caso decrementamos el valor de state
    } else {
        throw new Error("NO action available") // Por si acaso lanzamos un mensaje de error en caso de que el ususario ni incremente ni decrezca el valor
    }
    return state; //Devolvemos el valor de state despues de haber recibido la accion
}; */

function CounterReducer() {
    //Hacemos uso del HOOK useReducer, el cual debe recibir una función "reductora", y un parámetro inicial de referencia.
    //dentro de los corchetes de const tendremos una función dispatch que modificará el valor de state
    const [state, dispatch] = useReducer(counterReducer, initialState)

    //Creamos una constante que tiene el objeto con los estilos, con la finalidad de no repetir lineas de codigo de dichos estilos en los dos botones
    const buttonStyle = {
        backgroundColor: "dodgerblue",
        padding: "1em",
        margin: "3em", 
        color: "white",
        borderRadious: ".25rem"
    }
  return (
    <div>
        {/* 1. Hacemos que button reciba el style referenciando el atributo style a la constante buttonStyle, la cual ha ce referencia a un objeto que tiene las propiedades css */}
        {/* 2. Ponemos una propiedad onClick, la cual ejecuta una función anónima que llama a la función dispatch, que recibe por parámetros un objeto con un valor type: "ACCION QUE REALIZA EN MAYUSCULAS" (debe coincidir con el valor que recibia action.type en la funcion counterReducer ) */}
        <button style={buttonStyle} onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
        <button style={buttonStyle} onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
        {/* Al elemento span que hemos dicho que coja los valores css que tiene buttonStyle, y con la coma, le decimos que aparte añada x propiedades mas a las ya existentes, este si debe llevar doble {{}} */}
        <span style={{...buttonStyle, display: "block", width: "30%" }}>{state}</span>
    </div>
  );
}

export default CounterReducer;
