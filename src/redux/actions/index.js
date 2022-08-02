export const ADD_USER = 'ADD_USER';
export const SAVE_CURRENCIES = 'PERSONAL_INFO';
export const RESULT_API = 'RESULT_API';
export const LOADING = 'LOADING';

export const addingUsers = (emails) => (
  {
    type: 'ADD_USER',
    emails,
  }
);

export const saveCurrencies = (payload) => (
  { type: 'SAVE_CURRENCIES',
    payload,
  }
);

export const loading = () => ({
  type: 'LOADING',
  loading: true,

});

export function fetchCurrencieThunk() {
  return (dispatch) => { // thunk declarado
    dispatch(loading());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        const keys = Object.keys(data);
        dispatch(console.log(saveCurrencies(keys.filter(
          (element) => element !== 'USDT',
        )))); // ok
      });
  };
}

/* dispatch(console.log(saveCurrencies(keys.filter(
  (element) => element !== 'USDT',
)))); */
