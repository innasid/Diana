import React from "react"
import { useDispatch } from "react-redux"
import { actions } from "../store/index"

function Logout () {
 const dispatch = useDispatch() 

 const checklogout = () => {
    dispatch(actions.changeloginstatus(false))
    dispatch(
        actions.changeuser({
            username: "",
            password: "",
         })
    )
 }
return (
    <div>{checklogout()}</div>
)
}

export default Logout