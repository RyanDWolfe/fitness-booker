function reservationsReducer(state = { all: [] }, action) {
  let idx;
  switch (action.type) {
    case "GET_RESERVATIONS":
      return { ...state, all: action.reservations };
    case "ADD_RESERVATION":
      return { ...state, all: state.all.concat(action.reservation) };

    case "REMOVE_RESERVATION":
      idx = state.findIndex(state => state.reservation.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

export default reservationsReducer;
