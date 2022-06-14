const InitialState = {
  items: [],
  loading: false,
  error: null
};

const currentReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "FETCH_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_POST_SUCSES":
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case "FETCH_POST_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default currentReducer;
