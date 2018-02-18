// REDUCER DLA KOMPONENTU SignIn

const initState = {
  userLogged: true
};

const signInReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, userLogged: true };
    default:
      return state;
  }
};

export { signInReducer };
