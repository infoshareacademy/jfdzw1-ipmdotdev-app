// REDUCER DLA KOMPONENTU AddChallenge

const initState = {
  addChallengeStatus: {
    pending: false,
    success: false,
    hasError: false
  },
  getAllChallengesStatus: {
    pending: false,
    success: false,
    hasError: false
  },
  allChallenges: null
};

const challengesReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CHALLENGE_PENDING":
      return {
        ...state,
        addChallengeStatus: { ...state.addChallengeStatus, pending: true }
      };
    case "ADD_CHALLENGE_SUCCESS":
      return {
        ...state,
        addChallengeStatus: {
          ...state.addChallengeStatus,
          pending: false,
          success: true
        }
      };
    case "ADD_CHALLENGE_ERROR":
      return {
        ...state,
        addChallengeStatus: {
          ...state.addChallengeStatus,
          pending: false,
          hasError: true
        }
      };
    case "GET_ALL_CHALLENGES_PENDING":
      return {
        ...state,
        getAllChallengesStatus: {
          ...state.getAllChallengesStatus,
          pending: true
        }
      }
    case "GET_ALL_CHALLENGES_SUCCESS":
      return {
        ...state,
        getAllChallengesStatus: {
          ...state.getAllChallengesStatus,
          pending: false,
          success: true
        },
        allChallenges: action.allChallenges
      }
    case "GET_ALL_CHALLENGES_ERROR":
      return {
        ...state,
        getAllChallengesStatus: {
          ...state.getAllChallengesStatus,
          pending: false,
          hasError: true
        }
      }
    default:
      return state;
  }
};

export { challengesReducer };
