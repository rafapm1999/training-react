// import './StringReader.css';

import { useContext } from "react";
import {StringContext} from "../store/StringProvider"

function StringReader() {
  const {state} = useContext(StringContext);
  return (
    <div
      style={{
        backgroundColor: "dodgerblue",
        padding: "2em",
        color: "white"
      }}
    >
      <h1>String Reader</h1>
      <p style={{ fontSize: "2.5rem" }}>{state.text}</p>
    </div>
  );
}

export default StringReader;
