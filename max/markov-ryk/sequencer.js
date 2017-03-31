
var Device = require("device.js").Device;

inlets = 1;
outlets = 2;

var MAX_STEPS = 8;

function initialize(deviceId) {
    this.deviceGlobals = Device.getGlobals(deviceId);

    this.currentStep = 0;

}

function isInitialized() {
    return this.deviceGlobals && this.nodeIndex > 0;
}

function getModel() {
    return this.deviceGlobals.model;
}


function reset() {
    this.currentStep = 0;
}

function step() {
    this.currentStep++;
    if (this.currentStep > MAX_STEPS) {
        this.currentStep = 1;
    }

    var rykNode = this.getModel().rykNodes[this.currentStep];

    outlet(1, rykNode.octave*12 + rykNode.note);
    outlet(0, "bang");

}

