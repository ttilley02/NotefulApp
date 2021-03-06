import React from "react";
import ValidationError from "../ValidationError";
import "../App.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class AddFolder extends React.Component {
  validateFolderName() {
    const name = this.props.state.folderName.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length > 25) {
      return "Name must be less than 25 characters long";
    }
  }

  handleSubmitFolder = event => {
    event.preventDefault();

    let folderInput = {
      name: this.props.state.folderName.value
    };

    fetch(`http://localhost:9090/folders/`, {
      method: "POST",
      body: JSON.stringify(folderInput),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error;
          });
        }
        return res.json();
      })
      .then(folder => {
        this.props.addFolder(folder);
        this.props.clearFolderName();
        this.props.history.push("/");
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="addFolder">
        <form onSubmit={e => this.handleSubmitFolder(e)}>
          <h2>Add Folder</h2>
          <div className="folder__hint" />
          <div className="form-group">
            <label htmlFor="name" />
            <input
              type="text"
              className="folderNote__control"
              name="name"
              id="name"
              placeholder="Folder Name..."
              value={this.props.state.folderName.value}
              onChange={this.props.updateAddFolderName}
              required
            />
            {this.props.state.folderName.touched && (
              <ValidationError message={this.validateFolderName()} />
            )}
          </div>
          <br />
          <button
            className="submitButton"
            type="submit"
            disabled={this.validateFolderName()}
          >
            Submit
          </button>
        </form>
        <br />
        <Link className="goBack" to="/">
          Go Back
        </Link>
      </div>
    );
  }
}

AddFolder.propTypes = {
  updateAddFolderName: PropTypes.func,
  state: PropTypes.object,
  clearFolderName: PropTypes.func
};
