import { createContext, useState } from "react";

export const ContextCart = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);
  const [showNavlinks, setShowNavlinks] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (id) =>{
    setCart((prevCart) => prevCart.filter((ele) => ele.id !== id));
  };

  const cartCount = cart.length;
  const value = {
    cart,
    setCart,
    cartCount,
    addToCart,
    removeFromCart,
    count,
    setCount,
    showNavlinks,
    setShowNavlinks,
    showForm,
    setShowForm
  };

  return <ContextCart.Provider value={value}>{children}</ContextCart.Provider>;
};
