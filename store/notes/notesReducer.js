import {ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, ADD_PINNED, CREATE_STYLE, RESIZE_PINNED} from './notesTypes';
 
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
noteIDs: [], //[noteID array]
pinned: null, // {"noteID"}
styles: {}, // {NoteID: "colorHextcode"}
pinnedSize: "small", //small, medium, large
//New EditorState appends on this level
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: {
            return {...state, ...action.payload};
        }
        case ADD_NOTE: {
            return {...state, [action.payload.id]: action.payload.body, noteIDs: [...state.noteIDs, action.payload.id]}
        }
        case UPDATE_NOTE: {
            return {...state, [action.payload.id]: action.payload.body}
        }
        case DELETE_NOTE: {
            const noteID = action.payload;
            let noteIDs = state.noteIDs.filter((item, index) => item !== noteID);
            let pinned = state.pinned === noteID ? null : state.pinned
            let {[noteID]: removed, ...styles} = state.styles;
            let {[noteID]: removed2, ...newState} = state;
            console.log(noteIDs, pinned, styles)
            return {...newState, noteIDs, pinned, styles}
        }
        case ADD_PINNED: {
            return {...state, pinned: action.payload}
        }
        case CREATE_STYLE: {
            return {...state, styles: {...state.styles, [action.payload.id]: action.payload.color }}
        }
        case RESIZE_PINNED: {
            return {...state, pinnedSize: action.payload}
        }
        default: {
            return state
        }
    }
}