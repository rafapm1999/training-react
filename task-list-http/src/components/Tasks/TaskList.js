import Item from "./Item.js";

function TaskList(props) {
  return (
    <ul className="task-list">
        {Object.keys(props.items).map((key, index) => (
        <Item 
            key={key} 
            id={key} 
            onDelete={props.onDeleteItem} 
            even={index%2 === 0}
        >
            {props.items[key].title}
        </Item>
        ))}
    </ul>
  );
}

export default TaskList;
