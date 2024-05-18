import { createContext } from "react";
const AuthenticationContext = createContext();
function AuthState(props) {
  async function Login(uname, pass) {
    let result = await fetch(process.env.REACT_APP_LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username: uname,
        Password: pass,
      }),
    });
    result = await result.json();
    // console.log(result.Token);
    if (result.Token) {
      //   console.log("Returning True");
      // process.env["REACT_APP_Auth_Token"] = result.Token;
      localStorage.clear();
      localStorage.setItem("Auth-Token", result.Token);
      return true;
    } else {
      //   console.log("Returning False");
      return false;
    }
  }
  async function Signup(fname, lname, uname, email, pass) {
    let result = await fetch(process.env.REACT_APP_SIGNUP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        First_Name: fname,
        Last_Name: lname,
        Username: uname,
        Password: pass,
        Email: email,
      }),
    });
    result = await result.json();
    console.log(result.Result);
    if (result.Result === "User Created Successfully\n") {
      localStorage.clear();
      return true;
    } else {
      //   console.log("Returning False");
      return result.Result;
    }
  }
  return (
    <AuthenticationContext.Provider value={{ Login, Signup }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}
export { AuthenticationContext, AuthState };
