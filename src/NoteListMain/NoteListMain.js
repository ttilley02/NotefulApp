import React from "react";
import PropTypes from "prop-types";
import Note from "../Note/Note";
import { Route, Link } from "react-router-dom";
import NoteContext from "../NoteContext";
import plus from "./plus.png";

export default class NoteListMain extends React.Component {
  static contextType = NoteContext;

  render() {
    console.log(this.props.notes)
    return (
      // <NoteContext.Provider value={contextValue}>
      <div className="Main">
       
        <ul>
          {this.props.notes.map(note => {
            return (
              <Route
                render={({ history }) => (
                  // 'notes' prop will be entire notes array from state
                  <Note
                    history={history}
                    modified={note.modified}
                    key={note.id}
                    id={note.id}
                    name={note.name}
                  />
                )}
              />
            );
          })}
        </ul>
        <Link className="addButton" to="/AddNote">
          <img className="plusIcon" src={plus} alt="Add a note" />
        </Link>
      </div>
      // </NoteContext.Provider>
    );
  }
}

NoteListMain.defaultProps = {
  notes: []
};

NoteListMain.propTypes = {
  notes: PropTypes.object.isRequired
};
