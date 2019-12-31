function reservationsReducer(state = { all: [] }, action) {
  switch (action.type) {
    case "GET_RESERVATIONS":
      return { ...state, all: action.reservations };
    case "ADD_RESERVATION":
      return { ...state, all: state.all.concat(action.reservation) };

    case "CANCEL_RESERVATION":
      return state;

    default:
      return state;
  }
}

export default reservationsReducer;
