
var Device = require("device.js").Device;

inlets = 1;
outlets = 1;

function initialize(deviceId) {
    this.deviceGlobals = Device.getGlobals(deviceId);
}

function setPosition(list) {

}