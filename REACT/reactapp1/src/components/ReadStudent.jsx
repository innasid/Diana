import { useState } from "react";

let ReadStudent = (props) => {
    const [data, setData] = useState({ sid: " ", fname: " ", city: " " });
    let send = (event) => {
      event.preventDefault();
      props.add1(data);
    };
    return (
      <div>
        <div className="container col-8"></div>
        <form onSubmit={send}>
          <div className="form-group col-6">
            <div className="mt-4 fs-5">
              <label htmlFor="sid">Student ID </label>
            </div>
            <div className="mt-1">
              <input
                className="form-control"
                type="text"
                id="sid"
                placeholder="id"
                onChange={(e) => {
                  setData({
                    sid: e.target.value,
                    fname: data.fname,
                    city: data.city,
                  });
                }}
              ></input>
            </div>
          </div>
          <div className="form-group col-8">
            <div className="mt-4 fs-5">
              <label htmlFor="fname"> Student Name </label>
            </div>
            <div className="mt-1">
              <input
                className="form-control"
                type="text"
                id="fname"
                placeholder="name"
                onChange={(e) => {
                  setData({
                    sid: data.sid,
                    fname: e.target.value,
                    city: data.city,
                  });
                }}
              ></input>
            </div>
          </div>
          <div className="form-group col-8">
            <div className="mt-4 fs-5">
              <label htmlFor="city"> City </label>
            </div>
            <div className="mt-1">
              <input
                className="form-control"
                type="text"
                id="city"
                placeholder="city"
                onChange={(e) => {
                  setData({
                    sid: data.sid,
                    fname: data.fname,
                    city: e.target.value,
                  });
                }}
              ></input>
            </div>
          </div>
          <div className="form-group col-6 mt-4 mb-4">
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  };
  export default ReadStudent;