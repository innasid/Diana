import { useState } from "react";

let Accept1 = (props) => {
  const [name, setName] = useState("");
  let send = (event) => {
    event.preventDefault();
    props.sname(name);
  };
  return (
    <div>
      <form onSubmit={send}>
        <label htmlFor="name">Enter Name </label>
        <input
          type="text"
          id="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button type="submit"> Add name</button>
      </form>
    </div>
  );
};
export default Accept1;