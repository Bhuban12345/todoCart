import React, { useState } from "react";
const TodoCart = ({ cartArr, getName }) => {
  const [todo, setTodo] = useState("");
  const getDetails = () => {
    getName(todo);
  };
  return (
    <div className="cart">
      {cartArr.map((e) => {
        const { num } = e;
        return (
          <p className="item">
            <input
              className="input1"
              type="text"
              placeholder="Enter to do"
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            />
            <input className="input2" type="checkbox" onClick={getDetails} />
          </p>
        );
      })}
    </div>
  );
};
export default TodoCart;
