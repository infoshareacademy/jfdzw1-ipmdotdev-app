// REDUCER DLA KOMPONENTU AddChallenge

const initState = {
  addChallengeStatus: {
    pending: false,
    success: false,
    hasError: false
  },
  challenges: []
};

const challengesReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CHALLENGE_PENDING":
      return {
        ...state,
        addChallengeStatus: { ...addChallangeStatus, pending: true }
      };
    case "ADD_CHALLENGE_SUCCESS":
      return {
        ...state,
        addChallengeStatus: {
          ...addChallangeStatus,
          pending: false,
          success: true
        }
      };
    case "ADD_CHALLENGE_ERROR":
      return {
        ...state,
        addChallengeStatus: {
          ...addChallangeStatus,
          pending: false,
          hasError: true
        }
      };
    default:
      return state;
  }
};

export { challengesReducer };
