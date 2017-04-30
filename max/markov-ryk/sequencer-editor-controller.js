
var Device = require("device.js").Device;
var DataModel = require("data_model.js").DataModel;

inlets = 1;
outlets = 2;

function initialize(deviceId) {
    this.deviceGlobals = Device.getGlobals(deviceId);

    this.reset();

}

function isInitialized() {
    return this.deviceGlobals && this.nodeIndex > 0;
}

function getModel() {
    return this.deviceGlobals.model;
}