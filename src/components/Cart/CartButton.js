import classes from './CartButton.module.css';

const CartButton = (props) => {
  return (
    <button className={classes.button}>
      <span>Edit carrello</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
