import axios from "axios";
import { useState } from "react";
const api = axios.create({
  baseURL: "http://localhost:3001/controller1",
});

const InsertData = () => {
  const [sdetails, setSdetails] = useState({
    SID: "",
    FNAME: "",
    LNAME: "",
    DOB: "",
  });

  const insert = async (event) => {
    event.preventDefault();
    try {
      console.log(sdetails);
      let s1 = await api.post("/add", sdetails);
      setSdetails(s1);
      console.log(s1);
      return sdetails;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form className="form-group">
        <div>
          <label className="form-label" htmlFor="ip1">
            Student ID
          </label>
          <input
            className="form-control"
            type="text"
            id="ip1"
            onBlur={(e) => {
              setSdetails(sdetails, (sdetails.SID = e.target.value));
            }}
          />
        </div>
        <div>
          <label htmlFor="ip2" className="form-label">
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            id="ip2"
            onBlur={(e) => {
              setSdetails(sdetails, (sdetails.FNAME = e.target.value));
            }}
          />
        </div>
        <div>
          <label htmlFor="ip3" className="form-label">
            Last Name
          </label>
          <input
            className="form-control"
            type="text"
            id="ip3"
            onBlur={(e) => {
              setSdetails(sdetails, (sdetails.LNAME = e.target.value));
            }}
          />
        </div>
        <div>
          <label htmlFor="ip4" className="form-label">
            Date of Brith
          </label>
          <input
            className="form-control"
            type="text"
            id="ip4"
            onBlur={(e) => {
              setSdetails(sdetails, (sdetails.DOB = e.target.value));
            }}
          />
        </div>
        <div>
          <button className="btn btn-primary" id="btn1" onClick={insert}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default InsertData;