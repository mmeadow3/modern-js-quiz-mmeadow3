"use strict";

let Type = require('./types');

let Name = {};

Name.Terminator = function () {
  this.name = "Terminator";
  this.type = "Quad";
  this.minDamage = 50;
  this.maxDamage = 70;
  this.damage = this.generateDamage(this.maxDamage, this.minDamage);
};

Name.Terminator.prototype = new Type.Quad();

Name.Zippo = function () {
  this.name = "Zippo";
  this.type = "Quad";
  this.minDamage = 65;
  this.maxDamage = 80;
  this.damage = this.generateDamage(this.maxDamage, this.minDamage);
};

Name.Zippo.prototype = new Type.Quad();

Name.Panzer = function () {
  this.name = "Panzer";
  this.type = "Tank";
  this.minDamage = 55;
  this.maxDamage = 70;
  this.damage = this.generateDamage(this.maxDamage, this.minDamage);
};

Name.Panzer.prototype = new Type.Tank();

Name.Sherman = function () {
  this.name = "Sherman";
  this.type = "Tank";
  this.minDamage = 70;
  this.maxDamage = 90;
  this.damage = this.generateDamage(this.maxDamage, this.minDamage);
};

Name.Sherman.prototype = new Type.Tank();

Name.Stinger = function () {
  this.name = "Stinger";
  this.type = "Drone";
  this.minDamage = 75;
  this.maxDamage = 95;
  this.damage = this.generateDamage(this.maxDamage, this.minDamage);
};


Name.Stinger.prototype = new Type.Drone();

Name.Hornet = function () {
  this.name = 'Hornet';
  this.type = "Drone";
  this.minDamage = 80;
  this.maxDamage = 95;
  this.damage = this.generateDamage(this.maxDamage, this.minDamage);
};

Name.Hornet.prototype = new Type.Drone();


module.exports = Name;
