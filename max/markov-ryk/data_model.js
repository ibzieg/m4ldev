
function DataModel() {
    this.subscribers = [];

    this.rykNodes = [];
    this.rykNodes[1] = DataModel.defaultRykNode(1);
    this.rykNodes[2] = DataModel.defaultRykNode(2);
    this.rykNodes[3] = DataModel.defaultRykNode(3);
    this.rykNodes[4] = DataModel.defaultRykNode(4);
    this.rykNodes[5] = DataModel.defaultRykNode(5);
    this.rykNodes[6] = DataModel.defaultRykNode(6);
    this.rykNodes[7] = DataModel.defaultRykNode(7);
    this.rykNodes[8] = DataModel.defaultRykNode(8);

    // Randomization Parameters
    this.rykParameters = {
        pulseCount: {
            min: 1,
            max: 4
        },
        mode: {
            "Gate": 1,
            "Mute": 0,
            "Repeat": 1,
            "Hold": 0
        },
        octave: {
            min: 1,
            max: 4
        },
        note: {
            "1": 1,
            "2": 0,
            "3": 1,
            "4": 1,
            "5": 1,
            "6": 0,
            "7": 1
        }
    };

    this.tableParameters = {
        canStop: 0,
        canLoop: 0,
        destination: {
            min: 1,
            max: 4
        },
        evolveAmount: 2
    };

    this.identityTable();

}
exports.DataModel = DataModel;

DataModel.NODE_COUNT = 8;

DataModel.MODE_GATE = "Gate";
DataModel.MODE_MUTE = "Mute";
DataModel.MODE_REPEAT = "Repeat";
DataModel.MODE_HOLD = "Hold";

DataModel.defaultRykNode = function(note) {
    return {
        "pulseCount": 1,
        "mode": "Gate",
        "octave": 3,
        "note": note,
        "lock": 0
    };
};

DataModel.prototype.subscribe = function(callback) {
    if (typeof callback === "function") {
        this.subscribers.push(callback);
    } else {
        post("Error: callback function required");
    }
};

DataModel.prototype.notify = function() {
    for (var i = 0, n = this.subscribers.length; i < n; i++) {
        var callback = this.subscribers[i];
        if (typeof callback === "function") {
            try {
                callback();
            } catch (error) {
                post("Error: subscribers["+i+"] failed:"+error+"\n");
            }
        } else {
            post("Error: subscribers["+i+"] is not a function\n");
        }
    }
};

////////////////////////////////////////////////////////////////////////////////
// Ryk Sequence
////////////////////////////////////////////////////////////////////////////////

DataModel.prototype.getRandomPulseCount = function() {
    var min = this.rykParameters.pulseCount.min;
    var max = this.rykParameters.pulseCount.max;
    if (max < min) {
        max = min;
    }

    var options = [];
    var i;

    for (i = min; i <= max; i++) {
        // If max is even, only include even pulse counts.
        // If max is odd, include all possibilities.
        if (i === 1 ||
            (max % 2 === 0 && i % 2 === 0) ||
            max % 2 === 1) {
            options.push(i);
        }
    }

    min = 0;
    max = options.length-1;

    return options[Math.floor(Math.random() * (max - min + 1)) + min];
};

DataModel.prototype.getRandomMode = function(pulseCount) {
    var random = Math.random();
    if (random < 0.05 && this.rykParameters.mode[DataModel.MODE_MUTE] > 0) {
        return DataModel.MODE_MUTE;
    } else if (random >= 0.80 && pulseCount < 5 && this.rykParameters.mode[DataModel.MODE_REPEAT] > 0) {
        return DataModel.MODE_REPEAT;
    } else {
        return DataModel.MODE_GATE;
    }
};

