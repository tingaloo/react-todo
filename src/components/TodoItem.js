import React from "react";

function TodoItem(props) {
  let item = props.item;

  return (
    <li className="list-none">
    
      <span 
      className="cursor-pointer hover:bg-gray-200"
      onClick={() => props.toggleComplete(item.todoId)}>
        {item.completed ? (
          <i className="las la-check-circle"></i>
        ) : (
          <i className="las la-circle"></i>
        )}
      {item.text}
      </span>

    </li>
  );
}

export default TodoItem;
