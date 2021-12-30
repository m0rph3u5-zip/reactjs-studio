import { useDispatch, useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { uiActions } from '../../store/ui-slice';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const itemList = items.map((item) => (
    <CartItem
      key={item.id}
      item={{
        id: item.id,
        title: item.name,
        price: item.price,
        quantity: item.quantity,
        total: item.totalPrice,
      }}
    />
  ));

  let message = '';
  if (items.length > 0) {
    message = 'Il tuo carrello';
  } else {
    message = 'Il tuo carrello è vuoto!';
  }

  return (
    <Card className={classes.cart}>
      <h2>{message}</h2>
      <ul>{itemList}</ul>
      <button onClick={closeCartHandler}>Chiudi</button>
    </Card>
  );
};

export default Cart;
