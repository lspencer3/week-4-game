


var neededPoints = Math.floor(Math.random()*120)+19;
var points1 = Math.floor(Math.random()*12)+1;
var points2 = Math.floor(Math.random()*12)+1;
var points3 = Math.floor(Math.random()*12)+1;
var points4 = Math.floor(Math.random()*12)+1;
var totPoints = 0;
var games = 0;
var wins = 0;
var losses = 0;

//create function to assign random number to picture
function rando(param){
	var n;
	Math.floor(Math.random()*12)+1;
	n=param
}

//assign random number to neededPoints
function rando2(param){
	var n;
	Math.floor(Math.random()*120)+19;
	n=param
}
// create alert that shows the amount of points needed then keep running counter of points gained
alert("you need " + neededPoints "!")

   $("#crystalpic1").on("click", function() {
    sum(points1+totPoints);
   $("points").html(totPoints)

  })

   $("#crystalpic2").on("click", function() {
 	sum(points2+totPoints);
   $("points").html(totPoints)

  })

   $("#crystalpic3").on("click", function() {
   	sum(points3+totPoints);
   $("points").html(totPoints)

  })

   $("#crystalpic4").on("click", function() {
   	sum(points4+totPoints);
   $("points").html(totPoints)

  })

//when player wins or loses update necessary variables and show alerts for new game and new points

if (totPoints =neededPoints){
	alert("you win!")
	win+= 1
	game+=1
	totPoints=0;
	rando(points1)
	rando(points2)
	rando(points3)
	rando(points4)
	rando2(neededPoints)
	alert("new game!")
	alert("you need " + neededPoints "!")
	$("points").html(totPoints)

	
}

else if (points>neededPoints){
	alert("you lose!")
	losses+= 1
	totPoints=0;
	rando(points1)
	rando(points2)
	rando(points3)
	rando(points4)
	rando2(neededPoints)
	alert("new game!")
	alert("you need " + neededPoints "!")
	$("points").html(totPoints)

}







