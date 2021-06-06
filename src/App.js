import React, { useState, useEffect } from "react";
import "./App.css";
//Components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFitleredTodos] = useState([]);

  // Effects

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //Fuinctions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFitleredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFitleredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFitleredTodos(todos);
        break;
    }
  };

  // Save to Local Storage

  const saveLocalTodos = () =>{
    
  };
  return (
    <div className="App">
      <header>
        <h1>My To Do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
