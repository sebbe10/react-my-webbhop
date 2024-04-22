import { useContext } from "react";
import { ShopContext } from "./shop-context";

function Products(props) {
  const { id, img, name, price } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <>
      <div className="product">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{price}</p>
        </div>
        <div>
          <button onClick={() => addToCart(id)}>
            Add to cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </>
  );
}
export default Products;
