import "./styles.css";
import React, { useState } from "react";
import TodoCart from "./TodoCart";
import { v4 as uuidv4 } from "uuid";
import DoneList from "./DoneList";

export default function App() {
  const [name, setName] = useState("");
  const [isInput, setInput] = useState(false);
  const [list, setList] = useState([]);
  const [cartArr, setCartArr] = useState([]);
  const [num, setNum] = useState(0);

  const getTodo = (e) => {
    setInput(true);
    const newCart = {
      num: num
    };
    setCartArr([...cartArr, newCart]);
    setNum(num + 1);
  };
  const getName = (e) => {
    const newItem = {
      id: uuidv4(),
      name: e
    };
    setList([...list, newItem]);
    console.log(list);
  };

  return (
    <div className="App">
      <div className="todoContainer">
        <div className="todoList">
          <h1>TODO</h1>
          <div className="itemList">
            {isInput ? <TodoCart cartArr={cartArr} getName={getName} /> : ""}
          </div>
        </div>
        <div className="input"></div>
        <div className="btn">
          <button onClick={getTodo}>+</button>
        </div>
      </div>
      <div className="doneContainer">
        <h1>DONE</h1>
        {list.length > 0 ? <DoneList list={list} /> : ""}
      </div>
    </div>
  );
}
