import {LOADING_IMAGE, MODIFIED} from './generalTypes';
 
export const loadingImages = (values) => {
    return {
        type: LOADING_IMAGE,
        payload: values
    }
}

 
export const setModified = (values) => {
    return {
        type: MODIFIED,
        payload: values
    }
}

