import {ADJUST_DELAY_DURATION, ADJUST_PRESENCE_DURATION, ADJUST_BRIGHTNESS_DURATION} from './settingsTypes';
 
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
