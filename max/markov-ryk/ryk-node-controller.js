
var Device = require("device.js").Device;

inlets = 1;
outlets = 1;

function initialize(deviceId) {
    this.deviceGlobals = Device.getGlobals(deviceId);
}

function setNodeIndex(nodeIndex) {
    this.nodeIndex = nodeIndex;
}

function isInitialized() {
    return this.deviceGlobals && this.nodeIndex > 0;
}

function getModel() {
    return this.deviceGlobals.model;
}

function setProperty(propName, value) {
    if (this.isInitialized()) {
        var rykNode = this.getModel().rykNodes[this.nodeIndex];
        if (!rykNode) {
            rykNode = {};
        }
        if (rykNode[propName] !== value) {
            rykNode[propName] = value;
            this.getModel().rykNodes[this.nodeIndex] = rykNode;
            this.getModel().notify();
        }
    }
}

function setPulse(pulseCount) {
    this.setProperty("pulseCount", pulseCount);
}

function setMode(modeSymbol) {
    this.setProperty("mode",modeSymbol);
}

function setOctave(octaveIndex) {
    this.setProperty("octave",octaveIndex);
}

function setNote(scaleIndex) {
    this.setProperty("note",scaleIndex);
}

function setLock(lockState) {
    this.setProperty("lock",lockState);
}

