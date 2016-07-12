"use strict";

let Robot = require('./robots');

let Type = {};

Type.Quad = function () {
  this.maxHealth = 100;
  this.minHealth = 80;
};

Type.Quad.prototype = new Robot();

Type.Tank = function () {
  this.maxHealth = 150;
  this.minHealth = 120;
};

Type.Tank.prototype = new Robot();

Type.Drone = function () {
  this.maxHealth = 120;
  this.minHealth = 90;
};

Type.Drone.prototype = new Robot();



module.exports = Type;