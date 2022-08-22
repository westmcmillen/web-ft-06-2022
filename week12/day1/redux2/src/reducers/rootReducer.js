const initialState = {
  search: "",
  weather: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_WEATHER":
      return { ...state, weather: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
