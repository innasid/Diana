const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

async function test () {

    try {

        oracleconnection = await oracledb.getConnection({
            user: "system",
            password: "system",
            connectString: "localhost/orcl"

        });

        data = await oracleconnection.execute("select SID,FNAME,LNAME,TO_CHAR(DOB,'DD-MON-YYYY')DT from sdetails");
        return data

    } catch (err) {
        console.log(err.message)
    }
}

async function test1 () {

    try {

        oracleconnection = await oracledb.getConnection({
            user: "system",
            password: "system",
            connectString: "localhost/orcl"

        });

        data = await oracleconnection.execute("select SID,TNUMBER,SUB1,SUB2,SUB3 from marks");
        return data

    } catch (err) {
        console.log(err.message)
    }
}

async function insert(data) {
    try {

        oracleconnection = await oracledb.getConnection({
            user: "system",
            password: "system",
            connectString: "localhost/orcl"
    });

      let x = "insert into sdetails values ('" 
      x += data.SID 
      x+= "','" 
      x+= data.FNAME 
      x+= "','" 
      x+= data.LNAME 
      x+= "','" 
      x+= data.DOB 
      x+= "')"
     
      await oracleconnection.execute(x);
      await oracleconnection.commit();
  } catch (err) {
    console.log(err.message);
  }
}

async function insertmarks(data1) {
    try {

        oracleconnection = await oracledb.getConnection({
            user: "system",
            password: "system",
            connectString: "localhost/orcl"
})

let y = "insert into marks values ('" 
y += data1.SID
y += "','"
y += data1.TNUMBER
y += "','"
y += data1.SUB1
y += "','"
y += data1.SUB2
y += "','"
y += data1.SUB3
y += "')"
await oracleconnection.execute(y);
      await oracleconnection.commit();
  } catch (err) {
    console.log(err.message);
    }
}

module.exports = {
  test, test1, insert, insertmarks
}
