import './CounterLaunch.css';
import {useState, useEffect} from 'react';
 
function CounterLaunch() {
    const [count, setCount] = useState(10);
    useEffect(() => {
        setTimeout(() => {
    
                setCount(count - 1)
                if (count === 0) {
                    setCount(count)
                    let span1 = document.getElementsByClassName("numbers");
                    span1.className.add("first_color");
                };
            
        }, 1000);
    });

  return (
    <div>
        <div className='button_launch'><button> All engines running!!!</button></div>
        <div className="div_launch">
            <span className='numbers'>{count}</span>
        </div>
    </div>
  );
};

export default CounterLaunch;
