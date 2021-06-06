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

  useEffect( () => {
    // this will only run once when the app loads for the first time
    getLocal();
  }, []
  );

  useEffect(() => {
    filterHandler();
    savetoLocal();
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
  const savetoLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocal = () =>{
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let localTodos= JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);

    }
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
