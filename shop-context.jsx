// import { createContext, useEffect, useState } from "react";
// import PRODUCTS from "./products";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};

//   for (let i = 1; i < PRODUCTS.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

// function ShopcontextProvider(props) {
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   const cartFromStorage = localStorage.getItem("cart");
//   return cartFromStorage ? JSON.parse(cartFromStorage) : getDefaultCart();
// }
// const getTotalAmount = () => {
//   let totalAmount = 0;
//   for (const item in cartItems) {
//     if (cartItems[item] > 0) {
//       let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
//       totalAmount += cartItems[item] * itemInfo.price;
//     }
//   }
//   return totalAmount;
// };

// useEffect(() => {
//   localStorage.setItem("cart", JSON.stringify(cartItems));
// }, [cartItems]);

// const addToCart = (itemId) => {
//   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
// };
// const removeToCart = (itemId) => {
//   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
// };

// const updateCartAmount = (newAmount, itemId) => {
//   setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
// };

// const contextValue = {
//   cartItems,
//   addToCart,
//   removeToCart,
//   updateCartAmount,
//   getTotalAmount,
// };

// console.log(cartItems);

// return (
//   <>
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   </>
// );

// export default ShopcontextProvider;

import { createContext, useState, useEffect } from "react";
import PRODUCTS from "./products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopcontextProvider(props) {
  const [cartItems, setCartItems] = useState(() => {
    const cartFromStorage = localStorage.getItem("cart");
    return cartFromStorage ? JSON.parse(cartFromStorage) : getDefaultCart();
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartAmount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartAmount,
    getTotalAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopcontextProvider;
