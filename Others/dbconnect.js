const oracledb = require("oracledb");
oracleconnection = oracledb.getConnection({
user: "system",
password: "system",
connectString : "localhost/orcl"
});

module.exports = {
    oracleconnection
}




