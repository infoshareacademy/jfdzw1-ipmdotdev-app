// REDUCER DLA KOMPONENTU SignIn

const initState = {
  pending: false,
  hasError: false,
};

const signUpReducer = (state = initState, action) => {
  switch (action.type) {
    case "PENDING":
      return { ...state, pending: true };
    case "SUCCESS":
      return {
        ...state,
        pending: false,
      };
    case "ERROR":
      return { ...state, pending: false, hasError: true };
    default:
      return state;
  }
};

export { signUpReducer };
