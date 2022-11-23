import React from "react";
import "./cart.css";

const Cart = ({ cart }) => {
  //   const { cart } = props;
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tex = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tex;
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Select Items:{cart.length}</p>
      <p>Total price:${total}</p>
      <p>Shipping:${shipping}</p>
      <p>tex:{tex}</p>
      <h4>Grand Total:{grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
