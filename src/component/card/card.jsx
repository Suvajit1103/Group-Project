import "./card.css";
const Card = ({ productData, onAddToCart, onRemoveFromCart }) => {

  return (
    <div className="all-card">
    <div className="container-card">
      <div className="card">
        
          <div className="card-image">
            <img src={productData?.image} alt="amazon-box" />
          </div>
          <div className="card-content">
            <h3>{productData?.title}</h3>
            <div className="price">
              <h3>price :  ${productData?.price}</h3>
            </div>
            {onRemoveFromCart ? (
        <button onClick={() => onRemoveFromCart(productData.id)}> Remove from cart</button>
      ) : (
        <button onClick={() => onAddToCart(productData)}>Add to Cart</button>
      )}
          </div>
       
      </div>
    </div>
    </div>
  );
}

export default Card;
