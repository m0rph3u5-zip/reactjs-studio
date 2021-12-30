import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import { uiActions } from './store/ui-slice';
import { cartActions } from './store/cart-slice';

function App() {
  const firstUpdate = useRef(true);
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (!firstUpdate.current) {
      const sendRequest = async () => {
        const response = await fetch(
          'https://react-studio-92313-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
          {
            method: 'PUT',
            body: JSON.stringify({
              items: cart.items,
              totalQuantity: cart.totalQuantity,
            }),
          }
        );

        if (!response.ok) {
          throw new Error('Impossiile caricare i dati sul server.');
        }
      };

      sendRequest()
        .then(() => {
          dispatch(
            uiActions.showNotification({
              show: true,
              status: 'success',
              title: 'Carrello aggiornato',
              message: 'il tuo carrelo è stato aggiornato',
            })
          );
        })
        .catch(() => {
          dispatch(
            uiActions.showNotification({
              show: true,
              status: 'error',
              title: 'Errore',
              message: 'Impossibile aggiornare il carrello!',
            })
          );
        });
    }
    firstUpdate.current = false;

    return () => {
      console.log('reset');
      setTimeout(() => {
        dispatch(
          uiActions.showNotification({
            show: false,
          })
        );
      }, 10000);
    };
  }, [cart, dispatch]);

  useEffect(() => {
    const getCartData = async () => {
      const response = await fetch(
        'https://react-studio-92313-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      );

      if (!response.ok) {
        throw new Error('Impossiile caricare i dati sul server.');
      }

      const data = await response.json();
      return data;
    };

    getCartData().then((data) => {
      dispatch(
        cartActions.overrideCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    });
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
