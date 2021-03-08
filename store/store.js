import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import {createWrapper} from 'next-redux-wrapper';


const store = (context) => createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export const wrapper = createWrapper(store, {debug: true});

export default store;
