import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Prodotti</h2>
      <ul>
        <ProductItem
          id={1}
          title='Test'
          price={6}
          description='descrizione del prodotto!'
        />
      </ul>
    </section>
  );
};

export default Products;
