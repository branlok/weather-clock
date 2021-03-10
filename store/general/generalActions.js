import {LOADING_IMAGE, MODIFIED} from './generalTypes';
 
export const loadingImages = (values) => {
    console.log("yepe")
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