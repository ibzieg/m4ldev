
var Device = require("device.js").Device;

inlets = 1;
outlets = 5;

function initialize(deviceId) {
    this.deviceGlobals = Device.getGlobals(deviceId);
    this.updateAll();
}

function setNodeIndex(nodeIndex) {
    this.nodeIndex = nodeIndex;
    this.updateAll();
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

function getProperty(propName) {
    if (this.isInitialized()) {
        var rykNode = this.getModel().rykNodes[this.nodeIndex];
        return rykNode[propName];
    }
}

function updateAll() {
    if (this.isInitialized()) {
        updatePulse();
        updateMode();
        updateOctave();
        updateNote();
        updateLock();
    }
}

function setPulse(pulseCount) {
    this.setProperty("pulseCount", pulseCount);
}

function updatePulse() {
    outlet(0, "symbol", ""+this.getProperty("pulseCount"));
}

function setMode(modeSymbol) {
    this.setProperty("mode",modeSymbol);
}

function updateMode() {
    outlet(1, "symbol", this.getProperty("mode"));
}

function setOctave(octaveIndex) {
    this.setProperty("octave",octaveIndex);
}

function updateOctave() {
    outlet(2, "set", this.getProperty("octave"));
}

function setNote(scaleIndex) {
    this.setProperty("note",scaleIndex);
}

function updateNote() {
    outlet(3, "symbol", ""+this.getProperty("note"));
}

function setLock(lockState) {
    this.setProperty("lock",lockState);
}

function updateLock() {
    outlet(4, "set", this.getProperty("lock"));
}