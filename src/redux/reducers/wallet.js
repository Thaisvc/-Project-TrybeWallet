// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENCIES, SAVE_EXPENSES, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {

  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada

};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      // matenho o q tinha dentro da chaave expenses e add um novo
      expenses: [...state.expenses, action.data],
    };

  case DELETE_EXPENSE:
    return {
      ...state,
      // matenho o q tinha dentro da chaave expenses e add um novo
      expenses: [...state.expenses.filter((element) => element.id !== action.delet)],
    };
  default:
    return state;
  }
}

export default wallet;
