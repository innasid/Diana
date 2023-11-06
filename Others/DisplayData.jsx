import axios from "axios";
import { useState } from "react";
const api = axios.create({
  baseURL: "http://localhost:3001/controller1",
});

const DisplayData = () => {
  const [sdetails, setSdetails] = useState([
    {
      SID: "",
      FNAME: "",
      LNAME: "",
      DT: "",
    },
  ]);
  const [er, setEr] = useState();
  const disp = async () => {
    try {
      let data = await api.get("/sdetails").then(({ data }) => data);
      setSdetails(data);
    } catch (err) {
      setEr(err);
    }
  };

  const disp1 = () => {
    if (sdetails.length === 0) {
      return <div>{er}</div>;
    } else {
      let n = sdetails.map((x) => (
        <li className="list-group-item list-group-item-action list-group-item-info">
          <div className="p-2">
            <b>SID: </b>
            {x.SID}
          </div>
          <div>
            <b>FName: </b>
            {x.FNAME}
          </div>
          <div>
            <b>:LName: </b>
            {x.LNAME}
          </div>
          <div>
            <b>DOB: </b>
            {x.DT}
          </div>
        </li>
      ));
      return <ul className="list-group">{n}</ul>;
    }
  };

  return (
    <div>
      <form onSubmit={disp()}>
        <button type="submit">Click to Display</button>
      </form>
      {disp1()}
    </div>
  );
};

export default DisplayData;