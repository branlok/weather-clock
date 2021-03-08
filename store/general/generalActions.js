import {LOADING_IMAGE} from './generalTypes';
 
export const loadingImages = (values) => {
    console.log("yepe")
    return {
        type: LOADING_IMAGE,
        payload: values
    }
}