import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

const PutCartData = (cart) => (dispatch) => {
  return dispatch(async () => {
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

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          show: true,
          status: 'success',
          title: 'Carrello aggiornato',
          message: 'il tuo carrelo è stato aggiornato',
        })
      );
    } catch (error) {
      uiActions.showNotification({
        show: true,
        status: 'error',
        title: 'Errore',
        message: 'Impossibile aggiornare il carrello!',
      });
    }
  });
};

const GetCartData = () => (dispatch) => {
  return dispatch(async () => {
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

    try {
      const cartData = await getCartData();
      dispatch(
        cartActions.overrideCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );

      uiActions.showNotification({
        show: true,
        status: 'success',
        title: 'Carrello aggiornato',
        message: 'Il tuo carrelo è stato aggiornato',
      });
    } catch (error) {
      uiActions.showNotification({
        show: true,
        status: 'error',
        title: 'Errore',
        message: 'Impossibile aggiornare il carrello!',
      });
    }
  });
};

export { PutCartData, GetCartData };
