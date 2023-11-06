import { useState } from "react";
import DisplayStudent from "./DisplayStudent";
import ReadStudent from "./ReadStudent";

let Student = () => {
  const [studentlist, setStudentlist] = useState([
    { sid: "s001", fname: "melvin", city: "chennai" },
    { sid: "s002", fname: "chris", city: "delhi" },
  ]);

  let getData = (data)=>{
  setStudentlist([...studentlist, data])
  }
  return (
    <div>
<div className="container">
<ReadStudent add1={getData}/>
</div>

      <ul class="list-group">
        <DisplayStudent slist={studentlist} />
      </ul>
    </div>
  );
};
export default Student;