import React, {useEffect, useRef} from "react";
import {
  Editor,
  RichUtils,
  KeyBindingUtil,
  getDefaultKeyBinding,
} from "draft-js";
import { connect } from "react-redux";
import { StyledPinnedNote } from "./componentStyles";
import { resizePinned, updateNote } from "../../store/notes/notesActions";

function PinnedNote({ pinned, editorState, updateNote, pinnedSize, color, ...props }) {

    const pinnedRef = useRef(null)
    useEffect(() => {
        pinnedRef.current.focus();
    }, [pinned])

  function handleKeyCommand(command, editorState) {
    let newState = RichUtils.handleKeyCommand(editorState, command);

    if (command === "ordered-list-item") {
      newState = RichUtils.toggleBlockType(editorState, "ordered-list-item");
    }

    if (command === "unordered-list-item") {
      newState = RichUtils.toggleBlockType(editorState, "unordered-list-item");
    }

    if (newState) {
      updateNote({ id: pinned, body: newState });
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

  if (pinned == null) return null; //for useTransition incase conflict of double editor

  return (
    <StyledPinnedNote color={color} pinnedSize={pinnedSize}>
      <Editor
        editorState={editorState}
        onChange={(newState) => updateNote({ id: pinned, body: newState })}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keyBindingFn}
        ref={pinnedRef}
      ></Editor>
      <div className="resize-action-container">
          <button onClick={() => props.resizePinned("small")}>S</button>
          <button onClick={() => props.resizePinned("medium")}>M</button>
          <button onClick={() => props.resizePinned("large")}>L</button>
      </div>
    </StyledPinnedNote>
  );
}

const mapStateToProps = (state) => {
  return {
    editorState: state.notes[state.notes.pinned],
    pinned: state.notes.pinned,
    color: state.notes.styles[state.notes.pinned],
    pinnedSize: state.notes.pinnedSize,
  };
};

//step 2
const mapDispatchToProps = (dispatch) => {
  return {
    //takes an object {id,editorState}
    updateNote: (val) => dispatch(updateNote(val)),
    resizePinned: (val) => dispatch(resizePinned(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinnedNote);
