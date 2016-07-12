"use strict";

let Type = require('./types');

let Name = {};

Name.Terminator = function () {
  this.name = "Terminator";
  this.maxHealth = 100;
  this.minHealth = 80;
  this.minDamage = 50;
  this.maxDamage = 70;
};


Name.Terminator.prototype = new Type.Quad();

Name.Zippo = function () {
  this.name = "Zippo";
  this.maxHealth = 80;
  this.minHealth = 60;
  this.minDamage = 40;
  this.maxDamage = 60;
};

Name.Zippo.prototype = new Type.Quad();

Name.Panzer = function () {
  this.name = "Panzer";
  this.maxHealth = 130;
  this.minHealth = 110;
  this.minDamage = 50;
  this.maxDamage = 70;
};


Name.Panzer.prototype = new Type.Tank();

Name.Sherman = function () {
  this.name = "Sherman";
  this.maxHealth = 120;
  this.minHealth = 100;
  this.minDamage = 40;
  this.maxDamage = 60;
};

Name.Sherman.prototype = new Type.Tank();

Name.Stinger = function () {
  this.name = "Stinger";
  this.maxHealth = 90;
  this.minHealth = 80;
  this.minDamage = 50;
  this.maxDamage = 70;
};


Name.Stinger.prototype = new Type.Drone();

Name.Hornet = function () {
  this.name = 'Hornet';
  this.maxHealth = 85;
  this.minHealth = 65;
  this.minDamage = 40;
  this.maxDamage = 60;
};

Name.Hornet.prototype = new Type.Drone();


module.exports = Name;