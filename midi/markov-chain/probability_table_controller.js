inlets = 1;
outlets = 1;

var Device = require("device.js").Device;
var ProbabilityTable = require("probability_table.js").ProbabilityTable;

var deviceGlobals;

/*******************************************************************************
 *
 */
function loadbang() {
    this.initialized = false;
    this.tableType = -1;
    this.evolveAmount = 0.5;
}
/*******************************************************************************
 *
 */
function initialize() {
    deviceGlobals = (new Device()).getGlobals();
    updateGlobalEvolveAmount();
    this.initialized = true;
    outlet(0,"initialize");
}

/*******************************************************************************
 *
 */
function setEvolveAmount(amount) {
    if (amount < 0.0) {
        amount = 0.0;
    } else if (amount > 1.0) {
        amount = 1.0;
    }

    this.evolveAmount = amount;

    if (deviceGlobals) {
        updateGlobalEvolveAmount();
    }

}

function updateGlobalEvolveAmount() {
    if (this.tableType === ProbabilityTable.TABLE_TYPE_PARENT) {
        deviceGlobals.markovChain.model.parentEvolveAmount = this.evolveAmount;
    } else {
        deviceGlobals.markovChain.model.targetEvolveAmount = this.evolveAmount;
    }
}

/*******************************************************************************
 *
 */
function setTableType(type) {
    this.tableType = type;
}

/*******************************************************************************
 *
 */
function getTable() {
    var table;
    if (this.tableType === ProbabilityTable.TABLE_TYPE_PARENT) {
        table = deviceGlobals.markovChain.model.parentTable;
    } else {
        table = deviceGlobals.markovChain.model.targetTable;
    }
    return table;
}

/*******************************************************************************
 *
 */
function seed() {
    getTable().seed();
}

/*******************************************************************************
 *
 */
function identity() {
    getTable().identity();
}

/*******************************************************************************
 *
 */
function random() {
    getTable().random();
}

/*******************************************************************************
 *
 */
function evolve() {
    getTable().evolve(evolveAmount);
}

/*******************************************************************************
 *
 */
function converge() {
    getTable().converge(evolveAmount);
}

/*******************************************************************************
 *
 */
function diverge() {
    getTable().diverge(evolveAmount);
}

/*******************************************************************************
 *
 */
function shiftUp() {
    getTable().shiftUp();
}

/*******************************************************************************
 *
 */
function shiftDown() {
    getTable().shiftDown();
}

/*******************************************************************************
 *
 */
function shiftRight() {
    getTable().shiftRight();
}

/*******************************************************************************
 *
 */
function shiftLeft() {
    getTable().shiftLeft();
}