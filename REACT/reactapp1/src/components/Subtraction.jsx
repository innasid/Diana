import { useState } from "react";

let Subtraction = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  let f1 = (event) => {
    event.preventDefault();
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let n3 = n1 - n2;
    setNum3(n3);
  };

    return (
      <div className="container col-5">
        <form onSubmit={f1}>
          <div className="form-group col-5 mt-1">
            <label htmlFor="a1">Enter Number 1</label>
            <input
              type="text"
              className="form-control-file"
              id="a1"
              value={num1}
              onChange={(event) => {
                setNum1(event.target.value);
              }}
            />
          </div>
          <div className="form-group col-5 mt-1">
            <label htmlFor="a2">Enter Number 2</label>
            <input
              type="text"
              className="form-control-file"
              id="a2"
              value={num2}
              onChange={(event) => {
                setNum2(event.target.value);
              }}
            />
          </div>
          <div className="form-group col-5 mt-1">
            <label htmlFor="a3">Result</label>
            <input
              type="text"
              className="form-control-file"
              id="a3"
              value={num3}
              readOnly
            />
          </div>

          <div className="form-group column mt-3">
            <button type="submit" className="btn btn-primary">
              sub
            </button>
          </div>
        </form>
      </div>
    );
  }

export default Subtraction;

