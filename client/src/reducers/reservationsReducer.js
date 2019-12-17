function reservationsReducer(state = { reservations: [] }, action) {
  let idx;
  switch (action.type) {
    case "ADD_RESERVATION":
      return [...state, action.reservation];

    case "REMOVE_RESERVATION":
      idx = state.findIndex(reservation => reservation.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

export default reservationsReducer;
