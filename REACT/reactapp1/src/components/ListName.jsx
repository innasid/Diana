import { useState } from "react";

const ListName = () => {
    const name = ["Chris", "John", "Jim"];

    let list=()=>{
        let n=name.map((x) => <li>{x}</li>);
       return <ol>{n}</ol>
       }

        return <div>{list()}</div>
};

export default ListName;