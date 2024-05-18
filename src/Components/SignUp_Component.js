import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../context/Authentication_Context";
import { useNavigate } from "react-router-dom";
import AlertComponent from "./Alert_Component";

function SignUp_Component() {
  let { Signup } = useContext(AuthenticationContext);
  // const AlertMSG = "Internal Error Occured";
  const [AlertMSG, setAlertMSG] = useState("");
  let Redirect = useNavigate();
  async function Register() {
    let R = await Signup(
      document.querySelector("#First_Name").value,
      document.querySelector("#Last_Name").value,
      document.querySelector("#User_Name").value,
      document.querySelector("#exampleInputEmail1").value,
      document.querySelector("#exampleInputPassword1").value
    );
    // console.log(R);
    if (R === true) {
      Redirect("/LoginPage");
    } else {
      setAlertMSG(R);
      document.querySelector("#Alert").hidden = false;
      await setTimeout(() => {
        document.querySelector("#Alert").hidden = true;
      }, 1000);
    }
  }
  return (
    <>
      <AlertComponent Alert_Message={AlertMSG} />
      <div className="container col-md-5">
        <h1 className="my-3 text-center">SignUp On My NoteBook</h1>
        <form>
          <div className="mb-3">
            <h5 htmlFor="First_Name" className="my-3 form-label">
              First Name
            </h5>
            <input
              type="text"
              className="form-control"
              id="First_Name"
              required
            />
          </div>
          <div className="mb-3">
            <h5 htmlFor="Last_Name" className="my-3 form-label">
              Last Name
            </h5>
            <input
              type="text"
              className="form-control"
              id="Last_Name"
              required
            />
          </div>
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
            <h5 htmlFor="exampleInputEmail1" className="my-3 form-label">
              Email address
            </h5>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
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
                Register();
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

export default SignUp_Component;
