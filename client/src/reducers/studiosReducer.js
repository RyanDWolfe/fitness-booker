function studiosReducer(state = { all: [] }, action) {
  let idx;
  switch (action.type) {
    case "GET_STUDIOS":
      return { ...state, all: action.studios };
    case "ADD_STUDIO":
      return { ...state, all: state.all.concat(action.studio) };
    case "REMOVE_STUDIO":
      idx = state.findIndex(studio => studio.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

export default studiosReducer;
