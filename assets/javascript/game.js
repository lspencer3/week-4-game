//create needed variables
var neededPoints = Math.floor(Math.random()*120)+19;
var points1 = Math.floor(Math.random()*12)+1;
var points2 = Math.floor(Math.random()*12)+1;
var points3 = Math.floor(Math.random()*12)+1;
var points4 = Math.floor(Math.random()*12)+1;
var games = 0;
var wins = 0;
var losses = 0;

//assign number values to crystals
var crystal1 = $("#crystalpic1");

crystal1.attr("data", points1);
console.log(crystal1.attr("data"));
//crystal1.click(function() {
//	parseInt(points1)
//	console.log($(this).attr("data"))
//});

var crystal2 = $("#crystalpic2");

crystal2.attr("data", points2);
console.log(crystal2.attr("data"));
//crystal2.click(function() {
//	parseInt(points2)
//	console.log($(this).attr("data"))
//});

var crystal3 = $("#crystalpic3");

crystal3.attr("data", points3);
console.log(crystal3.attr("data"));
//crystal3.click(function() {
	//console.log($(this).attr("data"))

	//});

var crystal4 = $("#crystalpic4");

crystal4.attr("data", points4);
console.log(crystal4.attr("data"));
//crystal4.click(function() { 
	//console.log($(this).attr("data"))
//});

//play button functionality
$("#play").on("click",function(){

//show the amount of points needed
$("#need").append(neededPoints)

//keep counter of total point accrued and log total points

var crystalss= $(".pictures img");

crystalss.on("click", function(){
	var attr = parseInt($(this).attr("data")) 
	console.log(attr)
	var totPoints = 0;
	totPoints = attr + totPoints;
	$("#current").append(totPoints)
	console.log(this)

//if statement for when player wins or loses update necessary variables and show alerts for new game and new points

if (totPoints ===neededPoints){
	alert("you win!")
	wins+= 1
	games+=1
	totPoints=0;
	rando(points1)
	rando(points2)
	rando(points3)
	rando(points4)
	rando2(neededPoints)
	alert("new game!")
	a$("#need").append(neededPoints)
	$("#points").append(totPoints)

	
}

else if (totPoints>neededPoints){
	alert("you lose!")
	losses+= 1
	totPoints=0;
	rando(points1)
	rando(points2)
	rando(points3)
	rando(points4)
	rando2(neededPoints)
	alert("new game!")
	$("#need").append(neededPoints)
	$("#points").append(totPoints)

}
})
});

//function to assign random number to picture
function rando(param){
	var n;
	Math.floor(Math.random()*12)+1;
	n===param;
}

//function to assign random number to neededPoints
function rando2(param){
	var n;
	Math.floor(Math.random()*120)+19;
	n===param;
}








