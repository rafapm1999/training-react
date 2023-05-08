//import './App.css';
import React from "react"
import { Fragment } from "react";


//Formas de usar contenedores emboltorios sin tener que usar div
function App() {
  return (
    //
  /*   <>
      <div>
        <h1>Hello World!</h1>
        <p>Lorem Ipsum dolor si tamet consectetur adipisicing elit.</p>
      </div>
    </> */

  /*   <React.Fragment>
        <div>
          <h1>Hello World!</h1>
          <p>Lorem Ipsum dolor si tamet consectetur adipisicing elit.</p>
        </div>
    </React.Fragment> */

    <Fragment>
        <div>
          <h1>Hello World!</h1>
          <p>Lorem Ipsum dolor si tamet consectetur adipisicing elit.</p>
        </div>
    </Fragment>
  );
}

export default App;
