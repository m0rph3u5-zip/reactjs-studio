import { uiActions } from './ui-slice';

const CartActions = (state) => (dispatch) => {
  return dispatch(async () => {
    const sendRequest = async () => {
      const response = await fetch(
        'https://react-studio-92313-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: state.cart.items,
            totalQuantity: state.cart.totalQuantity,
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

export default CartActions;