DataModel.prototype.getRandomOctave = function() {
    var min = this.rykParameters.octave.min;
    var max = this.rykParameters.octave.max;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

DataModel.prototype.getRandomNote = function() {
    var scale = [];
    if (this.rykParameters.note[1] > 0) scale.push(1);
    if (this.rykParameters.note[2] > 0) scale.push(2);
    if (this.rykParameters.note[3] > 0) scale.push(3);
    if (this.rykParameters.note[4] > 0) scale.push(4);
    if (this.rykParameters.note[5] > 0) scale.push(5);
    if (this.rykParameters.note[6] > 0) scale.push(6);
    if (this.rykParameters.note[7] > 0) scale.push(7);
    var min = 0;
    var max = scale.length-1;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return scale[random];
};

DataModel.prototype.randomizeRykNodes = function() {
    post("randomnizeRykNodes\n");
  for (var i = 1; i <= DataModel.NODE_COUNT; i++)  {
      var rykNode = this.rykNodes[i];
      if (!rykNode.lock) {
          rykNode.pulseCount = this.getRandomPulseCount();
          rykNode.mode = this.getRandomMode(rykNode.pulseCount);
          rykNode.octave = this.getRandomOctave();
          rykNode.note = this.getRandomNote();
      }
      post("rykNode["+i+"].pulseCount = "+rykNode.pulseCount+"\n");
  }
  this.notify();
};

////////////////////////////////////////////////////////////////////////////////
// Probability Table
////////////////////////////////////////////////////////////////////////////////

DataModel.prototype.identityTable = function () {
    this.probabilityTable = [
        [0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0]
    ];
    this.notify();
};

DataModel.prototype.randomizeTable = function () {
    var canStop = this.tableParameters.canStop;
    var canLoop = this.tableParameters.canLoop;
    var minDestinations =  this.tableParameters.destination.min;
    var maxDestinations =  this.tableParameters.destination.max;

    for (var rowIndex = 0; rowIndex <= DataModel.NODE_COUNT; rowIndex++) {
        var row = [];
        var i;
        for (i = 0; i <= DataModel.NODE_COUNT; i++) {
            row.push(0);
        }

        var destinationCount = Math.floor(Math.random() * (maxDestinations - minDestinations + 1)) + minDestinations;

        var minIndex = canStop ? 0 : 1;
        var maxIndex = DataModel.NODE_COUNT;

        for (i = 0; i < destinationCount; i++) {
            var index = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
            while (!canLoop && index === rowIndex && maxIndex > 1) {
                // prevent looping the same note
                index = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
            }
            var probability = Math.floor(Math.random() * DataModel.NODE_COUNT) + 1;
            row[index] = probability;
        }

        this.probabilityTable[rowIndex] = row;
    }

    this.notify();

};

DataModel.prototype.evolveTable = function () {
    var canStop = this.tableParameters.canStop;
    var canLoop = this.tableParameters.canLoop;
    var minDestinations =  this.tableParameters.destination.min;
    var maxDestinations =  this.tableParameters.destination.max;
    var evolveAmount = this.tableParameters.evolveAmount;

    for (var rowIndex = 0; rowIndex <= DataModel.NODE_COUNT; rowIndex++) {
        var row = this.probabilityTable[rowIndex];

        var destinationCount = 0;

        for (var columnIndex = canStop ? 0 : 1; columnIndex <= DataModel.NODE_COUNT; columnIndex++) {
            if (row[columnIndex] > 0) {
                var sign = Math.random() > 0.5 ? -1 : 1;
                var amount = Math.floor(Math.random() * evolveAmount) + 1;
                var value = row[columnIndex] + sign*amount;
                if (value < 0) {
                    value = 0;
                } else if (value > DataModel.NODE_COUNT) {
                    value = DataModel.NODE_COUNT;
                }

                if (value > 0) {
                    destinationCount++;
                }

                row[columnIndex] = value;
            }

        }

        if (destinationCount < maxDestinations) {
            // if we have fewer than max destinations, add another destination
            var minIndex = canStop ? 0 : 1;
            var maxIndex = DataModel.NODE_COUNT;
            var index = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
            while ((!canLoop && index === rowIndex && maxIndex > 1) || row[index] > 0) {
                index = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
            }
            row[index] = Math.floor(Math.random() * evolveAmount) + 1;
        }

        this.probabilityTable[rowIndex] = row;
    }

    this.notify();
};

DataModel.prototype.convergeTable = function () {
    var canStop = this.tableParameters.canStop;
    var canLoop = this.tableParameters.canLoop;
    var minDestinations =  this.tableParameters.destination.min;
    var maxDestinations =  this.tableParameters.destination.max;
    var evolveAmount = this.tableParameters.evolveAmount;

    for (var rowIndex = 0; rowIndex <= DataModel.NODE_COUNT; rowIndex++) {
        var row = this.probabilityTable[rowIndex];

        var columnIndex;
        var maxValue = -1;
        var maxIndex;

        for (columnIndex = 0; columnIndex <= DataModel.NODE_COUNT; columnIndex++) {
            if (row[columnIndex] > maxValue) {
                maxValue = row[columnIndex];
                maxIndex = columnIndex;
            }
        }

        for (columnIndex = 0; columnIndex <= DataModel.NODE_COUNT; columnIndex++) {
            if (row[columnIndex] > 0) {
                var sign;
                if (columnIndex === maxIndex) {
                    sign = 1;
                } else if (row[columnIndex] > 0) {
                    sign = -1;
                }

                var amount = Math.floor(Math.random() * evolveAmount) + 1;
                var value = row[columnIndex] + sign * amount;
                if (value < 0) {
                    value = 0;
                } else if (value > DataModel.NODE_COUNT) {
                    value = DataModel.NODE_COUNT;
                }
                row[columnIndex] = value;
            }

        }

        this.probabilityTable[rowIndex] = row;
    }

    this.notify();
};


DataModel.prototype.divergeTable = function () {
    var canStop = this.tableParameters.canStop;
    var canLoop = this.tableParameters.canLoop;
    var minDestinations =  this.tableParameters.destination.min;
    var maxDestinations =  this.tableParameters.destination.max;
    var evolveAmount = this.tableParameters.evolveAmount;

    for (var rowIndex = 0; rowIndex <= DataModel.NODE_COUNT; rowIndex++) {
        var row = this.probabilityTable[rowIndex];

        var columnIndex;
        var maxValue = -1;
        var maxIndex;

        for (columnIndex = 0; columnIndex <= DataModel.NODE_COUNT; columnIndex++) {
            if (row[columnIndex] > maxValue) {
                maxValue = row[columnIndex];
                maxIndex = columnIndex;
            }
        }

        for (columnIndex = 0; columnIndex <= DataModel.NODE_COUNT; columnIndex++) {

            var sign;
            if (columnIndex === maxIndex) {
                sign = -1;
            } else if (row[columnIndex] > 0) {
                sign = 1;
            }

            var amount = Math.floor(Math.random() * evolveAmount) + 1;
            var value = row[columnIndex] + sign * amount;
            if (value < 0) {
                value = 0;
            } else if (value > DataModel.NODE_COUNT) {
                value = DataModel.NODE_COUNT;
            }
            row[columnIndex] = value;

        }

        this.probabilityTable[rowIndex] = row;

    }

    this.notify();
};
