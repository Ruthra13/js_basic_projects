//print the stars as per given input
<html>
<head>
<script>
function myfunc()
{
star = "";
i = document.getElementById("ta").value;
for(j=0;j<=i;j++)
{
star = star + "*" +"<br>";
}
document.getElementById("output").innerHTML = star;
}
</script>
</head>
<body>
<input type="text" id="ta" onkeyup="myfunc()"></input>
<p id="output"></p>
</body>
</html>
