//Importamos todo los componentes y elementos que necesitamos en el archivo
import './ExpensesFilter.css';
import { useEffect, useState } from 'react';
import Wrapper from './wrappers/Wrapper';
import {expensesStats} from "../utils/expensesStats";
import {monthToString} from "../utils/monthToString";

//La funcion ExpensesFilter recibe props
function ExpensesFilter(props) {
    const [stats, setStats] = useState([0,0]);
    //Creamos un HOOK de estado, con la variable month, funcion set month, este código se utiliza para actualizar el valor de una variable de estado "month" cuando el usuario selecciona un valor en la interfaz de usuario.
    const [month, setMonth] = useState(
        monthToString(new Date().toLocaleDateString())
    );
    //este código establece el valor inicial de la variable de estado "month" utilizando la fecha actual en formato de cadena y la función "monthToString", lo que permite que la variable de estado se actualice posteriormente utilizando la función de actualización "setMonth".
    const handleSelect = (e) => {
        setMonth(e.target.value)
        props.onSelectMonth(e.target.value);
    };
    //Esta constante stats hace una llamada a expensesStats recibiendo el valor que recibe sobre month a traves de props
    useEffect(() => {
        setStats(props.onStats);
    }, [month, props.onStats])
   
  return (
    <Wrapper content={
        <div className='chart'>
            <div className="bars">
                <div className="label">
                    <p>Incomes %</p>
                    <div className="bar">
                        <div className="incomes" style={{width:`${stats[0]}%`}}></div>
                    </div>
                </div>
                <div className="label">
                    <p>Expenses %</p>
                    <div className="bar">
                        <div className="expenses" style={{width:`${stats[1]}%`}}></div>
                    </div>
                </div>
            </div>
            <form action="">
                <select name="month" onChange={handleSelect} value={month}>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </form>
        </div>

    }/>
  );
}

export default ExpensesFilter;
