import React from "react";
import { Link } from "react-router-dom";


export default class NotePageNav extends React.Component {
  

  render() {
    console.log("qq"+this.props.state)
    console.log("ewew"+this.props.folders)
    console.log("Asfsafsd"+this.props.notes)

    //find the id of the note that matches the noteId from the url
    let newA = this.props.notes
    console.log(newA)
    const selectedFolderId = this.props.notes.find(
      note => note.id === this.props.selected
    ).folderId;

    // find the folder with the id that matches 'selectedFolderId'
    const selectedFolder = this.props.folders.find(
      folder => folder.id === selectedFolderId
    );
    console.log(selectedFolder);

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
