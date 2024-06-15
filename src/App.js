import "./App.css";
import AboutComponent from "./Components/About_Component";
import HomeComponent from "./Components/Home_Component";
import NavbarComponent from "./Components/Navbar_Component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoteState } from "./context/NoteContext";
import { AuthState } from "./context/Authentication_Context";
import AddNoteComponent from "./Components/AddNote_Component";
import SignUpComponent from "./Components/SignUp_Component";
import LogInComponent from "./Components/LogIn_Component";
import NotesComponent from "./Components/Notes_Component";

function App() {
  return (
    <>
      <NoteState>
        <AuthState>
          <BrowserRouter>
            <NavbarComponent />
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/About" element={<AboutComponent />} />
              <Route path="/AddNote" element={<AddNoteComponent />} />
              <Route path="/YourNote" element={<NotesComponent />} />
              <Route path="/LoginPage" element={<LogInComponent />} />
              <Route path="/SignupPage" element={<SignUpComponent />} />
            </Routes>
          </BrowserRouter>
        </AuthState>
      </NoteState>
    </>
  );
}

export default App;
