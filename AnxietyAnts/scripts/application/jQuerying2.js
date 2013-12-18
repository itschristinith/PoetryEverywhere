$(function(){
	console.log("jQuerying2 application running"); 
	setInterval(get_random_color,1000); 
}); 


//var pics = []

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    $(".Background").css({backgroundColor : color}); 
}

//var imgElement = "<img src="+pics[randomSpot]+"">
//$(imgElement).appendTo($("body")); 
// make an array of the images that need to pop up: and then loop through them. 



