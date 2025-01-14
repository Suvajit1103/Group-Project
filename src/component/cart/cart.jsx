import "./cart.css";
import Card from "../card/card";
import { Link } from "react-router-dom";

function Cart({ cartItems, onRemoveFromCart, onBuyNow }) {
  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Card key={item.id} productData={item} onRemoveFromCart={onRemoveFromCart} />
          ))
        ) : (
          <h2>Your cart is empty.</h2>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <p id="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
          <Link to={"/buy"}><button onClick={onBuyNow}>Buy Now</button></Link>
        </div>
      )}
    </div>
  );
}

export default Cart;