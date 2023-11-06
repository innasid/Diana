let DisplayStudent = (props) => {
    let display = props.slist.map((istudent) => {
      if (istudent.sid === "s001") {
        return (
          <div>
            <li className="list-group-item active">
              <div className="fs-1">{istudent.fname}</div>
              <div>{istudent.sid}</div>
              <div>{istudent.city}</div>
            </li>
          </div>
        );
      } else {
        return (
          <div>
            <li className="list-group-item">
              <div className="fs-1">{istudent.fname}</div>
              <div>{istudent.sid}</div>
              <div>{istudent.city}</div>
            </li>
          </div>
        );
      }
    });
    return <div>{display}</div>;
  };
  export default DisplayStudent;