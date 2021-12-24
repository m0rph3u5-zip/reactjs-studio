import classes from './CartButton.module.css';

const CartButton = (props) => {
  return (
    <button className={classes.button}>
      <span>Il Tuo Carrello</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
