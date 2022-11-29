import styled from "styled-components";

const H3 = styled.h3`
  margin-bottom: 15px;
  font-size: 16px;
  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }
`;

function ProductColorTitle() {
  return (
    <H3>Цвет товара: Синий</H3>
  );
}

export default ProductColorTitle;
