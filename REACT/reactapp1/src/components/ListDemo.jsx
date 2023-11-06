import { useState } from "react";

const ListDemo = () => {
    const [arr] = useState([100, 200, 300]);

    let list = () => {
       let n1 = arr.map((x) => <li>{x}</li>);
       return <ul>{n1}</ul>
       }
  
        return <div>{list()}</div>
};

export default ListDemo;