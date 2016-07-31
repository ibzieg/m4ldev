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

////////////////////////////////////////////////////////////////////////////////
function load() {
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

    for (var i = 0; i < tableSize; i++) {
        var row = getTable().getRow(i);
        var remaining = 1.0;

        // Generate N random numbers with sum 1.0
        for (var j = 0; j < tableSize; j++) {
            if (j == tableSize-1) {
                row[j] = remaining;
            } else {
                row[j] = remaining * Math.random();
                remaining -= row[j];
            }
        }

        // Randomly swap elements
        for (var k = 0, n = tableSize*tableSize*tableSize; k < n; k++) {
            var p = Math.round(Math.random() * (tableSize-1));
            var q = Math.round(Math.random() * (tableSize-1));

            var swap = row[p];
            row[p] = row[q];
            row[q] = swap;
        }

        getTable().setRow(i, row);

    }

}

////////////////////////////////////////////////////////////////////////////////
function identity() {

    var table = getTable();

    table.setRow(0, [1, 0, 0, 0, 0, 0, 0, 0]);
    table.setRow(1, [0, 1, 0, 0, 0, 0, 0, 0]);
    table.setRow(2, [0, 0, 1, 0, 0, 0, 0, 0]);
    table.setRow(3, [0, 0, 0, 1, 0, 0, 0, 0]);
    table.setRow(4, [0, 0, 0, 0, 1, 0, 0, 0]);
    table.setRow(5, [0, 0, 0, 0, 0, 1, 0, 0]);
    table.setRow(6, [0, 0, 0, 0, 0, 0, 1, 0]);
    table.setRow(7, [0, 0, 0, 0, 0, 0, 0, 1]);

}

////////////////////////////////////////////////////////////////////////////////
function random() {
    var table = getTable();
    var value = 1.0 / tableSize;
    for (var i = 0; i < tableSize; i++) {
        var row = [];
        for (var j = 0; j < tableSize; j++) {
            row[j] = value;
        }
        table.setRow(i, row);
    }

}

////////////////////////////////////////////////////////////////////////////////
function evolve() {
    var table = getTable();

    for (var i = 0; i < tableSize; i++) {
        var row = table.getRow(i);

        var p = Math.round(Math.random() * (tableSize-1));

        var value = row[p];

        var range = Math.random() > 0.5 ? 1.0 - value : -1.0 * value;

        value += Math.random() * range * evolveAmount;

        table.setCell(i, p, value);
    }

}

////////////////////////////////////////////////////////////////////////////////
function converge() {

    var table = getTable();

    for (var i = 0; i < tableSize; i++) {
        var row = table.getRow(i);

        // Find largest element
        var p = 0;
        for (var j = 0; j < tableSize; j++) {
            if (row[j] > row[p]) {
                p = j;
            }
        }

        var value = row[p];

        var range = 1.0 - value;

        value += Math.random() * range * evolveAmount;

        table.setCell(i, p, value);
    }

}

////////////////////////////////////////////////////////////////////////////////
function diverge() {

    var table = getTable();

    for (var i = 0; i < tableSize; i++) {
        var row = table.getRow(i);

        // Find largest element
        var p = 0;
        for (var j = 0; j < tableSize; j++) {
            if (row[j] > row[p]) {
                p = j;
            }
        }

        var value = row[p];

        var range = -1.0 * value;

        value += Math.random() * range * evolveAmount;

        table.setCell(i, p, value);
    }

}

////////////////////////////////////////////////////////////////////////////////
function shiftUp() {
    var table = getTable();
    var nextRow = table.getRow(0);
    for (var i = tableSize-1; i >= 0; i--) {
        var swap = table.getRow(i);
        table.setRow(i, nextRow);
        nextRow = swap;
    }
}

////////////////////////////////////////////////////////////////////////////////
function shiftDown() {
    var table = getTable();
    var previousRow = table.getRow(tableSize-1);
    for (var i = 0; i < tableSize; i++) {
        var swap = table.getRow(i);
        table.setRow(i, previousRow);
        previousRow = swap;
    }
}

////////////////////////////////////////////////////////////////////////////////
function shiftRight() {
    var table = getTable();
    for (var i = 0; i < tableSize; i++) {
        var row = table.getRow(i);
        var previous = row[tableSize-1];
        for (var j = 0; j < tableSize; j++) {
            var swap = row[j];
            row[j] = previous;
            previous = swap;

        }
        table.setRow(i, row);
    }
}

////////////////////////////////////////////////////////////////////////////////
function shiftLeft() {
    var table = getTable();
    for (var i = 0; i < tableSize; i++) {
        var row = table.getRow(i);
        var next = row[0];
        for (var j = tableSize-1; j >= 0; j--) {
            var swap = row[j];
            row[j] = next;
            next = swap;

        }
        table.setRow(i, row);
    }
}