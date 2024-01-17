import React from "react";

const Cart = ({ cartItem, total }) => {
  return (
    <div className="p-2 px-4 border-[20px] rounded-xl shadow-2xl border-gray-400 w-[590px] relative h-[500px] bg-white">
      <h1 className="text-center font-semibold text-[32px]">Cart</h1>
      {cartItem.length === 0 ? (
        <div className="text-[20px]  font-semibold text-center my-8 p-4 bg-gray-400 rounded-lg border shadow-xl text-white borer-black w-full">
          <p>No Product added to the cart !</p>
        </div>
      ) : (
        <>
          {cartItem.map((item) => (
            <div
              className="text-[20px] flex justify-between p-4 my-8 bg-gray-400 rounded-lg shadow-2xl border font-semibold text-white w-full"
              key={item.id}
            >
              <p>{item.name}</p>
              <div className="flex gap-20">
                <div className="flex gap-4">
                  <p className="font-bold "> {item.quantity}</p>X
                  <p>${item.price}</p>
                </div>
                =<p>{item.quantity * item.price}</p>
              </div>
            </div>
          ))}
        </>
      )}
      <div className="font-semibold shadow-xl text-[22px] flex justify-between p-4 my-10 bg-gray-500 text-white rounded-lg border borer-black absolute -bottom-4 w-[94.5%]">
        <h3>Total:</h3>
        <h3>$ {total}</h3>
      </div>
    </div>
  );
};

export default Cart;
