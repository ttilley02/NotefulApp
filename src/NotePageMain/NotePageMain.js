import React from "react";
import Note from "../Note/Note";
import {Route} from "react-router-dom"

export default class NotePageMain extends React.Component {

  render() {
    // Find the note that has the same id from the url (:noteId)
    let selectedNote = this.props.notes.find(
      note => note.id === this.props.selected
    );
    return (
      <div className="Main noteContent">
        <h2>Notes</h2>
        <Route
          render= {({history})=> (
            // 'notes' prop will be entire notes array from state
          <Note
          id={selectedNote.id}
          folderId={selectedNote.folderId}
          name={selectedNote.name}
          modified={selectedNote.modified}
          history={history}
          />
          )}
        />
        <p>{selectedNote.content}</p>
      </div>
    );
  }
}
