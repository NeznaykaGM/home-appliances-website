import React, { useContext, useState } from 'react';
import Cart from '@md-modules/appliances/Cart/components';
import { CartProducts } from '../../../../shared/mock/index'
import CardForCart from '@md-modules/appliances/Cart/components/card';
import { CartContext } from '@md-modules/shared/providers/cart-context';


const CartPresentation = () => {
  const active = useContext(CartContext);
  const productsList = CartProducts.map(element => <CardForCart img={element.img}
                                                                name={element.name}
                                                                price={element.price}
                                                                key={element.id}/>)

  return (
    <Cart active={active.active} setActive={active.setActive}>
      {productsList}
    </Cart>

  );
};

export default CartPresentation;