// Studio Actions

export const getStudios = () => {
  return async dispatch => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/studios");
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "GET_STUDIOS",
        studios: data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addStudio = () => {
  // pass in new studio data
  return async dispatch => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/studios"); //put request
      const data = await response.json(); // might not need to return anything
      console.log(data);
      dispatch({
        type: "ADD_STUDIO",
        studio: data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeStudio = id => {
  return {
    type: "REMOVE_STUDIO",
    id
  };
};

// Classes Actions

export const getClasses = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/studio_classes"
      );
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "GET_CLASSES",
        classes: data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addClass = studio_class => {
  return {
    type: "ADD_CLASS",
    studio_class
  };
};

export const removeClass = id => {
  return {
    type: "REMOVE_CLASS",
    id
  };
};

// Reservations Actions

export const getReservations = () => {
  return async dispatch => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/reservations");
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "GET_RESERVATIONS",
        reservations: data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addReservation = reservation => {
  return {
    type: "ADD_RESERVATION",
    reservation
  };
};

export const removeReservation = id => {
  return {
    type: "REMOVE_RESERVATION",
    id
  };
};
