import "./cart.css";
import Card from "../card/card";

function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Card key={item.id} productData={item} onRemoveFromCart={onRemoveFromCart} />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;