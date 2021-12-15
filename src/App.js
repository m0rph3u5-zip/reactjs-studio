import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import ButtonStatic from './components/Statless/ButtonStatic';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const onClickHandler = () => {
    console.log('event button on click');
  }
  
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      {/* <ButtonStatic onClick={onClickHandler}>Tasto Demo</ButtonStatic> */}
    </CartProvider>
  );
}

export default App;
