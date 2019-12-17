export default function reducer(
  state = {
    studios: [],
    classes: [],
    reservations: []
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "ADD_STUDIO":
      console.log("Current state.items length %s", state.items.length);
      console.log("Updating state.items length to %s", state.items.length + 1);
      return {
        ...state,
        studios: state.studios.concat(state.studios.length + 1)
      };

    default:
      console.log("Initial state.items length: %s", state.studios.length);
      return state;
  }
}
