
//when jquery has been loaded, then start our program. 
var jqueryLoaded = function() {
	$(document).ready(function(){
		console.log('jquery'); 
		start(); 
	}); 
}

if ( typeof jQuery === "undefined") {
	var scr = document.createElement('script'); 
	scr.type = "text/javascript"; 
	scr.src = "http://code.jquery.com/jquery-latest.min.js"; 
	//scr.async = true;
	document.getElementsByTagName('body')[0].appendChild(scr); 

	var timer = setInterval ( function(){
		if ( typeof jQuery !== 'undefined') {
			console.log('found jquery');
			clearInterval(timer); 
			jqueryLoaded(); 
		}
		else
		{
			console.log('no jquery');
		}
			}, 1000); 
		} else {
	//if we do have jquery, then just load the function. 
		jqueryLoaded(); 
}

// Use this variable to keep track of how many seconds it has been since the last click
var secondsSinceLastClick = 0;

//this is what fires up both the creation and the movement
function start() {
	$(document).ready(function(){
	        console.log("working");
	       	createAnts();
	        console.log("I should see ants"); 
	       	moveAnts();
	        console.log("I should see them move"); 


	        // Add a click handler to listen for user clicks.
	        $(document).click(function(){
				console.log("clicked")
				secondsSinceLastClick = 0;
			})
	});
}

//we are creating the ants and populating the divs
function createAnts() {
	var divArray = []; 
	for (var i=0; i<200; i++){
 
		divArray[i] = document.createElement("div");
		var ant = new Image (); 

		divArray[i].className = "ant";
		divArray[i].id = "gif" + i; 
		
		ant.src = "https://s3.amazonaws.com/patyprojects/gifs/gif_"+ 1 + ".gif"; 
		ant.height = "80"; 
		ant.width = "80"; 

		divArray[i].style.position = "absolute"; 
		divArray[i].style.left = Math.random() * window.innerWidth + "px"; 
		divArray[i].style.bottom = (0 - (Math.random() * (window.innerHeight *2))) + "px"; 

		console.log(divArray[i]); 

		divArray[i].appendChild(ant); 

		document.body.appendChild(divArray[i]); 

	
	}
}
function moveAnts() {
	var antArray = $("div.ant");

	var left = 0; 
	var x= Math.random() * window.innerWidth; 
	var y= Math.random() * window.innerHeight; 

	//console.log("this is my antArray's length:" + antArray.length);
	
		




		function frame() {

			secondsSinceLastClick = secondsSinceLastClick + 0.10;
			x= x + 2 - Math.random() * 4; 
			y = y + 2 - Math.random() *4; 


		 	for (var i = 0; i < antArray.length; i++ ){
 				//console.log("this is my divarray in move:" + antArray[i]); 


 				var temp = antArray[i].style.bottom.split("px");

 				var newY = parseInt(temp[0])

 				newY += Math.random() * 30;

 				//Only reset the ants if it has been less than 30 seconds since the user's last click!
 				//console.log("secondsSinceLastClick is " + secondsSinceLastClick)
 				if (secondsSinceLastClick < 30){
 					if (newY >= window.innerHeight){
 						newY =  0;
 					}
 				}


 				antArray[i].style.bottom = newY +'px'; 
 				//console.log("this is newY:" + newY); 
 				//console.log("this is my divarray in move222:" + antArray[i]); 
 			}

	 	if ( left == window.innerWidth)
 			clearInterval(id)
 		}
 		




	var id = setInterval (frame, 100) //call the frame every 0.10 sec. 
}