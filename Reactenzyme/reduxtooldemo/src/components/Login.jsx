import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/index";

function Login() {
  const [login, setLogin] = useState({ user: "", pass: "" });
  const [loginmsg, setLoginmsg] = useState("");
  const dispatch = useDispatch();

  let checkLogin = (event) => {
    event.preventDefault();
    if (login.user === "Admin" && login.pass === "password") {
      setLoginmsg("Login Successful");
      dispatch(actions.changeloginstatus(true));
      dispatch(
        actions.changeuser({
          username: login.user,
          password: login.pass,
        })
      );
    } else {
      setLoginmsg("Invalid Username or Password!");
      dispatch(actions.changeloginstatus(false));
    }
  };

  return (
    <div>
      <form onSubmit={checkLogin}>
        <div className="form-outline mb-4">
          <label className="form-label">Username</label>
          <input
            type="text"
            id="user"
            className="form-control"
            onBlur={(e) => {
              setLogin({ user: e.target.value, pass: login.pass });
            }}
            autoFocus
          />
        </div>
        <div>
          <label className="form-label">Password</label>
          <input
            type="password"
            id="pass"
            className="form-control"
            onBlur={(e) => {
              setLogin({ user: login.user, pass: e.target.value });
            }}
          />
        </div>
        <button className="btn btn-primary btn-block mb-4" type="submit">
          Submit
        </button>
        <div>{loginmsg}</div>
      </form>
    </div>
  );
}

export default Login;