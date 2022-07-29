export const ADD_USER = 'ADD_USER';
export const PERSONAL_INFO = 'PERSONAL_INFO';

export const addingUsers = (emails) => (
  {
    type: 'ADD_USER',
    emails,
  }
);

export const personalInformation = (payload) => (
  { type: 'PERSONAL_INFO',
    payload,
  }
);
