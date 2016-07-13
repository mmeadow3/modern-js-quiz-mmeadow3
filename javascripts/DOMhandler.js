"use strict";

let Robot = require('./robots');
let Type = require('./types');
let Name = require('./names');


let selected = {Robot, Type, Name};
var players = [];



$(document).ready(function() {
/////////////////gets value from text input box//////////
$('#p1Select').click(function(){
	var p1 = $('#p1Input').val();
	$('#p1Output').prepend(p1 + " fighting in the ");
});

$('#p2Select').click(function(){
	var p2 = $('#p2Input').val();
	$('#p2Output').prepend(p2 + " fighting in the ");
});

/////////////////select class of robots//////////////////////
$('#player1Select > li').click(function(){
	let selected = $(this).text();
	
	switch (selected) {
		case "Terminator":
        selected = new Name.Terminator();
        break;
        case "Zippo":
        selected = new Name.Zippo();
        break;
        case "Panzer":
        selected = new Name.Panzer();
        break;
        case "Sherman":
        selected = new Name.Sherman();
        break;
        case "Stinger":
        selected = new Name.Stinger();
        break;
        case "Hornet":
        selected = new Name.Hornet();
        break;
	}
if (selected) {
	let robot1 = selected;
	console.log(robot1);
	players.push(robot1);
	$('#p1Output').append(robot1.name + " variant of " + robot1.type);
	$('#player1Select > li').find("button[type='button']").prop('disabled',true)
	$('#create1').one('click', function(){
	let player1 = selected;
	$('#battleArena').append(`<div id="introText1"> Here is Player 1's ${robot1.name}</div>`)
    })
  };
});


$('#player2Select > li').click(function(){
	let selected = $(this).text();
	
	switch (selected) {
		case "Terminator":
        selected = new Name.Terminator();
        break;
        case "Zippo":
        selected = new Name.Zippo();
        break;
        case "Panzer":
        selected = new Name.Panzer();
        break;
        case "Sherman":
        selected = new Name.Sherman();
        break;
        case "Stinger":
        selected = new Name.Stinger();
        break;
        case "Hornet":
        selected = new Name.Hornet();
        break;
	}
if (selected) {
	let robot2 = selected;
	console.log(robot2);
	players.push(robot2)
	$('#p2Output').append(robot2.name + " variant of " + robot2.type);
	$('#player2Select > li').find("button[type='button']").prop('disabled',true)
	$('#create2').one('click',function(){
	let player2 = selected;
	$('#battleArena').append(`<div id="introText2"> Here is Player 2's ${robot2.name}</div>`)
	console.log(players);
    });
  };
});



//////////////////attack button/////////////////////
$('#attackBtn').click(function(){
	console.log(players)
});



});
module.exports = players;
