import styled from "styled-components";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";
const Cart = () => {
  const { total, products } = useContext(ShopContext);
  console.log(total, "total");
  return (
    <div>
      <Title>Total is {total}</Title>
      {products.map((product) => (
        <li key={product.name}>{(product.name, product.price)}</li>
      ))}
    </div>
  );
};

export default Cart;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;
