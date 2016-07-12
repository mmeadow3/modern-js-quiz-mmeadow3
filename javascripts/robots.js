"use strict";

let Robot = function(){
	this.health = 0;
	this.weapons = null;
	this.armor = null;
	this.name = "";
	this.damage = 0;

};


Robot.prototype.generateHealth = function (minHealth, maxHealth){
return Math.floor(Math.random() * ((maxHealth - minHealth)) + minHealth);
};

Robot.prototype.generateDamage = function (minDamage, maxDamage){
return Math.floor(Math.random() * ((maxDamage - minDamage)) + minDamage);
};



module.exports = Robot;