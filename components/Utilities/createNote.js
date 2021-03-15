import {EditorState} from 'draft-js';
import {nanoid} from "nanoid"

export default function createNote() {
    const newID = nanoid();
    return {id: newID, body: EditorState.createEmpty()}
  }