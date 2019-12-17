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

export const addStudio = studio => {
  return {
    type: "ADD_STUDIO",
    studio
  };
};

export const removeStudio = id => {
  return {
    type: "REMOVE_STUDIO",
    id
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