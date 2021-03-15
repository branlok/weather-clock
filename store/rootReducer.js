import { combineReducers } from "redux";
import { generalReducer } from "./general/generalReducer.js";
import { settingsReducer } from "./settings/settingsReducer.js";
import { notesReducer } from "./notes/notesReducer.js";

const rootReducer = combineReducers({
  settings: settingsReducer,
  general: generalReducer,
  notes: notesReducer,
});

export default rootReducer;

//trickery with JS, annoymous function, return from {} or (), reference functions


//settings