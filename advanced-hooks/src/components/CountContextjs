
import B from "../nestedComponents/B";
import C from "../nestedComponents/C";
import { useState, createContext } from "react";

export const MyContext = createContext(null);

function App() {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount(count + 1);
  };
  return (
    <>
      <B onClick={countHandler}></B>
      <MyContext.Provider value={count}>
        <C></C>
      </MyContext.Provider>
    </>
  );
}

export default App;
