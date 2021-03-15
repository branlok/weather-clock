import {ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, ADD_PINNED, CREATE_STYLE , RESIZE_PINNED} from './notesTypes';
 
 
export const addNote = (values) => {
    console.log(values);
    return {
        type: ADD_NOTE,
        payload: values
    }
}

export const updateNote = (values) => {
    console.log(values, "read me");
    return {
        type: UPDATE_NOTE,
        payload: values
    }
}

export const deleteNote = (values) => {
    return {
        type: DELETE_NOTE,
        payload: values
    }
}

export const addPinned = (values) => {
    return {
        type: ADD_PINNED,
        payload: values
    }
}

export const createStyle = (values) => {
    return {
        type: CREATE_STYLE,
        payload: values
    }
}

export const resizePinned = (values) => {
    return {
        type: RESIZE_PINNED,
        payload: values,
    }
}