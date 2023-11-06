import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/index"

function Student() {
  const [id, setID] = useState();
  const [name, setName] = useState();
  const counter = useSelector((state) => state.counter);
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(actions.changestudent({id: id, name: name}))
  };
  return (
    <div>
      <div>
        <form>
          <div>
            <label>Input ID</label>
            <input
              type="text"
              id="inp1"
              defaultValue={student.id}
              onBlur={(e) => {
                setID(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              id="inp2"
              defaultValue={student.name}
              onBlur={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <button type="button" onClick={add}>
              Add Student
            </button>
          </div>
        </form>
        <div>
          <h2>Counter is : {counter}</h2>
        </div>
      </div>
    </div>
  );
}

export default Student;