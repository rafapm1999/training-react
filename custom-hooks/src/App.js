import classes from "./App.module.css";
import TaskInput from "./components/Tasks/TaskInput";
import { useEffect, useState } from "react";
import TaskList from "./components/Tasks/TaskList";
import HourGlass from "./components/UI/Spinners/HourGlass";
import useFetch from "./hooks/useFetch";


function App() {
  const {pending, error, value, fetchTasksHandler} = useFetch();

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
