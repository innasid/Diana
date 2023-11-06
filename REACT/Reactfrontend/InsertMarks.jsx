import React, { useState } from "react";
import axios from 'axios'

const api = axios.create({
    baseURL : "http://localhost:3001/controller1"
})

function InsertMarks () {

const [marks, setMarks] = useState({
    SID : "",
    TNUMBER: "",
    SUB1: "",
    SUB2: "",
    SUB3: "",
})
const [msg,setMsg] = useState ("") 

const insert = async() => {
    try {
        setMsg("I am in insert method")
        let addData = await api.post("/addmarks", marks)
        setMarks (addData)
        setMsg("Record Added")
} 
catch (error) {
    setMsg(error)
    }   
}

return (
    <div>
        <form className="form-group">
            <div>
    <label className="form-label" htmlFor='SID'>Enter SID</label>
    <input type='text' className='form-control' id='sid' onBlur={(e)=>{
        setMarks(marks,(marks.SID=e.target.value))
    }}/>
</div>
<div>
<label className="form-label" htmlFor="Tnumber">Enter TNUMBER</label>
    <input type='text' className='form-control' id='Tnumber' onBlur={(e)=>{
       setMarks(marks,(marks.TNUMBER=e.target.value))
    }}/>
        </div>
<div>
<label className="form-label" htmlFor="sub1">Enter Marks for SUB1</label>
    <input type='text' className='form-control' id='sub1' onBlur={(e)=>{
        setMarks(marks,(marks.SUB1=e.target.value))
    }}/>
</div>
<div>
<label className="form-label" htmlFor="sub2">Enter Marks for SUB2</label>
    <input type='text' className='form-control' id='sub2' onBlur={(e)=>{
        setMarks(marks,(marks.SUB2=e.target.value))
    }}/>
</div>
<div>
<label className="form-label" htmlFor="sub3">Enter Marks for SUB3</label>
    <input type='text' className='form-control' id='sub3' onBlur={(e)=>{
        setMarks(marks,(marks.SUB3=e.target.value))
    }}/>
</div>
<div>
<button type="button" className="btn btn-primary" id="btn1" onClick={insert}>
    Click to Add Marks Data
    </button>
</div>
</form>
{msg}
</div>
)
}

export default InsertMarks
