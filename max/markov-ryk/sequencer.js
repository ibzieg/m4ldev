
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
    this.currentStep = this.getNextNodeIndex(0);
    this.pulseCount = 0;
}

function start() {
    if (this.currentStep === 0) {
        reset();
    }
}

function bang() {

    if (!this.currentStep) {
        return;
    }

    var rykNode = this.getModel().rykNodes[this.currentStep];
    this.pulseCount++;

    switch (rykNode.mode) {
        case "Gate":
            if (this.pulseCount === 1) {
                outlet(1, rykNode.octave*12 + rykNode.note);
                outlet(0, this.currentStep);
            }
            break;
        case "Mute":
            break;
        case "Repeat":
            outlet(1, rykNode.octave*12 + rykNode.note);
            outlet(0, this.currentStep);
            break;
        case "Hold":
            // TODO
            break;
        default:
            break;
    }

    if (this.pulseCount >= rykNode.pulseCount) {
        this.pulseCount = 0;
        try {
            this.currentStep = this.getNextNodeIndex(this.currentStep);
        } catch (error) {
            post("failed to get next node index: "+error+"\n");
        }
    }

}

function getNextNodeIndex(currentNodeIndex) {
    var probabilityRow = this.getModel().probabilityTable[currentNodeIndex];
    var rowLength = probabilityRow.length;
    var destinations = [];
    for (var destinationIndex = 0; destinationIndex < rowLength; destinationIndex++) {
        var probability = probabilityRow[destinationIndex];
        for (var p = 0; p < probability; p++) {
            destinations.push(destinationIndex);
        }
    }
    var randomDestinationIndex = Math.floor(Math.random() * destinations.length);
    return destinations[randomDestinationIndex];
}

function randomize() {
    this.getModel().randomizeRykNodes();
}

function randomizeTable() {
    this.getModel().randomizeTable();
}

function identityTable() {
    this.getModel().identityTable();
}

function evolveTable() {
    this.getModel().evolveTable();
}

function convergeTable() {
    this.getModel().convergeTable();
}

function divergeTable() {
    this.getModel().divergeTable();
}