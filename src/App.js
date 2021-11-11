import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartToggleState, setCartToggle] = useState(false);

  const toggleShowCart = (state) => () => {
    console.log(state);
    setCartToggle(!state);
  }

  return (
    <Fragment>
      {cartToggleState && <Cart onHideCart={toggleShowCart(cartToggleState)} />}
      <Header onShowCart={toggleShowCart(cartToggleState)}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
