// Studio Actions

export const getStudios = () => {
  return async dispatch => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/studios");
      const data = await response.json();
      dispatch({
        type: "GET_STUDIOS",
        studios: data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addStudio = studioData => {
  return async dispatch => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/studios", {
        method: "POST",
        body: JSON.stringify(studioData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
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
  return async dispatch => {
    // need to pass in id...
    const id = 10;
    try {
      const response = await fetch("http://localhost:3001/api/v1/studios/10", {
        method: "DELETE",
        body: JSON.stringify(id),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      dispatch({
        type: "REMOVE_STUDIO",
        studio: data
      });
    } catch (err) {
      console.log(err);
    }
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
