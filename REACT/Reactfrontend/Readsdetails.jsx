import axios from 'axios'
import React from 'react'
import { useState } from "react";
//api is a variable which refers to axios
const api = axios.create ({
    baseURL : "http://localhost:3001/controller1"
})
 function Readsdetails() {
    const [sdetails, setSdetails] = useState ([{
        SID : "",
        FNAME: "",
        LNAME:"",
        DT:"",
    },]);
    const [er,setEr] = useState()
    //creating another function - to connect database we use async - when we call server api.get (calling server) server will return value which will come to data 1 which will get or collect the data and will store in data
    const readData =async() => {
        try{
            let data1 = await api.get("/sdetails").then(({data})=>data
        )
        setSdetails (data1)
        }catch (error) {
            setEr(error)
        }
    }
      //whatever data ion sdetails will be transfered to data
//to display data which is in read function - the variable declared in one function cannot be recognised in another function
//
    const display = () =>{
        //all li will be stored in n untill all details are stored
        let n = sdetails.map((x)=>(
            <li>
                <div>
                    {x.SID}
                </div>
                <div>
                    {x.FNAME}
                </div>
                <div>
                    {x.LNAME}
                </div>
                <div>
                    {x.DT}
                </div>
            </li>
        ))
        return (
            <ul>{n}</ul>
        )
    }
    //main return
  return (
    <div>
        <form>
        <button type="button" onClick = {readData}>Click here to Read Data!</button>
        </form>
      {display()}
      {er}
    </div>
  )
}
export default Readsdetails