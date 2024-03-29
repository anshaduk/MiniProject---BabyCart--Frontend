import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Userside } from "../App";
import loginpic1 from "../assets/loginpic1.jpg";
import "./Login.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

function Login() {
  const nav = useNavigate();
  const { data, setData, setUser } = useContext(Userside);
  const inputref = useRef(null);

  //to check registered user is logged in
  const submit = (e) => {
    e.preventDefault();
    let logemail = inputref.current.logemail.value;
    let logpassword = inputref.current.logpassword.value;
    let userData = data.find((item) => item.email == logemail);
    if (userData && userData.password == logpassword) {
      setUser(userData);
      nav('/profile')
      //nav("/");
    } else {
      setUser(null);
      alert("invalid user");
    }
  };
  return (
    <>
      <div className="MianDiv">
        <div className="diVstyle1">
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol sm="6">
                <div className="d-flex flex-row ps-5 pt-5">
                  <MDBIcon
                    fas
                    icon="crow fa-3x me-3"
                    style={{ color: "#709085" }}
                  />
                  <span className="h1 fw-bold mb-0"></span>
                </div>
                <form action="" ref={inputref} onSubmit={(e) => submit(e)}>
                  <div className="d-flex flex-column justify-content-center  h-custom-2 w-200 pt-4">
                    <h3
                      className="fw-normal mb-3 ps-5 pb-3"
                      style={{ letterSpacing: "1px" }}
                    >
                      Log in
                    </h3>
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      placeholder="enter email"
                      label="Email address"
                      id="formControlLg"
                      name="logemail"
                      type="email"
                      size="lg"
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      placeholder="enter password"
                      label="Password"
                      id="formControlLg"
                      name="logpassword"
                      type="password"
                      size="lg"
                    />
                    <button className="loginbtn w-100 h-30">Login</button>
                    <br />
                    <p className="ms-5">Don't have an account?</p>
                    <button
                      className="registerbtn w-100 h-30"
                      onClick={() => nav("/signup")}
                    >
                      {" "}
                      Register here
                    </button>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </>
  );
}

export default Login;
