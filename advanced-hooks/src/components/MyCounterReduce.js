/* import './CounterReduce.css'; */
import { useReducer } from "react";
import { useRef } from "react"

const initialState = 0;

const reduce = (state, action) => {
    
    switch (action.type) {
        case "add":
            return state +1;

        case "remove":
        return state -1;
           
        default:
            return state
    }
}

function CounterReduce() {
    const[state, dispatch] = useReducer(reduce, initialState);
    const spanContent = useRef(state);
    
  return (
    <>
    <span id="main">{spanContent}</span>
    <button onClick={() => dispatch({type: "add", state})}>Add</button>
    <button onClick={() => dispatch({type: "remove", state})}>Remove</button>
    </>

  );
}

export default CounterReduce;
