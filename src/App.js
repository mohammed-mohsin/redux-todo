import React from "react";

import "./App.css";
import Input from "./components/input/Input";
import TodoItem from "./components/todoItem/TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) =>new Date(b.id)-new Date(a.id))
  // console.log(sortedTodoList)
  return (
    <div className="app">
      {/* Todo List */}
      <div className="app__container">
        <h2 >React-Redux-ToDo App</h2>
        <div className="app__todoContainer">
          {sortedTodoList.map((item) => (
            <TodoItem
              key={item.id}
              name={item.item}
              done={item.done}
              id={item.id}
            />
          ))}
        </div>
        {/* Input */}
        <Input />
      </div>
    </div>
  );
}

export default App;
