import React from "react";

const DoneList = ({ list }) => {
  return (
    <div className="cart">
      {list.map((e) => {
        const { id, name } = e;
        return (
          <p className="doneCart" key={id}>
            {name}
          </p>
        );
      })}
    </div>
  );
};
export default DoneList;
