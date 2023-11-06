import { useState } from "react";
import Accept1 from "./Accept1";
import Accept2 from "./Accept2";

let Accept = () => {
  const [name, setName] = useState("");

  let getData = (name1) => {
    setName(name1);
  };
  return (
    <div>
      <Accept1 sname={getData} />
      <div>
        <Accept2 name1={name} />
      </div>
    </div>
  );
};

export default Accept;