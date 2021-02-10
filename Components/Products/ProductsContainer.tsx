import React from 'react';
import Products from './Products';
import styled from 'styled-components';

const StyledContainerProducts = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  position: relative;
`;

const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Washer',
    price: 100,
    img:
      'https://cdn.comfy.ua/media/catalog/product/cache/4/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/d/_/d_z01.jpg'
  },
  {
    id: 2,
    name: 'Washer',
    price: 300,
    img:
      'https://cdn.comfy.ua/media/catalog/product/cache/4/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/d/_/d_z01.jpg'
  },
  {
    id: 3,
    name: 'Fridge',
    price: 1200,
    img:
      'https://hotline.ua/img/tx/238/238778856_s265.jpg'
  },
  {
    id: 3,
    name: 'Fridge',
    price: 1200,
    img:
      'https://hotline.ua/img/tx/238/238782043_s265.jpg'
  }
];


const ProductsContainer = () => {

  const products = PRODUCTS_DATA.map((element) => <Products img={element.img} name={element.name} price={element.price} id={element.id} />);

  return (
    <StyledContainerProducts>
      {products}
    </StyledContainerProducts>
  )
};

export default ProductsContainer;
