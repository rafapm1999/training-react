//import './Counter.css';
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>Has clicado {count} veces</p>
            <button onClick={() => setCount(count+1)}>¡Pulsame!</button>
        </div>
    );
}

export default Counter;
