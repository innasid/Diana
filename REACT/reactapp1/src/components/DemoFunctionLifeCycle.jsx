import React, { useEffect } from "react";
function DemoFunctionLifecycle(props) {
  const state = "DemoFunctionLifecycle";
  useEffect(() => {
    console.log("I am inside the 1 argument");
  });
  useEffect(() => {
    console.log("I am inside the 2 argument");
  }, []);
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{state}</h2>
    </div>
  );
}
export default DemoFunctionLifecycle;