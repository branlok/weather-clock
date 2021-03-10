import {LOADING_IMAGE,MODIFIED} from './generalTypes';
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    loadingImages: true,
    modified: true,
}

export const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: {
            return {...state, ...action.payload};
        }
        case LOADING_IMAGE: {
            return {...state, loadingImages: action.payload}
        }
        case MODIFIED: {
            return {...state, modified: action.payload}
        }
        default: {
            return state
        }
    }
}