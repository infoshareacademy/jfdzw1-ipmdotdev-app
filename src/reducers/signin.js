// REDUCER DLA KOMPONENTU SignIn

const initState = {
  userLogged: false
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
