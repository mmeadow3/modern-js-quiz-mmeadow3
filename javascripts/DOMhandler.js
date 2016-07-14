"use strict";

let Robot = require('./robots');
let Type = require('./types');
let Name = require('./names');


let selected = {Robot, Type, Name};
var players = [];
var users = [];

/////////////////gets value from text input box//////////
$('#p1Select').click(function(){
	var p1 = $('#p1Input').val();
	$('#p1Output').prepend(p1 + " fighting in the ");
	users.push(p1);
});

$('#p2Select').click(function(){
	var p2 = $('#p2Input').val();
	$('#p2Output').prepend(p2 + " fighting in the ");
	users.push(p2);
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
	players.push(robot1);
	$('#p1Output').append(robot1.name + " variant of " + robot1.type);
	$('#player1Select > li').find("button[type='button']").prop('disabled',true);
	$('#create1').one('click', function(){
	let player1 = selected;
	$('#battleArena').append(`<div id="introText1"> Here is Player 1's ${robot1.name}<br>Your health is ${robot1.health}</div>`);
    });
  }
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
	players.push(robot2);
	$('#p2Output').append(robot2.name + " variant of " + robot2.type);
	$('#player2Select > li').find("button[type='button']").prop('disabled',true);
	$('#create2').one('click',function(){
	let player2 = selected;
	$('#battleArena').append(`<div id="introText2"> Here is Player 2's ${robot2.name}<br>Your health is ${robot2.health}</div>`);
    });
  }
});



// //////////////////attack button/////////////////////
$('#attackBtn').click(function(){
	let battleLog = $('#battleArena');
	  if (players[0].health > 0) {
	  	battleLog.append(`<div>You did ${players[0].damage} damage. Enemy health is now ` + (players[1].health-players[0].damage) + `</div>`);
	 } 
	 players[1].health = (players[1].health-players[0].damage);
	 players[0].health = (players[0].health-players[1].damage);
	  // if(players[1].health >= 0){  //////////,maybe remvoe this////////
		setTimeout(function(){
			if(players[1].health >= 0 && players[0].health >= 0) {
			battleLog.append(`<div> Enemy attacks with ${players[1].damage} damage. Your health is now ` + (players[0].health) + `</div>`);
			} else if (players[1].health <= 0) {
	    		battleLog.append(`<h4>You have deafeated the enemy ${players[1].name} with the ${players[0].name} ${players[0].type} using the ${players[1].standardWeapon} weapon</h4>`);
	    		$(this).prop("disabled",true);
	    	} else if (players[0].health <= 0  && players[0].health) {
		 	battleLog.append(`<div> Enemy attacks with ${players[1].damage} damage. Your health is now ` + (players[0].health) + `</div>`);
			battleLog.append(`<h4>You have been deafeated by the enemy ${players[1].name} ${players[0].type} using the ${players[1].standardWeapon} weapon</h4>`);
		}
	   
}, 2000);
		
});


module.exports = players;
