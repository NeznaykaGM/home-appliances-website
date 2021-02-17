import React, { useContext } from 'react';
import Cart from '@md-modules/appliances/cart/components';
import CardForCart from '@md-modules/appliances/cart/components/card';
import { CartContext } from '@md-modules/shared/providers/cart-context';
import { CartBLContext } from '../business/index';
import { AmountWrapper } from '../../views';
import styled from 'styled-components';

const CartPresentation = () => {
  const { active, setActive } = useContext(CartContext);

  const { products, deleteProductFromCart, countItemCart, totalAmountItemCart } = useContext(CartBLContext);

  return (
    <>
      <Cart active={active} setActive={setActive} totalAmountItemCart={totalAmountItemCart}>
        <h2>Cart: {countItemCart}</h2>
        {products.map((element) => (
          <CardForCart
            deleteProductFromCart={deleteProductFromCart}
            id={element.id}
            img={element.img}
            name={element.name}
            price={element.price}
            key={element.id}
          />
        ))}
      </Cart>
    </>
  );
};

export default CartPresentation;
