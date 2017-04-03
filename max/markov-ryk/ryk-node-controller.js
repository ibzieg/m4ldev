
var Device = require("device.js").Device;

inlets = 1;
outlets = 5;

function initialize(deviceId) {
    this.deviceGlobals = Device.getGlobals(deviceId);
    this.postInitialization();
}

function setNodeIndex(nodeIndex) {
    this.nodeIndex = nodeIndex;
    this.postInitialization();
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
            this.state[propName] = value;
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

function postInitialization() {
    if (this.isInitialized()) {

        var rykNode = this.getModel().rykNodes[this.nodeIndex];
        this.state = {
            pulseCount: rykNode.pulseCount,
            mode: rykNode.mode,
            octave: rykNode.octave,
            note: rykNode.note,
            lock: rykNode.lock
        };

        this.updatePulse();
        this.updateMode();
        this.updateOctave();
        this.updateNote();
        this.updateLock();

        this.getModel().subscribe(function() {
            this.compareState();
        }.bind(this));

    }
}

function compareState() {
    var rykNode = this.getModel().rykNodes[this.nodeIndex];
    this.comparePulse(rykNode.pulseCount);
    this.compareMode(rykNode.mode);
    this.compareOctave(rykNode.octave);
    this.compareNote(rykNode.note);
    this.compareLock(rykNode.lock);
}

/***
 *
 * @param pulseCount
 */
function comparePulse(pulseCount) {
    if (this.state !== pulseCount) {
        this.state.pulseCount = pulseCount;
        this.updatePulse();
    }
}

function setPulse(pulseCount) {
    this.setProperty("pulseCount", pulseCount);
}

function updatePulse() {
    outlet(0, "symbol", ""+this.getProperty("pulseCount"));
}

/***
 *
 * @param mode
 */
function compareMode(mode) {
    if (this.state.mode !== mode) {
        this.state.mode = mode;
        this.updateMode(mode);
    }
}

function setMode(modeSymbol) {
    this.setProperty("mode",modeSymbol);
}

function updateMode() {
    outlet(1, "symbol", this.getProperty("mode"));
}

/***
 *
 * @param octaveIndex
 */
function compareOctave(octave) {
    if (this.state.octave !== octave) {
        this.state.octave = octave;
        this.updateOctave();
    }
}

function setOctave(octaveIndex) {
    this.setProperty("octave",octaveIndex);
}

function updateOctave() {
    outlet(2, "set", this.getProperty("octave"));
}

/***
 *
 * @param scaleIndex
 */
function compareNote(note) {
    if (this.state.note !== note) {
        this.state.note = note;
        updateNote();
    }
}

function setNote(scaleIndex) {
    this.setProperty("note",scaleIndex);
}

function updateNote() {
    outlet(3, "symbol", ""+this.getProperty("note"));
}

/***
 *
 * @param lockState
 */
function compareLock(lock) {
    if (this.state.lock !== lock) {
        this.state.lock = lock;
        updateLock()();
    }
}

function setLock(lockState) {
    this.setProperty("lock",lockState);
}

function updateLock() {
    outlet(4, "set", this.getProperty("lock"));
}