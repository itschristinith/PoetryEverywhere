$(function(){
	console.log("jQuerying application running"); 
	//you set up an event listener
	$(document).click(clickCallback); 
	setInterval(loop,1000); 
}); 

var sourceText = "blah, blooh, bleeh, me"; 

function loop() {
	//breaking up my source text into an array
	var brokenText = sourceText.split(" "); 
	//choose a random spot in my array 
	//parseInt is like casting into an int
	var randomSpot = parseInt(Math.random() * brokenText.length); 
	var randomWord = brokenText [randomSpot]; 
	//assing contents of nottextbox to randomword
	$("#notTextBox").html(randomWord); 


	//setTimeout(secondPart, 500); 
	//$("#notTextBox").animate({})
	//$("#notTextBox")
	//$
}

function clickCallback() {
	alert("hi"); 
}

// function secondPart () {
// //breaking up my source text into an array
// 	var brokenText = sourceText.split(" "); 
// 	//choose a random spot in my array 
// 	//parseInt is like casting into an int
// 	var randomSpot = parseInt(Math.random() * brokenText.length); 
// 	var randomWord = brokenText [randomSpot]; 
// 	$("#textBox").html(randomWord);

// }

 	