import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import { uiActions } from './store/ui-slice';
import { GetCartData, PutCartData } from './store/cart-action';

function App() {
  const firstUpdate = useRef(true);
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (!firstUpdate.current) {
      dispatch(PutCartData(cart));
    }
    firstUpdate.current = false;

    return () => {
      setTimeout(() => {
        dispatch(
          uiActions.showNotification({
            show: false,
          })
        );
      }, 5000);
    };
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(GetCartData());
  }, [dispatch]);

  return (
    <>
      {notification && notification.show && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        {!showCart && <Products />}
      </Layout>
    </>
  );
}

export default App;
