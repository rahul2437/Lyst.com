import { useSelector } from "react-redux";
import "./Total.css";

const Total = () => {
  const cart = useSelector((store) => store.cartReducer.cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  return (
    <div>
      <h1>Order Summary</h1>
      <p className="total__p">
        total ({getTotal().totalQuantity} items) :{" "}
        <strong>${getTotal().totalPrice}</strong>
      </p>
    </div>
  );
};

export default Total;
