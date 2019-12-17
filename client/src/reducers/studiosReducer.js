function studiosReducer(state = { studios: [] }, action) {
  let idx;
  switch (action.type) {
    case "ADD_STUDIO": // do I put my fetch call inside each case and add it to state?
      return [...state, action.studio];

    case "REMOVE_STUDIO":
      idx = state.findIndex(studio => studio.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

export default studiosReducer;
