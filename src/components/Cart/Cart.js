import { React, useContext, useState } from 'react';

import config from '../../env/config.json';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [sendingData, setSendingData] = useState(false);

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
  };

  const confirmOrderHandler = async (userData) => {
    setSendingData(true);
    const response = await fetch(
      `${config.serverUrl}${config.order.endpoint}`,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        method: 'POST',
        body: JSON.stringify({
          userData: userData,
          cartItems: cartCtx.items,
        }),
      }
    );

    if (!response.ok) {
      console.error(response.status);
      alert('Qualcosa è andato storto. Riprova più tardi.');
      setSendingData(false);
      return;
    }

    setSendingData(false);
    cartCtx.clearItems();
    props.onClose();
  };

  const cartItemsContent = (
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

  const modalActionContent = (
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

  const modalContent = (
    <>
      <h2>Il tuo carrello</h2>
      {cartItemsContent}
      <div className={classes.total}>
        <span>Totale</span>
        <span>{totalAmount}</span>
      </div>
      {!isCheckout && modalActionContent}
      {isCheckout && (
        <Checkout
          onConfirm={confirmOrderHandler}
          onCancel={onCancelOrderHandler}
        />
      )}
    </>
  );

  const SendingDataContent = <div>Invio dati in corso...</div>;

  return (
    <Modal onClose={props.onClose}>
      {!sendingData && modalContent}
      {sendingData && SendingDataContent}
    </Modal>
  );
};

export default Cart;
