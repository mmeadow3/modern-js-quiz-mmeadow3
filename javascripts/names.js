"use strict";

let Type = require('./types');

let Name = {};

Name.Terminator = function () {
  this.name = "Terminator";
  this.type = "Quad";
};

Name.Terminator.prototype = new Type.Quad();

Name.Zippo = function () {
  this.name = "Zippo";
  this.type = "Quad";
};

Name.Zippo.prototype = new Type.Quad();

Name.Panzer = function () {
  this.name = "Panzer";
  this.type = "Tank";
};

Name.Panzer.prototype = new Type.Tank();

Name.Sherman = function () {
  this.name = "Sherman";
  this.type = "Tank";
};

Name.Sherman.prototype = new Type.Tank();

Name.Stinger = function () {
  this.name = "Stinger";
  this.type = "Drone";
};


Name.Stinger.prototype = new Type.Drone();

Name.Hornet = function () {
  this.name = 'Hornet';
  this.type = "Drone";
};

Name.Hornet.prototype = new Type.Drone();


module.exports = Name;