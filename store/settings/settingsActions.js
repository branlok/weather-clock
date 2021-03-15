import {
  ADJUST_DELAY_DURATION,
  ADJUST_PRESENCE_DURATION,
  ADJUST_BRIGHTNESS_DURATION,
  SET_NUMBER_OF_IMAGES,
  SET_IMAGE_QUALITY,
  SET_RELEVANCE,
  SET_KEYWORD,
  SET_QUEUE,
  COMMIT_CHANGES,
  SET_24HR,
  SET_SECONDS,
  SET_NOTES,
  SET_WEATHER,
  SET_COORDINATES
} from "./settingsTypes";

//Animation
export const adjustDelayDuration = (values) => {
  return {
    type: ADJUST_DELAY_DURATION,
    payload: values,
  };
};

export const adjustPresenceDuration = (values) => {
  return {
    type: ADJUST_PRESENCE_DURATION,
    payload: values,
  };
};

export const adjustBrightnessDuration = (values) => {
  return {
    type: ADJUST_BRIGHTNESS_DURATION,
    payload: values,
  };
};

//Images
export const setRelevance = (values) => {
  return {
    type: SET_RELEVANCE,
    payload: values,
  };
};

export const setKeyword = (values) => {
  return {
    type: SET_KEYWORD,
    payload: values,
  };
};

export const setImageQuality = (values) => {
  return {
    type: SET_IMAGE_QUALITY,
    payload: values,
  };
};

export const setNumberOfImages = (values) => {
  return {
    type: SET_NUMBER_OF_IMAGES,
    payload: values,
  };
};

export const setQueue = (type, values) => {
  return {
    type: SET_QUEUE,
    payload: { [type]: values },
  };
};

export const setCommit = (values) => {
  //accepts an object only {}

  return {
    type: COMMIT_CHANGES,
    payload: values,
  };
};

export const setFormat24 = (values) => {
  return {
    type: SET_24HR,
    payload: values,
  };
};

export const setSeconds = (values) => {
  return {
    type: SET_SECONDS,
    payload: values,
  };
};

export const setNotes = (values) => {
  return {
    type: SET_NOTES,
    payload: values,
  };
};

export const setWeather = (values) => {
  return {
    type: SET_WEATHER,
    payload: values,
  };
};

export const setCoordinates = (latitude, longitude) => {
    return {
        type: SET_COORDINATES,
        payload: {latitude, longitude}
    }
}