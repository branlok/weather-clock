import { combineReducers } from "redux";
import { generalReducer } from "./general/generalReducer.js";
import { settingsReducer } from "./settings/settingsReducer.js";

const rootReducer = combineReducers({
  settings: settingsReducer,
  general: generalReducer
});

export default rootReducer;

//trickery with JS, annoymous function, return from {} or (), reference functions


//settings