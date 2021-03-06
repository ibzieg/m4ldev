inlets = 1;
outlets = 1;

var Device = require("device.js").Device;
var ProbabilityTable = require("probability_table.js").ProbabilityTable;

var deviceGlobals;

/*******************************************************************************
 *
 */
function loadbang() {
    this.tableType = -1;
    this.rowIndex = -1;
    this.colIndex = -1;
    this.initialized = false;
}

/*******************************************************************************
 *
 */
function initialize() {
    deviceGlobals = (new Device()).getGlobals();
    load();
}

/*******************************************************************************
 *
 */
function load() {
    //post("pfc: device loaded: "+deviceGlobals+"\n");
   finishLoad();
}

/*******************************************************************************
 *
 */
function finishLoad() {

    if (this.initialized != true   &&
        deviceGlobals      != undefined  &&
        this.tableType >= 0 &&
        this.rowIndex  >= 0 &&
        this.colIndex  >= 0 ){

        this.initialized = true;
        notifyValueChanged();
        getTable().observeRow(this.rowIndex, function () {
            notifyValueChanged();
        });
    }
}

/*******************************************************************************
 *
 */
function notifyValueChanged() {
    this.pendingUpdate = true;
    outlet(0, parseFloat(getCell()));
}

/*******************************************************************************
 *
 */
function setCell(value) {
    if (!this.initialized) {
        return;
    }
    getTable().setCell(this.rowIndex, this.colIndex, value);
}

/*******************************************************************************
 *
 */
function getCell() {
    return getTable().getCell(this.rowIndex, this.colIndex);
}

/*******************************************************************************
 *
 */
function msg_float(value) {

    if (this.pendingUpdate) {
        this.pendingUpdate = false;
    } else {
        setCell(value);
    }

    var colorFactor = value / 64;

    var maxBgColor   = [0.28, 0.6,  0.96];
    var minBgColor   = [1.0, 0.64, 0.0];

    var maxTextColor = [0.0, 0.0, 0.0];
    var minTextColor = [0.4, 0.4, 0.4];


    var numberBox = this.patcher.getnamed("probabilityNumberBox");

    numberBox.message(
        "activebgcolor",
          minBgColor[0] + (maxBgColor[0] - minBgColor[0]) * colorFactor,
          minBgColor[1] + (maxBgColor[1] - minBgColor[1]) * colorFactor,
          minBgColor[2] + (maxBgColor[2] - minBgColor[2]) * colorFactor,
        1);

    numberBox.message(
        "textcolor",
        minTextColor[0] + (maxTextColor[0] - minTextColor[0]) * colorFactor,
        minTextColor[1] + (maxTextColor[1] - minTextColor[1]) * colorFactor,
        minTextColor[2] + (maxTextColor[2] - minTextColor[2]) * colorFactor,
        1);

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
function setTableType(type) {
    this.tableType = type;
    finishLoad();
}

/*******************************************************************************
 *
 */
function setPosition(row, col) {
    this.rowIndex = row;
    this.colIndex = col;
    finishLoad();
}