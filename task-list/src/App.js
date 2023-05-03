import './App.css';
import FormTask from './components/FormTask';
import { useState } from 'react';
import ItemContent from './components/ItemContent';
import TaskList from './components/TaskList';

const tasks = [
  {
    "id": 1,
    "text": "mauris morbi non lectus"
  }, 
  {
    "id": 2,
    "text": "dictumst morbi vestibulum velit"
  }, 
  {
    "id": 3,
    "text": "eget eleifend luctus ultricies eu nibh"
  }
];

function App() {
  
  //Recibe las tareas iniciales
  const [newTask, setNewTask] = useState(tasks);

  //La función intermediaria saveTask recibe los valores de un componente hijo ya que FormTask llama a dicha función a través de la propiedad "onNewTask"
  const saveTask = (createdTask) => {
    console.log(createdTask);
    /* Las tareas ya existentes se les añade las nuevas tareas */
    setNewTask((prevState) => {
     return( [
      /* El operador de propagación (..." ") mantiene la lista de tareas incial */
          ...prevState, 
          {
          id: Math.ceil(Math.random()*1000),
          text: createdTask
          },
      ]);  
    });
  };

  return (
    <ItemContent>
      <FormTask onNewTask={saveTask}/>
      {/* Las Tareas iniciales son pasadas a TaskList a través de un propiedad llamada onInitialTasks */}
      <TaskList onInitialTasks={newTask}></TaskList>
    </ItemContent>
  )
};

export default App;
