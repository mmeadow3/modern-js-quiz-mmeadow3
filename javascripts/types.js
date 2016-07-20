"use strict";

let Robot = require('./robots');

let Type = {};

Type.Quad = function () {
  this.maxHealth = 100;
  this.minHealth = 80;
  this.health = this.generateHealth(this.maxHealth, this.minHealth);
  this.standardWeapon = "Wedge";
};

Type.Quad.prototype = new Robot();

Type.Tank = function () {
  this.maxHealth = 150;
  this.minHealth = 120;
  this.health = this.generateHealth(this.maxHealth, this.minHealth);
  this.standardWeapon = "Ram";
};

Type.Tank.prototype = new Robot();

Type.Drone = function () {
  this.maxHealth = 120;
  this.minHealth = 90;
  this.health = this.generateHealth(this.maxHealth, this.minHealth);
  this.standardWeapon = "Bombs";
};

Type.Drone.prototype = new Robot();



module.exports = Type;
