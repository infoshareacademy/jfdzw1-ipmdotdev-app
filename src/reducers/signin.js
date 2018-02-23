// REDUCER DLA KOMPONENTU SignIn

const initState = {
  pending: false,
  hasError: false,
  userLogged: false,
  userData: []
};

const signInReducer = (state = initState, action) => {
  switch (action.type) {
    case "PENDING":
      return { ...state, pending: true };
    case "SUCCESS":
      return {
        ...state,
        pending: false,
        userLogged: true,
        userData: action.userData
      };
    case "ERROR":
      return { ...state, pending: false, hasError: true };
    default:
      return state;
  }
};

export { signInReducer };
