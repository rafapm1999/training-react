/* import './App.css'; */
import { useContext, createContext, useReducer } from "react";

//Creamos el valor inicial (importante para poder usar useReducer)
const initialState = {
  light: {
    textColor: "#000",
    bgColor: "#f6f8fa",
  },
  dark: {
    textColor: "#fff",
    bgColor: "#222",
  },
};
//Creamos una función la cual elige entre los posibles casos
const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      return (state = initialState.light);
    case "DARK":
      return (state = initialState.dark);
    default:
      throw new Error("Your action is invalid");
  }
  return state;
};
//Creamos un contexto (ThemeContext) con createContext el cual recibe un valor inicial (initialState)
const ThemeContext = createContext(initialState);

function App() {
  return (
    //Envolvemos el componente ToolBar con el contexto ThemeContent.Provider, y le añadimos una propiedad (value) que vale initialState 
    <ThemeContext.Provider value={initialState}>
      <ToolBar></ToolBar>
    </ThemeContext.Provider>
  );
}

function ToolBar() {
  return (
    <div
      style={{
        backgroundColor: "#ededed",
        display: "flex",
        justifyContent: "center",
        padding: "2em 0",
        borderRadius: ".4rem",
      }}
    >
    {/* Renderizamos el componente ThemeButton dentro de ToolBar */}
      <ThemeButton></ThemeButton>
    </div>
  );
}

function ThemeButton() {
    //Creamos una constante theme, que recibe el valor del contexto ThemeContext a través de useContext (Ahora theme tiene el valor de initialState)
  const theme = useContext(ThemeContext);
  //Creamos un HOOK reductor el cual hace uso de la función themeReducer y como valor inicial obtiene theme.light (el tema claro es el tema inicial-predeterminado)
  const [state, dispatch] = useReducer(themeReducer, theme.light);
  return (
    <button
      style={{
        backgroundColor: state.bgColor,
        color: state.textColor,
        padding: "1em 2em",
        borderRadius: ".5rem",
        fontSize: "2.4rem",
      }}
      /* Hacemos que el evento onClick tenga un condicional, si state vale theme.light(que es true porque lo vale), haz un dispatch de type: "DARK", (con lo cual se le cambia el valor a state al contrario), y viceversa */
      /* Ese cambio en el valor de state lo realiza la función dispatch */
      onClick={() => state === theme.light ? dispatch({type: "DARK"}) : dispatch({type: "LIGHT"})}
    >
      I am styled by theme context!
    </button>
  );
}

export default App;
