import NotesComponent from "./Notes_Component";
import { useNavigate } from "react-router-dom";
// import { config } from "dotenv";
import { useEffect } from "react";
import LogInComponent from "./LogIn_Component";
function Home_Component() {
  let Navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("Auth-Token") === undefined ||
      localStorage.getItem("Auth-Token") === null
    ) {
      Navigate("/LoginPage");
    }
    // eslint-disable-next-line
  }, []);

  // console.log(process.env.REACT_APP_Auth_Token);
  return (
    <>
      <div className="container my-3">
        <h1 className="custom-design-1">Welcome To My Notebook</h1>
        {localStorage.getItem("Auth-Token") ? (
          <NotesComponent />
        ) : (
          <LogInComponent />
        )}
      </div>
    </>
  );
}

export default Home_Component;
