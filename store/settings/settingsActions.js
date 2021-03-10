import {ADJUST_DELAY_DURATION, ADJUST_PRESENCE_DURATION, ADJUST_BRIGHTNESS_DURATION, SET_NUMBER_OF_IMAGES, SET_IMAGE_QUALITY, SET_RELEVANCE, SET_KEYWORD} from './settingsTypes';
 
//Animation
export const adjustDelayDuration = (values) => {
    return {
        type: ADJUST_DELAY_DURATION,
        payload: values
    }
}

export const adjustPresenceDuration = (values) => {
    return {
        type: ADJUST_PRESENCE_DURATION,
        payload: values
    }
}

export const adjustBrightnessDuration = (values) => {
    return {
        type: ADJUST_BRIGHTNESS_DURATION,
        payload: values
    }
}

//Images
export const setRelevance = (values) => {
    return {
        type: SET_RELEVANCE,
        payload: values
    }
}

export const setKeyword = (values) => {
    return {
        type: SET_KEYWORD,
        payload: values
    }
}


export const setImageQuality = (values) => {
    return {
        type: SET_IMAGE_QUALITY,
        payload: values
    }
}


export const setNumberOfImages = (values) => {
    return {
        type: SET_NUMBER_OF_IMAGES,
        payload: values
    }
}


