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
} from "./settingsTypes";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  presence: 4,
  delay: 8,
  brightness: 100,
  relevance: "weather", //time, topic /Read ONLY
  imageQuality: "optimized", //optimized, /Read ONLY
  numOfImages: 10, ///Read ONLY
  keyword: "", //Read ONLY
  queueChanges: {
    relevance: "weather",
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
            ...state, ...action.payload
        }
    }
    default: {
      return state;
    }
  }
};
