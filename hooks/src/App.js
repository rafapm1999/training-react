//import './App.css';
import {useState} from "react"
import Person from "./component/Person";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* <p>Has clicado {count} veces</p>
      <button onClick={() => setCount(count+1)}>¡Pulsame!</button>
 */}    
    
    
    <Person></Person>
 
 
    </div>
  );
}

export default App;
