inlets = 1;
outlets = 1;

var DeviceLoader = require("device_loader.js");

function initialize() {
    this.device = DeviceLoader.getDevice(function () {
        load();
    });
}

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
function load() {
    if (this.rowIndex >= 0 && this.colIndex >= 0) {

        this.initialized = true;

        notifyValueChanged();

        this.device.markovChain.model.properties.probTable.target.observeRow(this.rowIndex, function () {
            notifyValueChanged();
        });

    } else {
        post("load failed because position is not set");
        post("\n");
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

    var table;
    if (this.tableType === 1) {
        table = this.device.markovChain.model.properties.probTable.parent;
    } else {
        table = this.device.markovChain.model.properties.probTable.target;
    }

    table.setCell(this.rowIndex, this.colIndex, value);
}

/*******************************************************************************
 *
 */
function getCell() {
    var table;
    if (this.tableType === 1) {
        table = this.device.markovChain.model.properties.probTable.parent;
    } else {
        table = this.device.markovChain.model.properties.probTable.target;
    }

    return table.getCell(this.rowIndex, this.colIndex);
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

    var maxBgColor   = [0.28, 0.6,  0.96];
    var minBgColor   = [1.0, 0.64, 0.0];

    var maxTextColor = [0.0, 0.0, 0.0];
    var minTextColor = [0.4, 0.4, 0.4];


    var numberBox = this.patcher.getnamed("probabilityNumberBox");

    numberBox.message(
        "activebgcolor",
          minBgColor[0] + (maxBgColor[0] - minBgColor[0]) * value,
          minBgColor[1] + (maxBgColor[1] - minBgColor[1]) * value,
          minBgColor[2] + (maxBgColor[2] - minBgColor[2]) * value,
        1);

    numberBox.message(
        "textcolor",
        minTextColor[0] + (maxTextColor[0] - minTextColor[0]) * value,
        minTextColor[1] + (maxTextColor[1] - minTextColor[1]) * value,
        minTextColor[2] + (maxTextColor[2] - minTextColor[2]) * value,
        1);

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
function setPosition(row, col) {
    this.rowIndex = row;
    this.colIndex = col;
}