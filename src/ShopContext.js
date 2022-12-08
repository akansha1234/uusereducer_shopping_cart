import { createContext, useReducer } from "react";
import cartReducer, { initialState } from "./cartReducer";
export const ShopContext = createContext(initialState);
const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addTocart = (product) => {
    const updateCart = state.products.concat(product);
    //console.log(updateCart, "add");
    dispatch({ type: "ADD_TO_CART", payload: updateCart });
  };
  const removeFromCart = (product) => {
    //console.log(product, "product");
    const updateCart = state.products.filter((el) => el.name !== product.name);
    //console.log(updateCart, "after removal");
    dispatch({ type: "REMOVE_FROM_CART", payload: updateCart });
  };
  const updatePrice = (products) => {
    let total = 0;
    //console.log(products, "product in update");
    products.forEach((product) => (total += product.price));
    //console.log(total, "total");
    dispatch({ type: "UPDATE_PRICE", payload: total });
  };
  const value = {
    total: state.total,
    products: state.products,
    addTocart,
    removeFromCart,
    updatePrice
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
export default ShopProvider;
