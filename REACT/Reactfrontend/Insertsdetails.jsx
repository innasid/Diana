import React, { useState } from "react";
import axios from 'axios'

const api = axios.create ({
    baseURL : "http://localhost:3001/controller1"

})

function Insertsdetails () {
    const[sdetails, setSdetails] = useState({
        SID: "",
        FNAME: "",
        LNAME: "",
        DOB : "",
    })

const [msg,setMsg] = useState ("") 
const addData = async() => {
    try {
        setMsg("I am in add data method")
        let addData1 = await api.post("/add", sdetails)
        setSdetails (addData1)
        setMsg("Record Added")
} catch (error) {
    setMsg(error)
    }   
    }

return (
    <div>Insertsdetails
        <form className="form-group">
            <div>
    <label className="form-label" htmlFor='sid'>Enter SID</label>
    <input type='text' className='form-control' id='sid' onBlur={(e)=>{
        setSdetails(sdetails,(sdetails.SID=e.target.value))
    }}/>
</div>
<div>
<label className="form-label" htmlFor="fname">Enter FIRST NAME</label>
    <input type='text' className='form-control' id='fname' onBlur={(e)=>{
        setSdetails(sdetails,(sdetails.FNAME=e.target.value))
    }}/>
        </div>
<div>
<label className="form-label" htmlFor="lname">Enter LAST NAME</label>
    <input type='text' className='form-control' id='lname' onBlur={(e)=>{
        setSdetails(sdetails,(sdetails.LNAME=e.target.value))
    }}/>
</div>
<div>
<label className="form-label" htmlFor="dob">Enter DOB</label>
    <input type='text' className='form-control' id='Dob' onBlur={(e)=>{
        setSdetails(sdetails,(sdetails.DOB=e.target.value))
    }}/>
    </div>
    <div>
        <button type="button" onClick={addData}>Click Here to Add data!</button>
    </div>
        </form>
        {msg}
    </div>
)
}

export default Insertsdetails