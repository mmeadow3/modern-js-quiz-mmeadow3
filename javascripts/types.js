"use strict";

let Robot = require('./robots');

let Type = {};

Type.Quad = function () {
  this.maxHealth = 100;
  this.minHealth = 80;
  this.minDamage = 50;
  this.maxDamage = 70;
  this.health = this.generateHealth(this.maxHealth, this.minHealth);
  this.damage = this.generateDamage(this.maxDamage, this.minDamage);
  this.standardWeapon = "Wedge";
};

Type.Quad.prototype = new Robot();

Type.Tank = function () {
  this.maxHealth = 150;
  this.minHealth = 120;
  this.minDamage = 50;
  this.maxDamage = 70;
  this.health = this.generateHealth(this.maxHealth, this.minHealth);
  this.damage = this.generateDamage(this.maxDamage, this.minDamage);
  this.standardWeapon = "Ram";
};

Type.Tank.prototype = new Robot();

Type.Drone = function () {
  this.maxHealth = 120;
  this.minHealth = 90;
  this.minDamage = 50;
  this.maxDamage = 70;
  this.health = this.generateHealth(this.maxHealth, this.minHealth);
  this.damage = this.generateDamage(this.maxDamage, this.minDamage);
  this.standardWeapon = "Bombs";
};

Type.Drone.prototype = new Robot();



module.exports = Type;
