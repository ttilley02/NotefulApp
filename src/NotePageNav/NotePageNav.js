import React from "react";
import { Link } from "react-router-dom";

export default class NotePageNav extends React.Component {
  render() {
    //find the id of the note that matches the noteId from the url
    

    const selectedFolderId = this.props.notes.find(
      note => note.id === this.props.selected
    ).folderId;

    // find the folder with the id that matches 'selectedFolderId'
    const selectedFolder = this.props.folders.find(
      folder => folder.id === selectedFolderId
    );

    return (
      <div className="Sidebar">
        <Link className="goBack" to="/">
          Go Back
        </Link>
        <h2>Current Folder: {selectedFolder.name}</h2>
      </div>
    );
  }
}
