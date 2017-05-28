
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
    this.state = JSON.parse(JSON.stringify(this.getModel().tableParameters));

    this.updateDestinationMin();
    this.updateDestinationMax();

    this.updateCanStop();
    this.updateCanLoop();
    this.updateEvolveAmount();
}

function compareState() {
    this.compareDestination();
    this.compareCanStop();
    this.compareCanLoop();
    this.compareEvolveAmount();
}

////////////////////////////////////////////////////////////////////////////////

function compareDestination() {
    if (this.state.destination.min !== this.getModel().tableParameters.destination.min) {
        this.state.destination.min = this.getModel().tableParameters.destination.min;
        this.updateDestinationMin();
    }
    if (this.state.destination.max !== this.getModel().tableParameters.destination.max) {
        this.state.destination.max = this.getModel().tableParameters.destination.max;
        this.updateDestinationMax();
    }
}

function setDestinationMin(value) {
    this.state.destination.min = value;
    this.getModel().tableParameters.destination.min = value;
}

function setDestinationMax(value) {
    this.state.destination.max = value;
    this.getModel().tableParameters.destination.max = value;
}

function updateDestinationMin() {
    this.patcher.getnamed("destination_min").message(this.state.destination.min-1);
}

function updateDestinationMax() {
    this.patcher.getnamed("destination_max").message(this.state.destination.max-1);
}

////////////////////////////////////////////////////////////////////////////////

function compareCanStop() {
    if (this.state.canStop !== this.getModel().tableParameters.canStop) {
        this.state.canStop = this.getModel().tableParameters.canStop;
        this.updateCanStop();
    }
}

function setCanStop(value) {
    this.state.canStop = value;
    this.getModel().tableParameters.canStop = value;
}

function updateCanStop() {
    this.patcher.getnamed("can_stop").message(this.state.canStop);
}

////////////////////////////////////////////////////////////////////////////////

function compareCanLoop() {
    if (this.state.canLoop !== this.getModel().tableParameters.canLoop) {
        this.state.canLoop = this.getModel().tableParameters.canLoop;
        this.updateCanLoop();
    }
}

function setCanLoop(value) {
    this.state.canLoop = value;
    this.getModel().tableParameters.canLoop = value;
}

function updateCanLoop() {
    this.patcher.getnamed("can_stop").message(this.state.canLoop);
}

////////////////////////////////////////////////////////////////////////////////

function compareEvolveAmount() {
    if (this.state.evolveAmount !== this.getModel().tableParameters.evolveAmount) {
        this.state.evolveAmount = this.getModel().tableParameters.evolveAmount;
        this.updateEvolveAmount();
    }
}

function setEvolveAmount(value) {
    this.state.evolveAmount = value;
    this.getModel().tableParameters.evolveAmount = value;
}

function updateEvolveAmount() {
    this.patcher.getnamed("evolve_amount").message(this.state.evolveAmount);
}

