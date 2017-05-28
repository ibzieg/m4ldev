
var Device = require("device.js").Device;
var DataModel = require("data_model.js").DataModel;

inlets = 1;
outlets = 0;

function initialize(deviceId) {
    this.deviceGlobals = Device.getGlobals(deviceId);
    try {
        this.initializeState();
    } catch (error) {
        post("Initialization failed: "+error+"\n");
    }
    this.getModel().subscribe(function() {
        this.compareState();
    }.bind(this));
}

function isInitialized() {
    return this.deviceGlobals;
}

function getModel() {
    return this.deviceGlobals.model;
}

function initializeState() {
    this.state = {};
    this.state = JSON.parse(JSON.stringify(this.getModel().rykParameters));

    this.updatePulseCountMin();
    this.updatePulseCountMax();

    this.updateMode(DataModel.MODE_GATE);
    this.updateMode(DataModel.MODE_MUTE);
    this.updateMode(DataModel.MODE_REPEAT);
    this.updateMode(DataModel.MODE_HOLD);

    this.updateOctaveMin();
    this.updateOctaveMax();

    this.updateNote(1);
    this.updateNote(2);
    this.updateNote(3);
    this.updateNote(4);
    this.updateNote(5);
    this.updateNote(6);
    this.updateNote(7);
}

function compareState() {
    this.comparePulseCount();

    this.compareMode(DataModel.MODE_GATE);
    this.compareMode(DataModel.MODE_MUTE);
    this.compareMode(DataModel.MODE_REPEAT);
    this.compareMode(DataModel.MODE_HOLD);

    this.compareOctave();

    this.compareNote(1);
    this.compareNote(2);
    this.compareNote(3);
    this.compareNote(4);
    this.compareNote(5);
    this.compareNote(6);
    this.compareNote(7);
}

////////////////////////////////////////////////////////////////////////////////

function comparePulseCount() {
    if (this.state.pulseCount.min !== this.getModel().rykParameters.pulseCount.min) {
        this.state.pulseCount.min = this.getModel().rykParameters.pulseCount.min;
        this.updatePulseCountMin();
    }
    if (this.state.pulseCount.max !== this.getModel().rykParameters.pulseCount.max) {
        this.state.pulseCount.max = this.getModel().rykParameters.pulseCount.max;
        this.updatePulseCountMax();
    }
}

function setPulseCountMin(value) {
    this.state.pulseCount.min = value;
    this.getModel().rykParameters.pulseCount.min = value;
}

function setPulseCountMax(value) {
    this.state.pulseCount.max = value; 
    this.getModel().rykParameters.pulseCount.max = value;
}

function updatePulseCountMin() {
    this.patcher.getnamed("pulse_count_min").message(this.state.pulseCount.min-1);
}

function updatePulseCountMax() {
    this.patcher.getnamed("pulse_count_max").message(this.state.pulseCount.max-1);
}



////////////////////////////////////////////////////////////////////////////////

function compareMode(mode) {
    if (this.state.mode[mode] !== this.getModel().rykParameters.mode[mode]) {
        this.state.mode[mode] = this.getModel().rykParameters.mode[mode];
        this.updateMode(mode);
    }
}

function setMode(mode,state) {
    this.state.mode[mode] = state;
    this.getModel().rykParameters.mode[mode] = state;
}

function updateMode(mode) {
    switch (mode) {
        case DataModel.MODE_GATE:
            this.patcher.getnamed("mode_gate").message(this.state.mode[mode]);
            break;
        case DataModel.MODE_MUTE:
            this.patcher.getnamed("mode_mute").message(this.state.mode[mode]);
            break;
        case DataModel.MODE_REPEAT:
            this.patcher.getnamed("mode_repeat").message(this.state.mode[mode]);
            break;
        case DataModel.MODE_HOLD:
            this.patcher.getnamed("mode_hold").message(this.state.mode[mode]);
            break;
    }
}

////////////////////////////////////////////////////////////////////////////////

function compareOctave() {
    if (this.state.octave.min !== this.getModel().rykParameters.octave.min) {
        this.state.octave.min = this.getModel().rykParameters.octave.min;
        this.updateOctaveMin();
    }
    if (this.state.octave.max !== this.getModel().rykParameters.octave.max) {
        this.state.octave.max = this.getModel().rykParameters.octave.max;
        this.updateOctaveMax();
    }
}

function setOctaveMin(value) {
    this.state.octave.min = value;
    this.getModel().rykParameters.octave.min = value;
}

function setOctaveMax(value) {
    this.state.octave.max = value;
    this.getModel().rykParameters.octave.max = value;
}

function updateOctaveMin() {
    this.patcher.getnamed("octave_min").message(this.state.octave.min);
}

function updateOctaveMax() {
    this.patcher.getnamed("octave_max").message(this.state.octave.max);
}

////////////////////////////////////////////////////////////////////////////////

function compareNote(note) {
    if (this.state.note[note] !== this.getModel().rykParameters.note[note]) {
        this.state.note[note] = this.getModel().rykParameters.note[note];
        this.updateNote(note);
    }
}

function setNote(note,state) {
    this.state.note[note] = state;
    this.getModel().rykParameters.note[note] = state;
}

function updateNote(note) {
    switch (note) {
        case 1:
            this.patcher.getnamed("note_1").message(this.state.note[note]);
            break;
        case 2:
            this.patcher.getnamed("note_2").message(this.state.note[note]);
            break;
        case 3:
            this.patcher.getnamed("note_3").message(this.state.note[note]);
            break;
        case 4:
            this.patcher.getnamed("note_4").message(this.state.note[note]);
            break;
        case 5:
            this.patcher.getnamed("note_5").message(this.state.note[note]);
            break;
        case 6:
            this.patcher.getnamed("note_6").message(this.state.note[note]);
            break;
        case 7:
            this.patcher.getnamed("note_7").message(this.state.note[note]);
            break;
    }
}
