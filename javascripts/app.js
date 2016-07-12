"use strict";
const $ = jQuery;

let Robot = require('./robots');
let Type = require('./types');
let Name = require('./names');
let DOM = require('./DOMhandler');


let BattleArena = {};


let player1 = new Name.Zippo();
console.log(player1);

let player2 = new Name.Panzer();
console.log(player2);

function calculatePlayerHealth(minHealth, maxHealth){
	var math = Math.floor(Math.random() * ((player1.maxHealth - player1.minHealth)) + player1.minHealth);
	console.log(math);
}
calculatePlayerHealth();

function calculateDamage(minDamage, maxDamage){
	var math = Math.floor(Math.random() * ((player1.maxDamage - player1.minDamage)) + player1.minDamage);
	console.log(math);
}
calculateDamage();

// console.log(Quad.player1)




