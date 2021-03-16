import {
  ADJUST_PRESENCE_DURATION,
  ADJUST_DELAY_DURATION,
  ADJUST_BRIGHTNESS_DURATION,
  SET_NUMBER_OF_IMAGES,
  SET_RELEVANCE,
  SET_IMAGE_QUALITY,
  SET_KEYWORD,
  SET_QUEUE,
  COMMIT_CHANGES,
  SET_24HR,
  SET_SECONDS,
  SET_NOTES,
  SET_WEATHER,
  SET_COORDINATES,
  RESET,
} from "./settingsTypes";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  //ANIMATION
  presence: 10000, //ms
  delay: 3000, //ms
  brightness: 10,
  //IMAGE FETCH PARAMS
  relevance: "time", //weather, time, topic /Read ONLY
  imageQuality: "optimized", //optimized, /Read ONLY
  numOfImages: 10, ///Read ONLY
  keyword: "", //Read ONLY
  //TIME
  format24Hr: false,
  secondsVisible: true,
  //WIDGETS
  weather: false, //requires geolocation
  notes: true,
  //PERMISSIONS
  geolocation: false,
  latitude: "",
  longitude: "",
  queueChanges: {
    relevance: "time",
    imageQuality: "optimized",
    numOfImages: 10,
    keyword: "",
  },
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case ADJUST_PRESENCE_DURATION: {
      return { ...state, presence: action.payload };
    }
    case ADJUST_DELAY_DURATION: {
      return { ...state, delay: action.payload };
    }
    case ADJUST_BRIGHTNESS_DURATION: {
      return { ...state, brightness: action.payload };
    }
    case SET_RELEVANCE: {
      return { ...state, relevance: action.payload };
    }
    case SET_IMAGE_QUALITY: {
      return { ...state, imageQuality: action.payload };
    }
    case SET_NUMBER_OF_IMAGES: {
      return { ...state, numOfImages: action.payload };
    }
    case SET_KEYWORD: {
      return { ...state, keyword: action.payload };
    }
    case SET_QUEUE: {
      return {
        ...state,
        queueChanges: { ...state.queueChanges, ...action.payload },
      };
    }
    case COMMIT_CHANGES: {
      return {
        ...state,
        ...action.payload,
      };
    }
    //UI - INTERFACE PEREFERENCES
    case SET_24HR: {
      return { ...state, format24Hr: action.payload };
    }
    case SET_SECONDS: {
      return { ...state, secondsVisible: action.payload };
    }
    //WIDGET TOGGLES
    case SET_NOTES: {
        return {...state, notes: action.payload}
    }
    case SET_WEATHER: {
        return {...state, weather: action.payload}
    }
    case SET_COORDINATES: {
        return {...state, ...action.payload}
    }
    case RESET: {
      return initialState
    }
    default: {
      return state;
    }
  }
};
