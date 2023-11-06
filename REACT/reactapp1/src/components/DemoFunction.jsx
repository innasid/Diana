import { useState } from "react";
import DemoFunctionLifeCycle from "./DemoFunctionLifeCycle";

function DemoFunction() {
  const [name, setName] = useState("DemoFunction");
  return (
    <div>
      <form>
        <input
          type="text"
          id="a1"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
      <DemoFunctionLifeCycle name={name} />
    </div>
  );
}
export default DemoFunction;