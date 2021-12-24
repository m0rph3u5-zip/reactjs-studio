import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: 'm1',
    title: 'Camicia',
    price: 14.9,
    description: 'maglia a manica corta',
  },
  {
    id: 'm2',
    title: 'T-Shirt',
    price: 12.9,
    description: 'maglia a manica corta',
  },
  {
    id: 'm3',
    title: 'Jeans',
    price: 29.9,
    description: 'maglia a manica corta',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Prodotti</h2>
      <ul>
        {DUMMY_PRODUCT.map((item) => (
          <ProductItem
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
