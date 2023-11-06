import { useState } from "react";

let Binding = () => {
    const [num1, setNum1] = useState(25);
return (
 <div>
num1 value = {num1}
<form action="">
<input type="text" value={num1}
onChange={(e)=> {
        setNum1(e.target.value);
}}
/>
</form>
</div>
);
};


export default Binding;