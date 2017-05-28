
var Device = require("device.js").Device;

inlets = 1;
outlets = 1;


var Colors = [
    // *** Primary color:
    [ 32,154,108],
    [  0,248,154],
    [ 15,204,132],
    [ 41,108, 83],
    [ 30, 49, 42],
    // *** Secondary color (1):
    [200, 42, 98],
    [252,  0, 89],
    [235, 17, 94],
    [140, 53, 84],
    [ 64, 39, 48],
    // *** Secondary color (2):
    [228,159, 47],
    [255,158,  0],
    [255,165, 19],
    [159,122, 61],
    [ 73, 62, 45],
    // *** Complement color:
    [228,104, 47],
    [255, 79,  0],
    [255, 92, 19],
    [159, 92, 61],
    [ 73, 54, 45]
];



function setRow(row) {
    this.row = parseInt(row);
    try {
        this.initializeState();
    } catch (error) {
        post("ProbabilityCell::setRow::Initialization failed: "+error+"\n");
    }
}

function setColumn(column) {
    this.column = parseInt(column);
    try {
        this.initializeState();
    } catch (error) {
        post("ProbabilityCell::setColumn::Initialization failed: "+error+"\n");
    }
}

function initialize(deviceId) {
    this.deviceGlobals = Device.getGlobals(deviceId);
    try {
        this.initializeState();
    } catch (error) {
        post("ProbabilityCell::initialize::Initialization failed: "+error+"\n");
    }
    this.getModel().subscribe(function() {
        this.compareState();
    }.bind(this));
}

function isInitialized() {
    return this.deviceGlobals &&
           this.row >= 0 &&
           this.column >= 0;
}

function getModel() {
    return this.deviceGlobals.model;
}

function initializeState() {
    if (!this.isInitialized()) {
        return;
    }
    try {
        this.state = {
            probability: JSON.parse(this.getModel().probabilityTable[this.row][this.column])
        };
    } catch (error) {
        post("ProbabilityCell::initializeState::failed to parse model: "+error+"\n");
    }

    this.updateProbability();
    this.updateColor();

}

function compareState() {
    if (!this.isInitialized()) {
        return;
    }

    if (this.state.probability !== this.getModel().probabilityTable[this.row][this.column]) {
        this.state.probability = this.getModel().probabilityTable[this.row][this.column];
        this.updateProbability();
    }
    this.updateColor();
}

function setProbability(value) {
    this.state.probability = value;
    this.getModel().probabilityTable[this.row][this.column] = value;
    this.getModel().notify();

}

function updateProbability() {
    var numberBox = this.patcher.getnamed("probabilityNumberBox");
    numberBox.message(this.state.probability);

}

function updateColor() {
    var numberBox = this.patcher.getnamed("probabilityNumberBox");

    var rgbMax = [];
    var rgbMin = [];

    //var scaleFactor = this.state.probability / 8.0;

    var tableRow = this.getModel().probabilityTable[this.row];
    var total = 0;
    for (var i = 0, n = tableRow.length; i < n; i++) {
        total += tableRow[i];
    }

    if (total === 0) {
        total = 1;
    }

    var scaleFactor = this.state.probability / total;

    if (this.column === 0) {
        rgbMax = Colors[7];
        rgbMin = [140, 140, 140];
        if (this.state.probability === 0) {
            numberBox.message(
                "textcolor",
                235 / 255.0,
                235 / 255.0,
                235 / 255.0,
                1);
        } else {
            numberBox.message(
                "textcolor",
                (rgbMin[0] + (rgbMax[0] - rgbMin[0]) * scaleFactor) / 255.0,
                (rgbMin[1] + (rgbMax[1] - rgbMin[1]) * scaleFactor) / 255.0,
                (rgbMin[2] + (rgbMax[2] - rgbMin[2]) * scaleFactor) / 255.0,
                1);
        }
        numberBox.message(
            "activebgcolor",
            235 / 255.0,
            235 / 255.0,
            235 / 255.0,
            1);
    } else if (this.row === 0) {
        rgbMax = Colors[3];
        rgbMin = [140, 140, 140];
        if (this.state.probability === 0) {
            numberBox.message(
                "textcolor",
                235 / 255.0,
                235 / 255.0,
                235 / 255.0,
                1);
        } else {
            numberBox.message(
                "textcolor",
                (rgbMin[0] + (rgbMax[0] - rgbMin[0]) * scaleFactor) / 255.0,
                (rgbMin[1] + (rgbMax[1] - rgbMin[1]) * scaleFactor) / 255.0,
                (rgbMin[2] + (rgbMax[2] - rgbMin[2]) * scaleFactor) / 255.0,
                1);
        }
        numberBox.message(
            "activebgcolor",
            235 / 255.0,
            235 / 255.0,
            235 / 255.0,
            1);
    } else {
        rgbMax = Colors[2];
        rgbMin = [215, 215, 215];
        if (this.state.probability === 0) {
            numberBox.message(
                "textcolor",
                rgbMin[0] / 255.0,
                rgbMin[1] / 255.0,
                rgbMin[2] / 255.0,
                1);
        } else {
            numberBox.message(
                "textcolor",
                0,
                0,
                0,
                1);
        }
        numberBox.message(
            "activebgcolor",
            (rgbMin[0] + (rgbMax[0] - rgbMin[0])*scaleFactor) / 255.0,
            (rgbMin[1] + (rgbMax[1] - rgbMin[1])*scaleFactor) / 255.0,
            (rgbMin[2] + (rgbMax[2] - rgbMin[2])*scaleFactor) / 255.0,
            1);
    }
}


