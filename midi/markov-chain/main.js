inlets = 0;
outlets = 0;

ROW_COUNT = 8;

devices = {};
device = undefined;
id = 0;
storedModel = 0;

var tableSize = 8;


function bang() {
    post("main is bang");
    post("\n");
}

function initialize() {

    /****************************************************************
     * This section can be reused by js module
     ****************************************************************/
    var getDeviceId = function () {
        return "device" + id;
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

    // Initialize data model

    device.markovChain = {
        model: createModel()
    };



    if (storedModel) {
        device.markovChain.model.data = storedModel;
    }


    device.initialized = true;

    // Notify others that the device is initialized
    if (device.components) {
        for (var i = 0; i < device.components.length; i++) {
            try {
                device.components[i].load();
            } catch(error) {
                post("component["+i+"] failed to load: "+error);
                post("\n");
            }
        }
    }


}

function resetModel () {
    device.markovChain = {
        model: createModel()
    };

    notifyclients();
}

function createModel() {

    var model = {
        properties: {
/*            name: {
                observers: [],

                get: function () {
                    return model.data.name;
                },
                set: function (value) {
                    model.data.name = value;

                    for (var i = 0; i < model.properties.name.observers.length; i++) {
                        model.properties.name.observers[i].callback(value);
                    }
                    notifyclients();
                },
                observe: function (callback) {
                    post("observer added");
                    post("\n");
                    model.properties.name.observers.push({
                        callback: callback
                    });
                }
            },*/

            probTable: {
                target: new ProbabilityTable(),
                parent: new ProbabilityTable()


/*                //target: new ProbabilityTable(model.data.probTable.target),
                *//*{



                    getCell: function (row, col) {
                        return model.data.probTable.target[row][col];
                    },
                    setCell: function (rowIndex, columnIndex, value) {
                        //model.data.probTable.target[rowIndex][colIndex] = value;

                        if (rowIndex < 0 || rowIndex > tableSize-1) {
                            throw new Error("rowIndex is out of bounds");
                        }

                        if (columnIndex < 0 || columnIndex > tableSize-1) {
                            throw new Error("columnIndex is out of bounds");
                        }

                        if (value < 0) {
                            value = 0;
                        } else if (value > 1) {
                            value = 1;
                        }


                        var row = model.data.probTable.target[rowIndex];

                        if (row[columnIndex] == value) {
                            // The value was not changed
                            return;
                        }

                        var i, n;

                        var rowTotal = 0;

                        // Get the row sum and enforce boundaries
                        for (i = 0; i < tableSize; i++) {
                            if (row[i] < 0) {
                                row[i] = 0;
                            } else if (row[i] > 1) {
                                row[i] = 1;
                            }
                            rowTotal += row[i];
                        }

                        // Normalize the row
                        for (i = 0; i < tableSize; i++) {
                            row[i] = row[i] / rowTotal;
                        }

                        var diff = row[columnIndex] - value;

                        for (i = 0; i < tableSize; i++) {
                            if (i != columnIndex) {
                                row[i] = row[i] + (diff / (tableSize - 1.0));
                            }
                        }
                        row[columnIndex] = value;


                        model.properties.probTable.target.notifyRow(rowIndex);
                    },


                    rowObservers: [],

                    observeRow: function (rowIndex, callback) {
                        if (!model.properties.probTable.target.rowObservers[rowIndex]) {
                            model.properties.probTable.target.rowObservers[rowIndex] = [];
                        }
                        model.properties.probTable.target.rowObservers[rowIndex].push({
                            callback:
                                callback
                        });
                    },

                    getRow: function (row) {
                        return model.data.probTable.target[row];
                    },

                    setRow: function (rowIndex, rowData ) {
                        model.data.probTable.target[rowIndex] = rowData;
                        model.properties.probTable.target.notifyRow(rowIndex);
                    },

                    notifyRow: function (rowIndex) {
                        if (!model.properties.probTable.target.rowObservers[rowIndex]) {
                            return;
                        }

                        for (var i = 0, n = model.properties.probTable.target.rowObservers[rowIndex].length;
                             i < n;
                             i++) {
                            model.properties.probTable.target.rowObservers[rowIndex][i].callback();
                        }

                        notifyclients();
                    }

                },*//*

                parent: {
                    getCell: function (row, col) {
                        return model.data.probTable.parent[row][col];
                    },
                    setCell: function (row, col, value) {
                        model.data.probTable.parent[row][col] = value;
                        notifyclients();
                    }
                }*/
            }

        },

        events: {

        }

/*        data: {
            name: "model test name",

            probTable: {
                target: createProbTable(),
                parent: createProbTable()
            }
        }*/
    };
    //model.properties.probTable.target = new ProbabilityTable(model.data.probTable.target);



    return model;
}


function setvalueof(value) {
    if (device && device.markovChain) {
        //device.markovChain.model.data = JSON.parse(value); // TODO
        device.markovChain.model.properties.probTable.target.setProbTable(value.target);
        device.markovChain.model.properties.probTable.parent.setProbTable(value.parent);
    } else {
        storedModel = JSON.parse(value);
    }
}

function getvalueof() {
    try {
        //return JSON.stringify(device.markovChain.model.data);
        return JSON.stringify({
            target: device.markovChain.model.properties.probTable.target.getProbTable(),
            parent: device.markovChain.model.properties.probTable.parent.getProbTable()
        })
    } catch (error) {
        // nothing
    }
}

function msg_float(value) {
    try {
        device.markovChain.model.properties.name.set("dial position is " + value);

    } catch (error) {
        // nothing
    }
}


/*
Each property must have a get,set,observe

get:
- get the value

set:
- set the value and trigger event

observe:
- add an event listener

 */


function ProbabilityTable(data) {
    this.rowObservers = [];
    this.setProbTable(data);
}

ProbabilityTable.createProbTable = function() {
    var table = [];
    for (var i = 0; i < ROW_COUNT; i++) {
        var row = [];
        for (var j = 0; j < ROW_COUNT; j++) {
            row[j] = 0;
        }
        table.push(row);
    }
    return table;
};

ProbabilityTable.prototype.setProbTable = function (data) {
    if (!data) {
        data = ProbabilityTable.createProbTable();
    }
    this.probTable = data;
};

ProbabilityTable.prototype.getProbTable = function () {
    return this.probTable;
};


ProbabilityTable.prototype.getCell = function (row, col) {
    return this.probTable[row][col];
};

ProbabilityTable.prototype.setCell = function (rowIndex, columnIndex, value) {

    if (rowIndex < 0 || rowIndex > tableSize-1) {
        throw new Error("rowIndex is out of bounds");
    }

    if (columnIndex < 0 || columnIndex > tableSize-1) {
        throw new Error("columnIndex is out of bounds");
    }

    if (value < 0) {
        value = 0;
    } else if (value > 1) {
        value = 1;
    }


    var row = this.probTable[rowIndex];

    if (row[columnIndex] == value) {
        // The value was not changed
        return;
    }

    var i, n;

    var rowTotal = 0;

    // Get the row sum and enforce boundaries
    for (i = 0; i < tableSize; i++) {
        if (row[i] < 0) {
            row[i] = 0;
        } else if (row[i] > 1) {
            row[i] = 1;
        }
        rowTotal += row[i];
    }

    // Normalize the row
    for (i = 0; i < tableSize; i++) {
        row[i] = row[i] / rowTotal;
    }

    var diff = row[columnIndex] - value;

    for (i = 0; i < tableSize; i++) {
        if (i != columnIndex) {
            row[i] = row[i] + (diff / (tableSize - 1.0));
        }
    }
    row[columnIndex] = value;


    this.notifyRow(rowIndex);
};

ProbabilityTable.prototype.observeRow = function (rowIndex, callback) {
    if (!this.rowObservers[rowIndex]) {
        this.rowObservers[rowIndex] = [];
    }
    this.rowObservers[rowIndex].push({
        callback:
            callback
    });
};

ProbabilityTable.prototype.getRow = function (row) {
    return this.probTable[row];
};

ProbabilityTable.prototype.setRow = function (rowIndex, rowData ) {
    this.probTable[rowIndex] = rowData;
    this.notifyRow(rowIndex);
};

ProbabilityTable.prototype.notifyRow = function (rowIndex) {
    if (!this.rowObservers[rowIndex]) {
        return;
    }

    for (var i = 0, n = this.rowObservers[rowIndex].length;
         i < n;
         i++) {
        this.rowObservers[rowIndex][i].callback();
    }

    notifyclients();
};

