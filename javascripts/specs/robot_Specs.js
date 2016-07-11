"use strict";

const Robot = require('../robots');

describe("robot specs", function (){
	let testRobot = new Robot();

	it("robot should be defined", function(){
		expect(testRobot).toBeDefined();
	});
});





