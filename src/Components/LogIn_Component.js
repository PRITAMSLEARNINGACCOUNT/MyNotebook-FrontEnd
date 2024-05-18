import React, { useContext } from "react";
import { AuthenticationContext } from "../context/Authentication_Context";
import AlertComponent from "./Alert_Component";
import { useNavigate } from "react-router-dom";

function LogIn_Component() {
  const { Login } = useContext(AuthenticationContext);
  const AlertMsg = "Please Provide The Correct Credentials";

  let RipUseHistory = useNavigate();

  async function HandleSubmit() {
    let R = await Login(
      document.querySelector("#User_Name").value,
      document.querySelector("#exampleInputPassword1").value
    );
    // console.log(R);
    if (R) {
      RipUseHistory("/");
    } else {
      document.querySelector("#Alert").hidden = false;
      await setTimeout(() => {
        document.querySelector("#Alert").hidden = true;
      }, 1000);
    }
  }
  return (
    <>
      <AlertComponent Alert_Message={AlertMsg} />
      <div className="container col-md-5">
        <h1 className="my-3 text-center">Login On My NoteBook</h1>
        <form className="my-4">
          <div className="mb-3">
            <h5 htmlFor="User_Name" className="my-3 form-label">
              Username
            </h5>
            <input
              type="text"
              className="form-control"
              id="User_Name"
              required
            />
          </div>
          <div className="mb-3">
            <h5 htmlFor="exampleInputPassword1" className="my-3 form-label">
              Password
            </h5>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="Container my-1">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                HandleSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LogIn_Component;
