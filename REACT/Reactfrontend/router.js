const express = require("express")
const test = require("../dbconnect/testconnection").test
const test1 = require("../dbconnect/testconnection").test1
const insert = require("../dbconnect/testconnection").insert
const insertmarks = require("../dbconnect/testconnection").insertmarks
const Router = express.Router()

var cors = require("cors")
Router.use(cors())
Router.get("/",(req,res) => {
    res.send("Welcome to Rest Services")
})

Router.get("/sdetails", async (req,res) => {
    data = await test()
    res.send(data.rows)

})

Router.get("/test", async (req,res) => {
    data = await test1()
    res.send(data.rows)

})

Router.post("/add", async (req,res) => {
    data = req.body
    data = await insert(data);
    res.send(data)
})

Router.post("/addmarks", async (req,res) => {
    data = req.body
    data = await insertmarks(data);
    res.send(data)
})

module.exports = {
    Router
}
