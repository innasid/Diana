import React, { useState }from "react"
import { useSelector, useDispatch } from "react-redux"

function Counter() {
    const counter = useSelector((state)=> state.counter)
    const student = useSelector((state)=> state.student)
    const dispatch = useDispatch()
    const increment = () => {
        dispatch({type: "ch1" })
    }
    const decrement = () => {
        dispatch({type: "ch2" })
    }
    const [inc,setInc] = useState(0)

    const byinc = ()=> {
        dispatch({ type: "ch3", payload: inc })
    }

    return (
        <div>
            <div>
            <h1>Counter value = {counter} </h1>
            </div>
            <div>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={decrement}>Decrement</button>
            </div>
            <div>
                <form>
                    <label>Enter value to Increment by</label>
                    <input 
                    type="text" 
                    id="inp1" 
                    onBlur={(e)=>{
                    setInc(parseInt(e.target.value))
                    }}
                    ></input>
                    <button type="button" onClick={byinc}>Increment by</button>
                </form>
            </div>
            <p>Name : {student.name}</p>
            <p>ID : {student.id}</p>
        </div>
    )
}

export default Counter