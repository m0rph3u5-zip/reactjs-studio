import { React, useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const onCancelOrderHandler = () => {
    setIsCheckout(false);
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={`cart-item-${item.id}`}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Torna al menù
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Ordina
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      <h2>Il tuo carrello</h2>
      {cartItems}
      <div className={classes.total}>
        <span>Totale</span>
        <span>{totalAmount}</span>
      </div>
      {!isCheckout && modalAction}
      {isCheckout && <Checkout onCancel={onCancelOrderHandler}/>}
    </Modal>
  );
};

export default Cart;
