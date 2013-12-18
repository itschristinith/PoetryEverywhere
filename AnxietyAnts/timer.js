


//this will pop up a hello every 3 seconds

//var start = setInterval(function(){alert("Hello")},3000);

//this is a clock 
var myVar=setInterval(function(){myTimer()},1000);

//this is to make it stop 
//window.onclick.myStopFunction(); 

function myTimer()
{
console.log("Timer should be running"); 
var d=new Date();
var t=d.toLocaleTimeString();
document.getElementById("demo").innerHTML=t;

//window.onclick.clearInterval(myVar)
}; 

$("body").click(function myStopFunction() 
{
clearInterval(myVar);
console.log("It has stopped"); 
}

//try to post the image 
$("body").on("click", function() {
	var poem = new Image (); 
	poem.src = "https://s3.amazonaws.com/patyprojects/anxiety_ants.png"
	poem.height = "200px";
	poem.width = "200px"
})


