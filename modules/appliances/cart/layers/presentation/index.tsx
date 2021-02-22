import React, { useContext } from 'react';
import Cart from '@md-modules/appliances/cart/components';
import CardForCart from '@md-modules/appliances/cart/components/card';
//context
import { CartContext } from '@md-modules/shared/providers/cart-context';


const CartPresentation = () => {
  const { activeCart, setActiveCart, cartProducts, deleteProductFromCart, countItemCart, totalAmountItemCart } = useContext(CartContext);

  return (
    <>
      <Cart activeCart={activeCart} setActiveCart={setActiveCart} totalAmountItemCart={totalAmountItemCart}>
        <h2>Cart: {countItemCart}</h2>
        {cartProducts.map((element) => (
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
