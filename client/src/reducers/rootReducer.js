import { combineReducers } from "redux";
import studiosReducer from "./studiosReducer";
import classesReducer from "./classesReducer";
import reservationsReducer from "./reservationsReducer";

const rootReducer = combineReducers({
  studios: studiosReducer,
  classes: classesReducer,
  reservations: reservationsReducer
});

export default rootReducer;
