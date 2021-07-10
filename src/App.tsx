import React from "react";
import "./App.css";
import Todos from "./components/Todos/Todos";
import ListTodoContext from "./contexts/ListTodoContext/ListTodoContext";

function App() {
  return (
    <ListTodoContext>
      <div className="App">
        <Todos />
      </div>
    </ListTodoContext>
  );
}

export default App;
