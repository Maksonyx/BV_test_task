const defaultState = {
  sports: [],
  error: '',
  isLoading: false,
  isLoggedOut: true
};

const GET_SPORTS_DATA_SUCCESS = 'GET_SPORTS_DATA_SUCCESS';
const GET_SPORTS_DATA_ERROR = 'GET_SPORTS_DATA_ERROR';
const IS_LOADING = 'IS_LOADING';
const IS_LOGGED_OUT = 'IS_LOGGED_OUT';

export const sportsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SPORTS_DATA_SUCCESS:
      return { ...state, sports: [...action.payload] };
    case GET_SPORTS_DATA_ERROR:
      return { ...state, error: action.payload };
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    case IS_LOGGED_OUT:
      return { ...state, sports: [], error: '', isLoading: false, isLoggedOut: true };

    default:
      return state;
  }
};

export const getSportsAction = (payload) => ({
  type: GET_SPORTS_DATA_SUCCESS,
  payload,
});
export const getSportsErrorAction = (payload) => ({
  type: GET_SPORTS_DATA_ERROR,
  payload,
});
export const getSportsIsLoadingAction = (payload) => ({
  type: IS_LOADING,
  payload,
});
export const isLoggedOutAction = (payload) => ({
  type: IS_LOGGED_OUT,
  payload,
});