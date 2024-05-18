import { NoteContext } from "../context/NoteContext";
import React, { useContext, useRef, useState, useEffect } from "react";
import EditIcon from "../SVGs/pencil-solid.svg";
import DeleteIcon from "../SVGs/trash-can-arrow-up-solid.svg";

function Notes_Component() {
  let { Notes, DeleteNote, EditNote } = useContext(NoteContext);
  const ModalReference = useRef(null);
  const { GetNotes } = useContext(NoteContext);
  const [NoteId, setNoteID] = useState({
    NoteId: "",
  });

  const UpdateNote = async () => {
    // console.log(
    //   document.querySelector("#NoteTitle").value,
    //   document.querySelector("#NoteDesc").value
    // );

    EditNote(
      NoteId.NoteId,
      document.querySelector("#NoteTitle").value,
      document.querySelector("#NoteDesc").value
    );
  };
  useEffect(() => {
    GetNotes();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="my-2">
        <button
          ref={ModalReference}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Note Edit Modal
        </button>
        <div className="modal" tabIndex="-1" id="exampleModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Note</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="NoteTitle" className="form-label">
                    Note Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="NoteTitle"
                    // onChange={HandleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="NoteDesc" className="form-label">
                    Note Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control form-control-lg"
                    id="NoteDesc"
                    // onChange={HandleOnChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={UpdateNote}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="custom-design-1">Your Notes</h1>

        <div className="row gap-3 my-4 custom-design-1 justify-content-center">
          {Notes.map((Note) => {
            return (
              <div className="col-md-5 " key={Note._id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{Note.Title}</h5>
                    <p className="card-text">{Note.Description}</p>
                    <img
                      className="mx-2 cursor-pointer"
                      src={EditIcon}
                      alt=""
                      style={{ height: "20px", width: "20px" }}
                      onClick={() => {
                        setNoteID({
                          NoteId: Note._id,
                        });
                        document.querySelector("#NoteTitle").value = Note.Title;
                        document.querySelector("#NoteDesc").value =
                          Note.Description;
                        ModalReference.current.click();
                      }}
                    />
                    <img
                      className="mx-2 cursor-pointer"
                      src={DeleteIcon}
                      alt=""
                      style={{ height: "20px", width: "20px" }}
                      onClick={() => {
                        DeleteNote(Note._id);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Notes_Component;
