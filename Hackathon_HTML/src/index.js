let user = new Array()
var stEmail =""
var stPass =""
function f1(){
    const User = document.getElementById("user").value
    const Email = document.getElementById("email").value
    const Password = document.getElementById("pass").value
    const Address = document.getElementById("address").value
	const Account = document.getElementById("account").value
	const Mobile = document.getElementById("mobile").value

if (User==="" || Password ===""){
alert("Name or Password cannot be empty")
return;
}

let newUser={
    "Name" : User,
    "Email" : Email,
    "Password" : Password,
    "Address" : Address,
    "Account" : Account,
    "Mobile": Mobile	
}

if (!isValidEmail(Email)) {
    alert("Invalid Email Format, Valid format : 'xyz@ab.com'");
    return;
  }


user.push(newUser)
stEmail = Email
stPass = Password
alert("Registration completed successfully")
clearForm()
}


function isValidEmail(Email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
  }

function clearForm(){
document.getElementById('user').value=''
document.getElementById('email').value=''
document.getElementById('pass').value=''
document.getElementById('address').value=''
document.getElementById('account').value=''
document.getElementById('mobile').value=''
}

function f3(){
    const Email = document.getElementById('lmail').value
    const Password1 = document.getElementById('lpass').value
if (Email === stEmail && Password1 === stPass){
alert('Login Successful')
}
 else {
    alert('Invalid Email ID or password')
}
}

function f2(){
    let text =''
    text +='<div id="login">'
text +='<div id="container">'
text +='<div class="col-sm-10 col-sm offset-1">'
text +='<div class="p-3 mb-4 bg-secondary text-white">'
text +='<h1 class="fw-bold text-dark display-2">Sign in</h1>'
text +='</div>'
text +='<div class="info-form">'
text +='<form action="" class="form-inline">'
text +='<div class="form-group">'
text +='<div class="row g-3">'
text +='<div class="col-sm-7">'
text +='<div class="mb-4">'
            
            text +=' <input type="text" id="lmail" class="form-control" placeholder="Email ID"required>'
            text +='</div>'
            text +='<div class="mb-4">'
            text +=' <input type="password" id="lpass" class="form-control" placeholder="Password" required>'
            text +='</div>'
            text +='<div>'
            text +='<input type="checkbox">Remember me <a href="https://example.com" target="_blank">Forgot password?</a></button>'
            text +='</div>'
            text +='<div>'
            text +='<button type="button" class="btn btn-success" id="checkLogin" onclick="f3()"> Login</button>'
            text +='</div>'
            text +='</form>'
            text +=' <div id="data" class="m-1 rounded-3 w-95 m-auto"></div>'

    
            document.getElementById("login").innerHTML=text
    }