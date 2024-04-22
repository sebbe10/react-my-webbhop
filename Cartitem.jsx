import { useContext } from "react";
import { ShopContext } from "./shop-context";
import "./cartitem.css";
function Cartitem(props) {
  const { id, name, price, img } = props.data;
  const { cartItems, addToCart, removeToCart, updateCartAmount } =
    useContext(ShopContext);

  return (
    <>
      <div className="cartitem">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{price}</p>
        </div>
        <div className="allButtonsInCart">
          <button onClick={() => removeToCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartAmount(Number(e.target.value))}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </>
  );
}

export default Cartitem;
