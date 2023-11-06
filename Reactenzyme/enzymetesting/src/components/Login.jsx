import React, { useState } from 'react'

function Login () {
    const [login, setLogin] = useState ({
        username: "",
        password: "",
    })      
    return (
        <div>
            <form>
                <div>
                    <label>Username :</label>
                    <input id="ip1" type="text" 
                    onBlur={(e) => {
                       setLogin ({username: e.target.value, password: login.password })
                    }}
                    ></input>
                </div>
                <div>
                    <label>Password :</label>
                    <input id="ip2" type="text"
                    onBlur={(e) => {
                       setLogin ({username: login.username, password: e.target.value})
                    }}
                    ></input>
                </div>
                <div>
                    <button type="button" id="btn1">
                        Login
                        </button>
                </div>
            </form>
            <div>
                    <p id="disp1">Username is : {login.username}</p>
                    <p id="disp2">Password is : {login.password}</p>

            </div>
        </div>

    )
}

export default Login