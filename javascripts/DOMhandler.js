"use strict";

let Robot = require('./robots');
let Type = require('./types');
let Name = require('./names');


let selected = "";
let player1 = "";
let player2 = "";

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
	let player1 = selected;
	$('#p1Output').append(player1.name);
	$('#player1Select > li').find("button[type='button']").prop('disabled',true)
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
	let player2 = selected;
	$('#p2Output').append(player2.name);
	$('#player2Select > li').find("button[type='button']").prop('disabled',true)
	};
});
//////////////////attack button/////////////////////
// $('#attackBtn').click(function(){
// 		}
// });








});