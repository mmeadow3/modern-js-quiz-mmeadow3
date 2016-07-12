"use strict";

const Robot = require('../robots');
const Type = require('../types');
const Name = require('../names');

describe("robot specs", function (){
	let testRobot = new Robot();
	it('Robot will be defined', function() {
		expect(testRobot).toBeDefined();
	});

	let testQuad = new Type.Quad();
	let testTank = new Type.Tank();
	let testDrone = new Type.Drone();
	it('should have 3 robot type functions', function() {
      expect(testQuad).toBeDefined();
      expect(testTank).toBeDefined();
      expect(testDrone).toBeDefined();
    });

	let testTerminator = new Type.Quad();
	let testZippo = new Type.Quad();
	let testPanzer = new Type.Tank();
	let testSherman = new Type.Tank();
	let testStinger = new Type.Drone();
	let testHornet = new Type.Drone();
	it('Each type should have 2 name functions assigned to it', function() {
      expect(testTerminator).toBeDefined();
      expect(testZippo).toBeDefined();
      expect(testSherman).toBeDefined();
      expect(testPanzer).toBeDefined();
      expect(testStinger).toBeDefined();
      expect(testHornet).toBeDefined();
    
    });

	it('Each should have defined health and damage', function(){
		expect(testRobot.health).toBeDefined();
		expect(testRobot.damage).toBeDefined();
	});


});





