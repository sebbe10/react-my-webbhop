import Shop from "./Shop";
import Cart from "./Cart";
import Navbar from "./Navbar";
import ShopcontextProvider from "./shop-context";
import { Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <ShopcontextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </ShopcontextProvider>
    </>
  );
}

export default App;
