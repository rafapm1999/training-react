import classes from './TaskList.module.css';

function TaskList(props) {

  return (
    <div className={classes.taskList}>
      <ul>
        {props.onInitialTasks.map((task) => {
          return (<li className={classes.listTask} key={task.id}>{task.text}</li>)
        })}
      </ul>
    </div>
  );
}

export default TaskList;
