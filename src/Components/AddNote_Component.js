import React, { useState, useContext } from "react";
import AlertComponent from "../Components/Alert_Component";
import { NoteContext } from "../context/NoteContext";
function AddNote_Component() {
  const { AddNote } = useContext(NoteContext);
  const [Message, setMessage] = useState("");
  const HandleClick = (Event) => {
    Event.preventDefault();
    if (document.querySelector("#NoteTitle").value === "") {
      document.querySelector("#Alert").hidden = false;
      setMessage("Please Enter Note Title");
      setTimeout(() => {
        document.querySelector("#Alert").hidden = true;
      }, 1000);
    } else if (document.querySelector("#NoteDesc").value === "") {
      document.querySelector("#Alert").hidden = false;
      setMessage("Please Enter Note Description");
      setTimeout(() => {
        document.querySelector("#Alert").hidden = true;
      }, 1000);
    } else {
      AddNote(
        document.querySelector("#NoteTitle").value,
        document.querySelector("#NoteDesc").value
      );
      document.querySelector("#Alert").hidden = false;
      setMessage("Note Added");
      setTimeout(() => {
        document.querySelector("#Alert").hidden = true;
      }, 1000);
    }
  };
  return (
    <>
      <AlertComponent Alert_Message={Message} />
      <div className="d-flex justify-content-center flex-column container col-md-5 my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="NoteTitle" className="form-label">
              Note Title
            </label>
            <input type="text" className="form-control" id="NoteTitle" />
          </div>
          <div className="mb-3">
            <label htmlFor="NoteDesc" className="form-label">
              Note Description
            </label>
            <textarea
              type="text"
              className="form-control form-control-lg"
              id="NoteDesc"
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={HandleClick}
            >
              Add Note
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddNote_Component;
