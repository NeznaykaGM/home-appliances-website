import React, { useContext } from 'react';
import Cart from '@md-modules/appliances/Cart/components';
import CardForCart from '@md-modules/appliances/Cart/components/card';
import { CartContext } from '@md-modules/shared/providers/cart-context';
import { CartBLContext } from '../business/index';

const CartPresentation = () => {
  const { active, setActive } = useContext(CartContext);

  const { products } = useContext(CartBLContext);

  const productsList = products.map((element) => (
    <CardForCart img={element.img} name={element.name} price={element.price} key={element.id} />
  ));

  return (
    <Cart active={active} setActive={setActive}>
      {productsList}
    </Cart>
  );
};

export default CartPresentation;
