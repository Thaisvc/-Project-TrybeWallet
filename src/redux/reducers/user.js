import { ADD_USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '', // string que armazena o email da pessoa usuária
  },
};

function addUsers(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_USER:
    return {
      ...state,
      email: action.emails,
    };
  default:
    return state;
  }
}

export default addUsers;
