import React from 'react'
import { useState } from 'react'

function Add() {
    const[num1, setNum1] = useState(0)
    const[num2, setNum2] = useState(0)
    const[out, setOut] = useState(0)
    const add = () => {
        setOut(num1 + num2)
    }

    return (
<div>
    <form>
        <div>
            <label>Number 1</label>
            <input type="text" id="num1" value={num1} onBlur={(e)=> {
                setNum1(parseInt(e.target.value))
            }}
            ></input>
        </div>
        <div>
            <label>Number 2</label>
            <input type="text" id="num2" value={num2} onBlur={(e)=> {
                setNum2(parseInt(e.target.value))
            }}
            ></input>
        </div>
        <div>
            <button type="button" id="btn1" onClick={add}>
               Add
            </button>
        </div>
    </form>
    <div>
        <p id="disp1">The Sum is : {out}</p>
    </div>
</div>
    )
}

export default Add
