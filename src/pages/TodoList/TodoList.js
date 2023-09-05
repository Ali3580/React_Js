import React from "react";
import "font-awesome/css/font-awesome.min.css";

const ToDoList = (list) => {
  return (
    <>
      <div className="todo_style">
        <i class="fa fa-times" aria-hidden="true" onClick={()=>{
            list.onSelect(list.id)
        }}/>
        <li>{list.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
