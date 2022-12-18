import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";
import Total from "./Total";

const Cart = () => {
  const cart = useSelector((store) => store.cartReducer.cart);

  return (
    <div className="cart__left">
      <div>
        <Total />
      </div>
      <div>
        <h3>Shopping Cart</h3>
        {cart?.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.imgurl}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div>
        <Total />
      </div>
    </div>
  );
};

export default Cart;
