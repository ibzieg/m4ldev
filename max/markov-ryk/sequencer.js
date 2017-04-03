
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


function reset() {
    this.currentStep = 1;
    this.pulseCount = 0;
}

function bang() {

    var rykNode = this.getModel().rykNodes[this.currentStep];
    this.pulseCount++;

    switch (rykNode.mode) {
        case "Gate":
            if (this.pulseCount === 1) {
                outlet(1, rykNode.octave*12 + rykNode.note);
                outlet(0, "bang");
            }
            break;
        case "Mute":
            break;
        case "Repeat":
            outlet(1, rykNode.octave*12 + rykNode.note);
            outlet(0, "bang");
            break;
        case "Hold":
            // TODO
            break;
        default:
            break;
    }

    if (this.pulseCount >= rykNode.pulseCount) {
        this.pulseCount = 0;
        this.currentStep++;
        if (this.currentStep > DataModel.NODE_COUNT) {
            this.currentStep = 1;
        }
    }


}

function randomize() {
    this.getModel().randomizeRykNodes();
}