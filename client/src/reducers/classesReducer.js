function classesReducer(state = { all: [] }, action) {
  let idx;
  switch (action.type) {
    case "GET_CLASSES":
      return { ...state, all: action.classes };
    case "ADD_CLASS":
      return { ...state, all: state.all.concat(action.studio_class) };
    case "REMOVE_CLASS":
      idx = state.findIndex(state => state.studio_class.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

export default classesReducer;
