/* import './Calculator.css'; */
import { useState } from "react";

function Calculator() {
    const [count, setCount] = useState(0);
    const handlePlusOne = () => {
        setCount(count+1)
    };
    const handleTimesFive = () => {
        setCount(count*5)
    };
    const handleMinusTen = () => {
        setCount(count-10)
    };
    const handleDividedByHundred = () => {
        if (count !== 0) {
            setCount(count/100)
        } else {
            console.log('Division of 0 NOT allowed');
            return;
        }
    };

  return (
    <div>
        <p>El calculo de tus clicks es: {count}</p>
        <button onClick={handlePlusOne}>Suma 1 click</button>
        <button onClick={handleTimesFive}>Multiplica por 5 clicks</button>
        <button onClick={handleMinusTen}>Resta 10 clicks</button>
        <button onClick={handleDividedByHundred}>Divide 100 clicks</button>
    </div>
  );
}

export default Calculator;
