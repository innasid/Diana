import React, { useState } from "react"
const calc = (n) => {
    return n <= 0 
function CalFactorial() {
    const [number, setNumber] = useState (1)
    const [ increment, setIncrement] = useState (0)
    
    const calc = (n) => {
      if (n === 1) {
        return 1
      } else {
    return n * calc(n-1)
    }
    }
    const factorial = useMemo(() => calc(number), [number])
    const onClick = () => {
        setIncrement(increment + 1)
    }
    return (
<div>
    <form>
        <label>Input Number:</label>
        <input type="text"
            onBlur={(e)=> {
                setNumber(parseInt(e.target.value))
            }}
        ></input>
        <button type="button" onClick={onClick()}></button>
    </form>
    <div>{factorial}</div>
    <div>{increment}</div>
</div>
)
}

export default CalFactorial
