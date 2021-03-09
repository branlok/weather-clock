import {ADJUST_PRESENCE_DURATION, ADJUST_DELAY_DURATION, ADJUST_BRIGHTNESS_DURATION} from './settingsTypes';
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    presence: 5,
    delay: 2,
    brightness: 80,
}

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: {
            return {...state, ...action.payload};
        }
        case ADJUST_PRESENCE_DURATION: {
            return {...state, presence: action.payload}
        }
        case ADJUST_DELAY_DURATION: {
            return {...state, delay: action.payload}
        }
        case ADJUST_BRIGHTNESS_DURATION: {
            return {...state, brightness: action.payload}
        }
        default: {
            return state
        }
    }
}