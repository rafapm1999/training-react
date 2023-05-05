import './App.modules.css';
import { data } from "./mockedDB/tasks.json"

function App() {
  return (
    <main>
      <section className={classes["task-form"]} ></section>
      <section className={classes["task-content"]}></section>
    </main>
  );
}

export default App;
