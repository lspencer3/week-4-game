//create needed global variables
var games = 0;
var wins = 0;
var losses = 0;

//play button functionality
$("#play").on("click",function(){

//create needed variables
var neededPoints = Math.floor(Math.random()*120)+19;
var points1 = Math.floor(Math.random()*12)+1;
var points2 = Math.floor(Math.random()*12)+1;
var points3 = Math.floor(Math.random()*12)+1;
var points4 = Math.floor(Math.random()*12)+1;

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

//show the amount of points needed
$("#need").html(neededPoints)


//keep counter of total point accrued and log total points

var crystalss= $(".pictures img");
var totPoints=0;

crystalss.on("click", function(){
	var attr = parseInt($(this).attr("data")) 
	console.log(attr)
	totPoints += attr 
	$("#current").html(totPoints)
	console.log(totPoints)


//if statement for when player wins or loses update necessary variables and show alerts for new game and new points
if (totPoints ===neededPoints){
	wins+= 1
	games+=1
	$("#wins").html(wins)
	$("#games").html(games)
    alert("You Won!")
	alert("new game!")
	$("#need").html(neededPoints)
	totPoints=0
    $("#current").html(totPoints)
    npoints1=Math.floor(Math.random()*12)+1;
	npoints2=Math.floor(Math.random()*12)+1;
	npoints3=Math.floor(Math.random()*12)+1;
	npoints4=Math.floor(Math.random()*12)+1;
	neededPoints=Math.floor(Math.random()*120)+19;
    $("#need").html(neededPoints)


//assign number values to crystals
var crystal1 = $("#crystalpic1");

crystal1.attr("data", npoints1);
console.log(crystal1.attr("data"));
//crystal1.click(function() {
//	parseInt(points1)
//	console.log($(this).attr("data"))
//});

var crystal2 = $("#crystalpic2");

crystal2.attr("data", npoints2);
console.log(crystal2.attr("data"));
//crystal2.click(function() {
//	parseInt(points2)
//	console.log($(this).attr("data"))
//});

var crystal3 = $("#crystalpic3");

crystal3.attr("data", npoints3);
console.log(crystal3.attr("data"));
//crystal3.click(function() {
	//console.log($(this).attr("data"))

	//});

var crystal4 = $("#crystalpic4");

crystal4.attr("data", npoints4);
console.log(crystal4.attr("data"));
//crystal4.click(function() { 
	//console.log($(this).attr("data"))
//});	
}

else if (totPoints>neededPoints){
	losses+= 1
	games+=1
	$("#losses").html(losses)
	$("#games").html(games)
    alert("You Lost!")
	alert("new game!")
	$("#need").html(neededPoints)
	totPoints=0;
    $("#current").html(totPoints)
    npoints1=Math.floor(Math.random()*12)+1;
	npoints2=Math.floor(Math.random()*12)+1;
	npoints3=Math.floor(Math.random()*12)+1;
	npoints4=Math.floor(Math.random()*12)+1;
	neededPoints=Math.floor(Math.random()*120)+19;
    $("#need").html(neededPoints)


//assign number values to crystals
var crystal1 = $("#crystalpic1");

crystal1.attr("data", npoints1);
console.log(crystal1.attr("data"));
//crystal1.click(function() {
//	parseInt(points1)
//	console.log($(this).attr("data"))
//});

var crystal2 = $("#crystalpic2");

crystal2.attr("data", npoints2);
console.log(crystal2.attr("data"));
//crystal2.click(function() {
//	parseInt(points2)
//	console.log($(this).attr("data"))
//});

var crystal3 = $("#crystalpic3");

crystal3.attr("data", npoints3);
console.log(crystal3.attr("data"));
//crystal3.click(function() {
	//console.log($(this).attr("data"))

	//});

var crystal4 = $("#crystalpic4");

crystal4.attr("data", npoints4);
console.log(crystal4.attr("data"));
//crystal4.click(function() { 
	//console.log($(this).attr("data"))
//});
}
})
});




