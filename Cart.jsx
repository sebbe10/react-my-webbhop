import PRODUCTS from "./products";
import Cartitem from "./Cartitem";
import { ShopContext } from "./shop-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();

  const navigate = useNavigate();
  return (
    <>
      <div className="cart">
        <div>
          <h1>Your cart items</h1>

          <div className="cartItems">
            {PRODUCTS.map((product, index) => {
              if (cartItems[product.id] !== 0) {
                return <Cartitem data={product} key={index} />;
              }
            })}
          </div>
        </div>
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: {totalAmount}</p>
          <button onClick={() => navigate("/")}>Contiue shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Empty cart item</h1>
      )}
    </>
  );
}
export default Cart;
