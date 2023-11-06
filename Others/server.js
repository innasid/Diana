const express = require("express")
const bodyparser = require("body-parser")
route = require("../js/router").Router
const testconnection = require("../dbconnect/testconnection").testconnection
var app = express(); // this is to begin the server
app.use(bodyparser.json())
app.use('/controller1', route) // this is to call the router
app.listen(3001) // this will host our application
