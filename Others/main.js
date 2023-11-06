let b1=document.querySelector("select#dropdown1");
b1.addEventListener("change",(event)=>{
    event.preventDefault()
    if(b1.value==='1'){
        var url="http://localhost:3001/controller1/sdetails"
    }else if(b1.value==='2'){
        var url ="http://localhost:3001/controller1/marks"
    } else if (b1.value ==='3'){
        let text = '<form>'
        text = text + '<label for="">Student ID</label><br>'
        text = text +'<input type="text" id ="ip1"><br>'
        text = text +'<label for="">First name</label><br>'
        text = text +'<input type="text" id ="ip2"><br>'
        text = text +'<label for="">Last name</label><br>'
        text = text +'<input type="text" id ="ip3"><br>'
        text = text +'<label for="">Date of Birth</label><br>'
        text = text +'<input type="text" id ="ip4"><br>'
        text = text +'<button id="btn1" onclick="add1()">Add</button>'
        text = text + '</form>'
        document.getElementById("out").innerHTML = text
    }
let request = new XMLHttpRequest()
request.open("GET",url)
request.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        if(b1.value==='1'){
            display1(JSON.parse(this.responseText))
        }
        else if(b1.value==='2'){
            display2(JSON.parse(this.responseText))
        }
    }
}
    request.send();
})
var display1 = (responseText) =>{
let text="<table class='table table-dark table-striped'>"
text = text+"<thead><tr>"
text = text + "<th scope = 'col'>SID</th>"
text = text + "<th scope = 'col'>First name</th>"
text = text + "<th scope = 'col'>Last name</th>"
text = text + "<th scope = 'col'>DOB</th></tr></thead></tbody>"
for (let i of responseText) {
    text+="<tr><td>" + i.SID + "</td>"
    text+="<td>" + i.FNAME + "</td>"
    text+="<td>" + i.LNAME + "</td>"
    text+="<td>" + i.DT + "</td></tr>"
}
text += "</tbody></table>";
document.getElementById("out").innerHTML = text;
}
var display2 = (responseText) =>{
    let text="<table class='table table-dark table-striped'>"
    text = text+"<thead><tr>"
    text = text + "<th scope = 'col'>SID</th>"
    text = text + "<th scope = 'col'>Tnumber</th>"
    text = text + "<th scope = 'col'>sub1</th>"
    text = text + "<th scope = 'col'>sub2</th>"
    text = text + "<th scope = 'col'>sub3</th></tr></thead></tbody>"
    for (let i of responseText) {
        text+="<tr><td>" + i.SID + "</td>"
        text+="<td>" + i.TNUMBER + "</td>"
        text+="<td>" + i.SUB1 + "</td>"
        text+="<td>" + i.SUB2 + "</td>"
        text+="<td>" + i.SUB3 + "</td></tr>"
    }
    text += "</tbody></table>";
    document.getElementById("out").innerHTML = text;
    }
    var add1 = () =>{
        let studentobj = {
            SID : document.getElementById("ip1").value,
            FNAME : document.getElementById("ip2").value,
            LNAME : document.getElementById("ip3").value,
            DOB : document.getElementById("ip4").value
        }
let request = new XMLHttpRequest()
request.open("POST","http://localhost:3001/controller1/add",true)
request.setRequestHeader('Content-Type','application/json')
request.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        document.getElementById("out").innerHTML = "<h1>Data added successfully</h1>"
    }
}
    request.send(JSON.stringify(studentobj));
    }