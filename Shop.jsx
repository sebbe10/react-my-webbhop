import PRODUCTS from "./products";
import "./products.css";
import Products from "./Products.jsx";

function Shop() {
  return (
    <>
      <div className="products">
        {PRODUCTS.map((product, index) => (
          <Products data={product} key={index} />
        ))}
      </div>
    </>
  );
}
export default Shop;
