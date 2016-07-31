inlets = 1;
outlets = 1;




devices = {};
device = {};

function loadbang() {
    this.tableType = -1;
    this.rowIndex = -1;
    this.colIndex = -1;
    this.initialized = false;
}

function initialize() {
    /****************************************************************
     * This section can be reused by js module
     ****************************************************************/
    var getDeviceId = function () {
        return "device"+id;
    };

    // Make reference to this global device
    devices = new Global("devices");
    id = (new LiveAPI("this_device")).id;
    device = devices[getDeviceId()];

    // Create the device if this is the first time it has been accessed
    if (!device) {
        devices[getDeviceId()] = {};
        device = devices[getDeviceId()];
    }
    /****************************************************************/


    if (device.initialized) {
        load();
    } else {
        if (!device.components) {
            device.components = [];
        }

        device.components.push({
            load: function () {
                load();
            }
        });
    }

}

function load() {
    if (this.rowIndex >= 0 && this.colIndex >= 0) {

        //post("loading with r="+this.rowIndex+" c="+this.colIndex);
        //post("\n");
        // Update the numbox with the stored value
        //outlet(0, parseFloat(getCell()));


        this.initialized = true;

        notifyValueChanged();

        device.markovChain.model.properties.probTable.target.observeRow(this.rowIndex, function () {
            notifyValueChanged();
        });


        //this.initialized = true;
    } else {
        post("load failed because position is not set");
        post("\n");
    }
}

function notifyValueChanged() {
    this.pendingUpdate = true;
    outlet(0, parseFloat(getCell()));
}

function setCell(value) {

    if (!this.initialized) {
        return;
    }

    var table;
    if (this.tableType === 1) {
        table = device.markovChain.model.properties.probTable.parent;
    } else {
        table = device.markovChain.model.properties.probTable.target;
    }

    table.setCell(this.rowIndex, this.colIndex, value);
}

function getCell() {
    var table;
    if (this.tableType === 1) {
        table = device.markovChain.model.properties.probTable.parent;
    } else {
        table = device.markovChain.model.properties.probTable.target;
    }

    return table.getCell(this.rowIndex, this.colIndex);
}


function msg_float(value) {

    if (this.pendingUpdate) {
        this.pendingUpdate = false;
    } else {
        setCell(value);
    }

    var maxBgColor   = [0.0, 1.0, 0.0];
    var minBgColor   = [1.0, 1.0, 1.0];

    var maxTextColor = [0.0, 0.0, 0.0];
    var minTextColor = [0.4, 0.4, 0.4];

    var numberBox = this.patcher.getnamed("probabilityNumberBox");

    numberBox.message(
        "activebgcolor",
        /*  minBgColor[1] + (maxBgColor[1] - minBgColor[1]) * value,
         minBgColor[2] + (maxBgColor[2] - minBgColor[2]) * value,
         minBgColor[3] + (maxBgColor[3] - minBgColor[3]) * value,  */
        1.0 - (0.7 * value),
        0.3 + (0.7 * value),
        0,
        1);

    numberBox.message(
        "textcolor",
        minTextColor[1] + (maxTextColor[1] - minTextColor[1]) * value,
        minTextColor[2] + (maxTextColor[2] - minTextColor[2]) * value,
        minTextColor[3] + (maxTextColor[3] - minTextColor[3]) * value,
        1);



}

function setTableType(type) {
    this.tableType = type;
}

function setPosition(row, col) {
    this.rowIndex = row;
    this.colIndex = col;

    //post("position set to r="+row+" c="+col+"");
    //post("\n");
}