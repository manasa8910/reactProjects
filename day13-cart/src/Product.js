import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Product = ({ products, handleIncrement, handleDecrement }) => {
  return (
    <div className="p-2 px-4 rounded-xl border-[20px] border-gray-400 shadow-2xl w-[570px] bg-white">
      <h1 className="font-semibold text-[32px] text-center">Products</h1>
      {products.map((item) => (
        <div
          className="text-[20px] flex justify-between p-4 my-8 bg-gray-400 rounded-lg border shadow-xl font-semibold text-white borer-black w-full"
          key={item.id}
        >
          <p>{item.name}</p>
          <p>${item.price}</p>
          <div className="flex items-center justify-between w-[130px]">
            <button
              onClick={() => handleIncrement(item)}
              className="p-2  rounded-full text-[20px] hover:scale-110 duration-300  "
            >
              <FaPlus />
            </button>
            <p>{item.quantity}</p>
            <button
              onClick={() => handleDecrement(item)}
              className="p-2  rounded-full text-[20px] hover:scale-110 duration-300 "
            >
              <FaMinus />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
