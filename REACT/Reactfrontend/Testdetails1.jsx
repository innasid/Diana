import axios from 'axios'
import React, { useState } from 'react'

const api = axios.create ({
    baseURL: "http://localhost:3001/controller1"
})

function Testdetails1() {
    const [marks, setMarks] = useState([{
        SID: "",
        TNUMBER: "",
        SUB1: "",
        SUB2: "",
        SUB3: "",
    },])
    const [flag, setFlag] = useState(0)

    const [er, setEr] = useState()
    const readMarks = async ()=> {
        try{
            let data1 = await api.get("/test").then(({data})  =>
                    data
          
            ) 
            setMarks (data1)
            if(flag===0){
                setFlag(1)
            } else {
                setFlag(0)
            }
        }
        catch (error){
            setEr(error)
        }
    }

    const displayMarks = ()=>{
            let n = marks.map((y) => (
                <tr>
                    <td>
                        {y.SID}
                    </td>
                    <td>
                        {y.TNUMBER}
                    </td>
                    <td>
                        {y.SUB1}
                    </td>
                    <td>
                        {y.SUB2}
                    </td>
                    <td>
                        {y.SUB3}
                    </td>
                </tr>
            ))
            if(flag===1){
                return (
                    <table className='table table-hover table-primary table-striped-columns fs-3'>
                        <thead>
                        <tr>
                            <th>
                                SID
                            </th>
                            <th>
                                TNUMBER
                            </th>
                            <th>
                                SUBJECT1
                            </th>
                            <th>
                                SUBJECT2
                            </th>
                            <th>
                                SUBJECT3
                            </th>
                        </tr>
                        </thead>
                       <tbody>{n}</tbody> 
                    </table>
                )
            } else {
                return (
                    <div></div>
                )
            }
           
    }

  return (
    <div>
        <form>
            <button type="button" onClick={readMarks}>Click here to read marks</button>
        </form>
        {displayMarks()}
        {er}
    </div>
  )
}

export default Testdetails1