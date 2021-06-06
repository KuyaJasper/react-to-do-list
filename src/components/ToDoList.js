import React from "react";

import Todo from './ToDo';

const ToDoList = () => {
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      <Todo />
    </div>
  );
};

export default ToDoList;