<%@page import="natwest.springmvc.controller.addTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<%
addTO ob = new addTO();
String msg = "";
if (request.getAttribute("to")!=null){
	ob=(addTO)request.getAttribute("to");
}
if (request.getAttribute("msg")!=null){
	msg=(String)request.getAttribute("msg");
}

%>
<body>
<h1>Addition of 2 numbers</h1>
<form action="add2" method="post">
<div>
<label for="a1">Enter Number 1</label>
<input type="text" id="a1" name="a1" value="<%=ob.getNum1()%>"/>
</div>
<div>
<label for="a2">Enter Number 2</label>
<input type="text" id="a2" name="a2" value="<%=ob.getNum2()%>"/>
</div>
<div>
<label for="a3">Result</label>
<input type="text" id="a3" name="a3" value="<%=ob.getNum3()%>"/>
</div>
<div>
<button type="submit">Sum</button>
</div>
</form>
<div><%=msg%></div>
</body>
</html>