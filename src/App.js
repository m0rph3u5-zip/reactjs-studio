import { useState } from 'react';

import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartToggleState, setCartToggle] = useState(false);

  const toggleShowCart = (state) => () => {
    console.log(state);
    setCartToggle(!state);
  };

  return (
    <CartProvider>
      {cartToggleState && <Cart onHideCart={toggleShowCart(cartToggleState)} />}
      <Header onShowCart={toggleShowCart(cartToggleState)} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
