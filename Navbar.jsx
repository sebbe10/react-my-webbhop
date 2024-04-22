import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to="/">Shop</Link>
            </li>

            <li>
              <Link to="/cart">Cart</Link>
            </li>

            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
