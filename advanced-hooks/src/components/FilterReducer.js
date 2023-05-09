import classes from "./FilterReducer.module.css";
import { useReducer } from "react";

const lorem = [
  "Phasellus fringilla ipsum et dolor suscipit, ut vehicula sem mollis.",
  "Sed semper sapien eu tincidunt consectetur.",
  "Curabitur id enim in ante egestas ullamcorper at at est.",
  "Maecenas sed nisl nec velit pulvinar maximus at porta arcu.",
  "Quisque non augue eu nisl ornare condimentum at eget arcu.",
  "Praesent eget nunc sit amet turpis elementum vulputate in ut metus.",
  "Mauris sagittis magna ac volutpat varius.",
  "Nam non sapien et neque congue mollis.",
  "Donec imperdiet ipsum at lobortis ornare.",
  "Suspendisse porttitor diam vitae ligula suscipit suscipit.",
  "Integer vestibulum dui sed luctus sagittis.",
];

const initialState = [
  {
    id: 1,
    task: "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin at turpis a pede posuere nonummy.",
    done: false,
  },
  {
    id: 2,
    task: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse potenti.",
    done: true,
  },
  {
    id: 3,
    task: "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem. Integer ac neque. Duis bibendum.",
    done: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item.id !== action.payload);
    case "toggle":
      return state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );

    default:
      return state;
  }
};

function FilterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNewTask = () => {
    console.log("click");
    let lastElementPosition = state.length - 1; //Calcula la longitud del elemento
    let loremSize = lorem.length - 1;
    /* let id = state[lastElementPosition].id + 1; */
    let id =  lastElementPosition >= 0 ? state[lastElementPosition].id + 1 : 0;
    let newTask = 
        lorem[Math.floor(Math.random() * (loremSize + 1))];
        /* state[Math.floor(Math.random() * (lastElementPosition + 1))].task; */
    let done = Math.floor(Math.random() * 2) === 1 ? true : false;

    const finishedTask = {
      id,
      task: newTask,
      done,
    };
    dispatch({ type: "add", payload: finishedTask });
  };

  return (
    <div className={classes["tasks-list"]}>
      <h1>To do App</h1>
      <ul>
        {state.map((item) => (
          <li key={item.id}>
            <span className={item.done ? classes.done : ""}>{item.task}</span>
            <div className={classes.actions}>
              <button
                onClick={() => dispatch({ type: "toggle", payload: item.id })}
                className={classes.toggle}
              >
                Toggle
              </button>
              <button
                onClick={() => dispatch({ type: "remove", payload: item.id })}
                className={classes.remove}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className={classes["new-task"]} onClick={handleNewTask}>
        Add
      </button>
    </div>
  );
}

export default FilterReducer;
