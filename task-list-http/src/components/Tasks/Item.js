import classes from "./Item.module.css";
import { useState, useRef } from "react";
function Item(props) {
  const [isEditing, setIsEditing] = useState(false);
  const titleRef = useRef(null);
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  const editHandler = () => {
    //Cuando se pone el foco en el elemento
    titleRef.current.focus();
    setIsEditing(true);
  };

  const saveHandler = () => {
    //Cuando se quita el foco del elemento
    titleRef.current.blur();
    props.onEdit(props.id, titleRef.current.textContent);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      saveHandler();
    }
  };
  return (
    <li
      onClick={deleteHandler}
      className={`${classes["task-item"]} ${props.even && classes["even"]}`}
    >
      <div
        onClick={editHandler}
        onKeyDown={handleKeyPress}
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={saveHandler}
        ref={titleRef}
      >
        {props.children}
      </div>
    </li>
  );
}

export default Item;
