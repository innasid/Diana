// CONDITIONAL RENDERING IS AS BELOW:
import { useState } from "react";
import RouterDemo from "./RouterDemo";
function Login() {
  const [login, setLogin] = useState({ user: "", pass: "" });
  const [loginmsg, setLoginmsg] = useState("");
  const [flag, setFlag] = useState(false);
  let checkLogin = (event) => {
    event.preventDefault();
    if (login.user === "Admin" && login.pass === "password") {
      setLoginmsg("Login Successful");
      setFlag(true);
    } else {
      setLoginmsg("Invalid Username or Password!");
      setFlag(false);
    }
  };
  let buttoncheck = () => {
    if (flag) {
      return <RouterDemo />;
    } else {
      return (
        <div>
          <form onSubmit={checkLogin}>
            <div className="form-outline mb-4">
              <label className="form-label">Username</label>
              <input
                type="text"
                id="user"
                class="form-control"
                onBlur={(e) => {
                  setLogin({ user: e.target.value, pass: login.pass });
                }}
                autoFocus
              />
            </div>
            <div className="form-outline mb-4">
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
              Login
            </button>
          </form>
          <div>{loginmsg}</div>
        </div>
      );
    }
  };
  return <div>{buttoncheck()}</div>;
}
export default Login;