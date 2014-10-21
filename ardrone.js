/**
* @author: Joel Humberto Gómez Paredes
* @description: Script to fly a dron
* version: 1.0
*/

var drone = require('ar-drone');
var client = drone.createClient();

client.takeoff();

client.after(3000, function () {
	this.land();
});