import React, { useState, useEffect } from "react";
import Note from "./Note";
import {addNote} from '../../store/notes/notesActions';
import { connect } from "react-redux";
import { StyledContainer } from "./componentStyles";
import createNote from '../Utilities/createNote';

function Notes(props) {
  const [open, setOpen] = useState(false);

  
  useEffect(() => {
    if (props.noteIDs.length == 0) {
      props.addNote(createNote())
    }
  }, [props.noteIDs])


  return (
    <StyledContainer open={open}>
      <div className="scrollContainer">
        <button className="toggle-button" onClick={() => setOpen(!open)}>
          {open ? "Hide" : "Show Notes"}
        </button>
        {open && <button className="add-button" onClick={() => props.addNote(createNote())}>
          New
        </button>}
        { [...props.noteIDs].reverse().map(item => <Note key={item} noteID={item}/>)}
      </div>
    </StyledContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    noteIDs: state.notes.noteIDs,
  };
};

//step 2
const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (val) => dispatch(addNote(val)), //takes an object {id,editorState}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
