export const initialState = {
  total: 0,
  products: []
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("adding products");
      return { ...state, products: action.payload };
    case "REMOVE_FROM_CART":
      console.log("removing products");
      return { ...state, products: action.payload };
    case "UPDATE_PRICE":
      console.log("price updated");
      return { ...state, total: action.payload };
    default:
      throw new Error(`error is thrown by ${action.type} from cartReducer`);
  }
};
export default cartReducer;
