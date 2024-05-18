import { createContext, useState } from "react";
const NoteContext = createContext();

function NoteState(props) {
  const [Notes, setNotes] = useState([]);
  let AddNote = async (Note_Title, Note_Description) => {
    await fetch(process.env.REACT_APP_ADDNOTE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("Auth-Token"),
      },
      body: JSON.stringify({
        Title: Note_Title,
        Description: Note_Description,
      }),
    });
    setNotes(
      Notes.concat([{ Title: Note_Title, Description: Note_Description }])
    );
  };
  let GetNotes = async () => {
    let Result = await fetch(process.env.REACT_APP_FETCHNOTE_URL, {
      headers: {
        Token: localStorage.getItem("Auth-Token"),
      },
    });
    let Final_Response = await Result.json();
    setNotes(Final_Response);
  };

  async function DeleteNote(NoteId) {
    await fetch(`${process.env.REACT_APP_DELETENOTE_URL}${NoteId}`, {
      method: "DELETE",
      headers: {
        Token: localStorage.getItem("Auth-Token"),
      },
    });
    setNotes(
      Notes.filter((Note) => {
        return Note._id !== NoteId;
      })
    );
    // let Final_Response = await Result.json();
    // setNotes(Final_Response);
  }

  async function EditNote(NoteId, Title, Description) {
    let Temp_Notes = Notes;
    for (let index = 0; index < Notes.length; index++) {
      if (Temp_Notes[index]._id === NoteId) {
        // console.log("Hello");
        Temp_Notes[index].Title = Title;
        Temp_Notes[index].Description = Description;
        break;
      }
    }
    // console.log(Temp_Notes);
    setNotes([...Temp_Notes]);
    // setNotes(Temp_Notes_2);
    // console.log([...Temp_Notes]);
    // setNotes(Temp_Notes);
    // let BodyObj = { Title, Description };
    // console.log(JSON.stringify(BodyObj));
    await fetch(`${process.env.REACT_APP_UPDATENOTE_URL}${NoteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Token: localStorage.getItem("Auth-Token"),
      },
      body: JSON.stringify({ Title, Description }),
    });
    // result = await result.json();
    // console.log(result);
  }
  return (
    <NoteContext.Provider
      value={{ Notes, GetNotes, AddNote, DeleteNote, EditNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}
export { NoteState, NoteContext };
