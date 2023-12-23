import React, { useState } from "react";
import "./App.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Card = ({ subject, duration, onDelete }) => {
  const initialCount = parseInt(duration, 10) || 0;
  const [count, setCount] = useState(initialCount);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
    if (+count === 0) {
      onDelete();
    }
  };

  return (
    <div className="flex gap-5 border justify-center items-center card w-[50%] p-5 mb-[20px] rounded-md shadow-lg text-white bg-orange-500 border-0">
      <h3 className="w-[50%] text-lg font-semibold">{subject}</h3>
      <div className="flex justify-end items-center gap-2 w-[50%]">
        <button
          id="addbtn"
          className="px-3 py-1  font-semibold text-2xl"
          onClick={increase}
        >
          +{" "}
        </button>
        <h2>{count}</h2>
        <button
          id="minusbtn"
          className="px-3 py-1  font-semibold text-2xl"
          onClick={decrease}
        >
          -{" "}
        </button>
        <button id="deletebtn" onClick={onDelete} className="px-3 py-1 ">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Card;
