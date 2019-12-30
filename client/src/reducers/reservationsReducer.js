function reservationsReducer(state = { all: [] }, action) {
  let idx;
  switch (action.type) {
    case "GET_RESERVATIONS":
      return { ...state, all: action.reservations };
    case "ADD_RESERVATION":
      return { ...state, all: state.all.concat(action.reservation) };

    case "CANCEL_RESERVATION": // make this a change status
      // idx = state.findIndex(state => state.reservation.id === action.id);
      return state;

    default:
      return state;
  }
}

export default reservationsReducer;
