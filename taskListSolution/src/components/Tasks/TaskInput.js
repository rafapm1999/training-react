import {classes} from'./TaskInput.module.css';
import {useState} from "react";
import Button from "../UI/Button";
function TaskInput() {
    
    const [value, setValue] = useState(false);
    const [fullfilled, setIsFullfilled] = useState(true);
    const inputChangeHandler = e => {
        if (e.target.value.trim().length > 0) {
            setIsFullfilled(true);
        }
        setValue(e.target.value);
    };
    const submitHandler = e => {
        e.preventDefault();
        if (value.trim().length === 0) {
            setIsFullfilled(false);
            return
        }
        props.onAddTask(value)
        setValue("");
    };
    
  
  
  
    return (
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="">
                <h2></h2>
            </label>
            <input type="text" onChange={inputChangeHandler} value={value}/>
        </div>
        <Button type="submit">Save</Button>
    </form>
  )
};

export default TaskInput;
