import classes from './FormTask.module.css';
import {useState} from "react"
import Wrapper from './wrappers/Wrapper';

function FormTask(props) {
    const [task, setNewTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault(); //Evita que al hacer click sobre el boton se recargue la pagina

        /* La función handleSubmit realiza a través de props la llamada a la propiedad onNewTask, y le pasa a la función el valor de la nueva tarea */
        props.onNewTask(task);

        setNewTask("")
    };

    //Cuando se realiza un cambio se ejecuta la función handleInputChange
    /* La cual modifica el valor de task, a través de llamar a la función setNewTask, que modifica task recibiendo el valor  */
    const handleInputChange = (e) => {
         setNewTask(e.target.value);
    };
   
  return (
    <Wrapper content={
        <div>
            <form className={classes.newTask} onSubmit={handleSubmit}>
            <div className={classes.formTask}>
            <label htmlFor="title">
                <h1>Post a Task</h1>
            </label>
            <input 
                onChange={handleInputChange}
                /* value recoge el valor de la nueva tarea */
                value={task}
                type="text" 
                name="title" 
                id="title"
                placeholder='Write a new Task!'
            />
            </div>
            <button>Save</button>
            </form>
        </div>
    }/>
  )
};

export default FormTask;
