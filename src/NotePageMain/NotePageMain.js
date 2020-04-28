import React from "react";
import Note from "../Note/Note";
import NoteContext from "../NoteContext";

export default class NotePageMain extends React.Component {
  static contextType = NoteContext;

  

  render() {
    console.log("uoiu  "+this.props.notes)
    // Find the note that has the same id from the url (:noteId)
    let selectedNote = this.props.notes.find(
      note => note.id === this.props.selected
    );
    return (
      <div className="Main noteContent">
        <Note
          id={selectedNote.id}
          folderId={selectedNote.folderId}
          name={selectedNote.name}
          modified={selectedNote.modified}
          history={this.props.history}
        />
        <p>{selectedNote.content}</p>
      </div>
    );
  }
}
