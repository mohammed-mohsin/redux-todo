import React from "react";
import "./TodoList.css";

import { useDispatch } from "react-redux";
import { setCheck } from "../../features/todoSlice";

const TodoItem = ({ name, done, id }) => {
    const dispatch =useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id))
  };
  return (
    <section>
      <input onChange={handleCheck} id={id} type="checkbox" />
      <label htmlFor={id} >
        <span></span>
        {name}
        <ins>
          {/* <i>{name}</i> */}
        </ins>
      </label>
    </section>
  );
};

export default TodoItem;
