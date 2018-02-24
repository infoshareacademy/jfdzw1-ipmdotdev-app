// REDUCER DLA KOMPONENTU SignIn

const initState = {
  pending: false,
  success: false,
  hasError: false,
};

const signUpReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_PENDING":
      return { ...state, pending: true };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        pending: false,
        success: true
      };
    case "SIGNUP_ERROR":
      return { ...state, pending: false, hasError: true };
    default:
      return state;
  }
};

export { signUpReducer };
