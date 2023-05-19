import classes from "./App.module.css";
import TaskInput from "./components/Tasks/TaskInput";
import { useEffect, useState } from "react";
import TaskList from "./components/Tasks/TaskList";
import HourGlass from "./components/UI/Spinners/HourGlass";

const BASE_URL = "https://task-list-e73ae-default-rtdb.europe-west1.firebasedatabase.app/";
function App() {
  const [value, setValue] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  //Esta función fetchTaskHandler se encarga de hacer las peticiones GET
  //Es una función async (asincrona)
  const fetchTasksHandler = async (method = "GET", task = { id: "", text: ""}) => {
    try {
      setPending(true);
      setError(null);

      let response = null; 

      if (method === "DELETE") {
        response = await fetch(
           BASE_URL + "tasks/" +
            task.id +
            ".json", {
              method
            }
        );
          }
        else if (method === "PATCH") {
            response = await fetch(
              BASE_URL + "tasks/" +
                task.id +
                ".json", {
                  method,
                  headers:{
                    "Content-Type": "application/json",
                  }, 
                  body: JSON.stringify({ title: task.text })
                });
      } else {
        response = await fetch(
          BASE_URL + "tasks.json",
          {
            method,
            headers: {
              "Content-Type": method !== "GET" ? "application/json" : "",
            },
            body: method !== "GET" ? JSON.stringify({ title: task.text }) : null,
          }
        );
      }

      //Si todo ha salido bien, el objeto response, el cual tiene una propiedad "ok", pondrá esta propiedad ok a true
      if (response.ok) {
        const data = await response.json({});
        if (method === "GET") {
          setValue(data);
        } else {
          fetchTasksHandler();
        }
        /* setValue(data); */
      }
    } catch (error) {
      setError({
        message: error.message || "something went wrong",
      });
    }

    setPending(false);
  };

  useEffect(() => {
    fetchTasksHandler();
  }, []);

  const addTaskHandler = (text) => {
    fetchTasksHandler("POST", {text: text});
  };

  const deleteHandler = (taskId) => {
    fetchTasksHandler("DELETE", {id: taskId});
  };

  const updateItemHandler = (taskId, taskText) => {
    fetchTasksHandler('PATCH', {id: taskId, text: taskText});
    
  }

  return (
    <main>
      <section className={classes["task-form"]}>
        <TaskInput onAddTask={addTaskHandler}></TaskInput>
      </section>
      {pending && <HourGlass></HourGlass>}
      <section className={classes["task-content"]}>
        {!pending && value !== null && error === null && (
          <TaskList items={value} onDeleteItem={deleteHandler} onEditItem={updateItemHandler}></TaskList>
        )}
        {!pending && value === null && !error && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            No task available. Add one?
          </h2>
        )}
        {!pending && error !== null && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            {error.message}
          </h2>
        )}
      </section>
    </main>
  );
}

export default App;
