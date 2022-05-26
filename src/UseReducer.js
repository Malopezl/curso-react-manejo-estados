import React from "react";

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

// <---FORMA BASICA DE CREAR UN REDUCER--->
// const reducer = (state, action) => {
// };

// <---FORMA NORMAL DE CREAR UN REDUCER--->
const reducerIf = (state, action) => {
  if (action.type === 'ERROR') {
    return {
      ...state,
      error: true,
      loading: false,
    };
  } else if (action.type === 'CHECK') {
    return {
      ...state,
      loading: true,
    }
  } else {
    return {
      ...state,
    };
  }
};

// <---FORMA MAS USADA DE CREAR UN REDUCER--->
const reducerSwitch = (state, action) => {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
        error: true,
        loading: false,
      };
    case 'CHECK':
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

// <---FORMA FAVORITA DE CREAR UN REDUCER
const reducerObject = (state) => ({
  'ERROR': {
    ...state,
    error: true,
    loading: false,
  },
  'CHECK': {
    ...state,
    loading: true,
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state)[action.type];
  } else {
    return state;
  }
};
// AQUI TERMINA--->