import React, { useState, useEffect, useRef } from "react";
import { StyledNote } from "./componentStyles";
import PinnedSVG from "../../styles/svg/pin.svg";
import {
  Editor,
  convertFromRaw,
  RichUtils,
  KeyBindingUtil,
  getDefaultKeyBinding,
  Modifier,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { connect } from "react-redux";
import { updateNote, addPinned , createStyle, deleteNote} from "../../store/notes/notesActions";

function Note({ noteID, editorState, ...props }) {
  let inputRef = useRef(null);
  function handleKeyCommand(command, editorState) {
    let newState = RichUtils.handleKeyCommand(editorState, command);

    if (command === "ordered-list-item") {
      newState = RichUtils.toggleBlockType(editorState, "ordered-list-item");
    }

    if (command === "unordered-list-item") {
      newState = RichUtils.toggleBlockType(editorState, "unordered-list-item");
    }

    if (newState) {
      props.updateNote({ id: noteID, body: newState });
      return "handled";
    }

    return "not-handled";
  }

  const keyBindingFn = (e) => {
    if (KeyBindingUtil.hasCommandModifier(e) && e.keyCode == 75) {
      return "ordered-list-item";
    }
    if (KeyBindingUtil.hasCommandModifier(e) && e.keyCode == 75) {
      return "unordered-list-item";
    }
    return getDefaultKeyBinding(e);
  };

  let [note, setNote] = useState({ title: "title", body: "body" });
  let [edit, setEdit] = useState(false);
  let [color, setColor] = useState("#c9c9c9");

  useEffect(() => {
    if (edit) {
      inputRef.current.focus();
    }
  }, [edit])
  
  
  useEffect(() => {
    //initiate as default color, or saved color
    let primaryColor = props.styles ? props.styles : "#c9c9c9"
    changeColor(primaryColor)
    //
  }, [])

  function changeColor(color) {
    setColor(color);
    props.createStyle({id: noteID, color})
  }

  return (
    <StyledNote color={color}>
      <header>
        {!edit ? (
          <h1 className="title" onClick={() => setEdit(!edit)}>
            {note.title}
          </h1>
        ) : (
          <input
            ref={inputRef}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            value={note.title}
          ></input>
        )}
        <button className="delete-button" onClick={() => props.deleteNote(noteID)}>
        ✖
        </button>
        <button className="edit-button" onClick={() => {noteID === props.pinned ?  props.addPinned(null) : props.addPinned(noteID)}}>
          Pin <PinnedSVG className="edit-svg"/>
        </button>
      </header>
      {props.pinned && props.pinned == noteID ?  (
        <p className="message" onClick={() => setEdit(!edit)}>
          {editorState.getCurrentContent().getPlainText("\u0001")}
        </p>
      ) : (
        <Editor
          editorState={editorState}
          placeholder="type here"
          onChange={(newState) =>
            props.updateNote({ id: noteID, body: newState })
          }
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={keyBindingFn}
        />
      )}
      <div className="action-footer">
      <div className="circle white" onClick={() => changeColor("#c9c9c9")}></div>
        <div className="circle red" onClick={() => changeColor("#f06960")}></div>
        <div
          className="circle yellow"
          onClick={() => changeColor("#fff29c")}
        ></div>
        <div className="circle green" onClick={() => changeColor("#5fed8c")}></div>
        <div
          className="circle purple"
          onClick={() => changeColor("#c953ed")}
        ></div>
      </div>
      {props.pinned == noteID && <div className="pinned-blocker">   "{note.title}" <button onClick={() => {noteID === props.pinned ?  props.addPinned(null) : props.addPinned(noteID)}}>Unpin</button></div> }
    </StyledNote>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps.noteID, "asdff");
  return {
    editorState: state.notes[ownProps.noteID],
    pinned: state.notes.pinned,
    styles: state.notes.styles[ownProps.noteID]
  };
};

//step 2
const mapDispatchToProps = (dispatch) => {
  return {
    //takes an object {id,editorState}
    updateNote: (val) => dispatch(updateNote(val)),
    addPinned: (val) => dispatch(addPinned(val)),
    createStyle: (val) => dispatch(createStyle(val)),
    deleteNote: (val) => dispatch(deleteNote(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
