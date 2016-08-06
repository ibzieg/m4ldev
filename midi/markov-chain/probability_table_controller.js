inlets = 1;
outlets = 1;

devices = {};
device = {};

var tableSize = 8;

function loadbang() {
    this.initialized = false;
    this.tableType = -1;
    this.evolveAmount = 0.5;
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

/*    // Create the device if this is the first time it has been accessed
    if (!device) {
        devices[getDeviceId()] = {};
        device = devices[getDeviceId()];
    }*/
    /****************************************************************/


/*    if (device.initialized) {
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
    }*/

    load();
    outlet(0,"initialize");

}

////////////////////////////////////////////////////////////////////////////////
function load() {
    //post("prob table ctlr loaded\n");
    this.initialized = true;
}

////////////////////////////////////////////////////////////////////////////////
function setEvolveAmount(amount) {
    if (amount < 0.0) {
        amount = 0.0;
    } else if (amount > 1.0) {
        amount = 1.0;
    }

    this.evolveAmount = amount;
}

////////////////////////////////////////////////////////////////////////////////
function setTableType(type) {
    this.tableType = type;
}

////////////////////////////////////////////////////////////////////////////////
function getTable() {
    var table;
    if (this.tableType === 1) {
        table = device.markovChain.model.properties.probTable.parent;
    } else {
        table = device.markovChain.model.properties.probTable.target;
    }
    return table;
}

////////////////////////////////////////////////////////////////////////////////
function seed() {
    getTable().seed();
}

////////////////////////////////////////////////////////////////////////////////
function identity() {
    getTable().identity();
}

////////////////////////////////////////////////////////////////////////////////
function random() {
    getTable().random();
}

////////////////////////////////////////////////////////////////////////////////
function evolve() {
    getTable().evolve(evolveAmount);
}

////////////////////////////////////////////////////////////////////////////////
function converge() {
    getTable().converge(evolveAmount);
}

////////////////////////////////////////////////////////////////////////////////
function diverge() {
    getTable().diverge(evolveAmount);
}

////////////////////////////////////////////////////////////////////////////////
function shiftUp() {
    getTable().shiftUp();
}

////////////////////////////////////////////////////////////////////////////////
function shiftDown() {
    getTable().shiftDown();
}

////////////////////////////////////////////////////////////////////////////////
function shiftRight() {
    getTable().shiftRight();
}

////////////////////////////////////////////////////////////////////////////////
function shiftLeft() {
    getTable().shiftLeft();
}