import React, { useState } from "react";

function Demo1() {
  const [counter, setCounter] = useState(5);
  let increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>
        <h1 id="h1head">Enzyme Test Demo1</h1>
      </div>
      <div>
        <form>
          <p id="display1">Counter value is : {counter}</p>
          <button
            type="button"
            onClick={increment}
            id="btn"
            className="btn btn-primary"
          >
            Click me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Demo1;