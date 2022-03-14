import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      Prodotti:
      <ul>
        <li>
          <Link to='products/product-1'>A book</Link>
        </li>
        <li>
          <Link to='products/product-2'>A Pen</Link>
        </li>
        <li>
          <Link to='products/product-3'>A Eraser</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
