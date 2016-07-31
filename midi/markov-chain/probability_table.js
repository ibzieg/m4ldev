/**
 * Created by ian on 7/30/16.
 */

function ProbabilityTable(options) {
    if (!options) {
        options = {};
    }
    this._options = options;
    this.rowObservers = [];
    this.setProbTable(options.data);
}
exports.ProbabilityTable = ProbabilityTable;

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.TABLE_SIZE = 8;

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.createProbTable = function() {
    var table = [];
    for (var i = 0; i < ProbabilityTable.TABLE_SIZE; i++) {
        var row = [];
        for (var j = 0; j < ProbabilityTable.TABLE_SIZE; j++) {
            row[j] = 0;
        }
        table.push(row);
    }
    return table;
};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.notifyMaxAttr = function () {
    if (typeof this._options.notifyMaxAttr == "function") {
        this._options.notifyMaxAttr();
    }
};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.setProbTable = function (data) {
    if (!data) {
        data = ProbabilityTable.createProbTable();
    }

    this.probTable = [];
    for (var i = 0; i < ProbabilityTable.TABLE_SIZE; i++) {
      this.setRow(i, data[i]);
    }
};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.getProbTable = function () {
    return this.probTable;
};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.getCell = function (row, col) {
    return this.probTable[row][col];
};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.setCell = function (rowIndex, columnIndex, value) {

    if (rowIndex < 0 || rowIndex > ProbabilityTable.TABLE_SIZE-1) {
        throw new Error("rowIndex is out of bounds");
    }

    if (columnIndex < 0 || columnIndex > ProbabilityTable.TABLE_SIZE-1) {
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
    for (i = 0; i < ProbabilityTable.TABLE_SIZE; i++) {
        if (row[i] < 0) {
            row[i] = 0;
        } else if (row[i] > 1) {
            row[i] = 1;
        }
        rowTotal += row[i];
    }

    // Normalize the row
    for (i = 0; i < ProbabilityTable.TABLE_SIZE; i++) {
        row[i] = row[i] / rowTotal;
    }

    var diff = row[columnIndex] - value;

    for (i = 0; i < ProbabilityTable.TABLE_SIZE; i++) {
        if (i != columnIndex) {
            row[i] = row[i] + (diff / (ProbabilityTable.TABLE_SIZE - 1.0));
        }
    }
    row[columnIndex] = value;


    this.notifyRow(rowIndex);
};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.observeRow = function (rowIndex, callback) {
    if (!this.rowObservers[rowIndex]) {
        this.rowObservers[rowIndex] = [];
    }
    this.rowObservers[rowIndex].push({
        callback:
            callback
    });
};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.getRow = function (row) {
    return this.probTable[row];
};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.setRow = function (rowIndex, rowData ) {
    this.probTable[rowIndex] = rowData;
    this.notifyRow(rowIndex);
};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.notifyRow = function (rowIndex) {
    if (!this.rowObservers[rowIndex]) {
        return;
    }

    for (var i = 0, n = this.rowObservers[rowIndex].length;
         i < n;
         i++) {
        this.rowObservers[rowIndex][i].callback();
    }

    this.notifyMaxAttr();
};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.seed = function() {

    var tableSize = ProbabilityTable.TABLE_SIZE;

    for (var i = 0; i < tableSize; i++) {
        var row = this.getRow(i);
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

        this.setRow(i, row);

    }

};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.identity = function() {

    var tableSize = ProbabilityTable.TABLE_SIZE;

    for (var i = 0; i < tableSize; i++) {
        var row = [];
        for (var j = 0; j < tableSize; j++) {
            if (i == j) {
                row[j] = 1;
            } else {
                row[j] = 0;
            }
        }
        this.setRow(i, row);
    }

};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.random = function() {
    var tableSize = ProbabilityTable.TABLE_SIZE;

    var value = 1.0 / tableSize;
    for (var i = 0; i < tableSize; i++) {
        var row = [];
        for (var j = 0; j < tableSize; j++) {
            row[j] = value;
        }
        this.setRow(i, row);
    }

};


////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.evolve = function(evolveAmount) {
    var tableSize = ProbabilityTable.TABLE_SIZE;

    for (var i = 0; i < tableSize; i++) {
        var row = this.getRow(i);

        var p = Math.round(Math.random() * (tableSize-1));

        var value = row[p];

        var range = Math.random() > 0.5 ? 1.0 - value : -1.0 * value;

        value += Math.random() * range * evolveAmount;

        this.setCell(i, p, value);
    }

};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.converge = function(evolveAmount) {
    var tableSize = ProbabilityTable.TABLE_SIZE;

    for (var i = 0; i < tableSize; i++) {
        var row = this.getRow(i);

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

        this.setCell(i, p, value);
    }

};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.diverge = function(evolveAmount) {
    var tableSize = ProbabilityTable.TABLE_SIZE;

    for (var i = 0; i < tableSize; i++) {
        var row = this.getRow(i);

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

        this.setCell(i, p, value);
    }

};


////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.shiftUp = function() {
    var nextRow = this.getRow(0);
    for (var i = ProbabilityTable.TABLE_SIZE-1; i >= 0; i--) {
        var swap = this.getRow(i);
        this.setRow(i, nextRow);
        nextRow = swap;
    }
};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.shiftDown = function() {
    var previousRow = this.getRow(ProbabilityTable.TABLE_SIZE-1);
    for (var i = 0; i < ProbabilityTable.TABLE_SIZE; i++) {
        var swap = this.getRow(i);
        this.setRow(i, previousRow);
        previousRow = swap;
    }
};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.shiftRight = function() {
    for (var i = 0; i < ProbabilityTable.TABLE_SIZE; i++) {
        var row = this.getRow(i);
        var previous = row[ProbabilityTable.TABLE_SIZE-1];
        for (var j = 0; j < ProbabilityTable.TABLE_SIZE; j++) {
            var swap = row[j];
            row[j] = previous;
            previous = swap;

        }
        this.setRow(i, row);
    }
};

////////////////////////////////////////////////////////////////////////////////
ProbabilityTable.prototype.shiftLeft = function() {
    for (var i = 0; i < ProbabilityTable.TABLE_SIZE; i++) {
        var row = this.getRow(i);
        var next = row[0];
        for (var j = ProbabilityTable.TABLE_SIZE-1; j >= 0; j--) {
            var swap = row[j];
            row[j] = next;
            next = swap;

        }
        this.setRow(i, row);
    }
};