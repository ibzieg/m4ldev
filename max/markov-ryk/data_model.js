
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

DataModel.prototype.getRandomPulseCount = function() {
/*    var evens = [1, 2, 4];
    var min = 0;
    var max = 2;
 var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return evens[random];*/
    var min = this.rykParameters.pulseCount.min;
    var max = this.rykParameters.pulseCount.max;
    return Math.floor(Math.random() * (max - min + 1)) + min;

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
    //var pentatonic = [1, 3, 4, 5, 7];
    //var min = this.rykParameters.note.min;
    //var max = this.rykParameters.note.max;
    var scale = [];
    if (this.rykParameters.note[1] > 0) scale.push(1);
    if (this.rykParameters.note[2] > 0) scale.push(2);
    if (this.rykParameters.note[3] > 0) scale.push(3);
    if (this.rykParameters.note[4] > 0) scale.push(4);
    if (this.rykParameters.note[5] > 0) scale.push(5);
    if (this.rykParameters.note[6] > 0) scale.push(6);
    if (this.rykParameters.note[7] > 0) scale.push(7);
    var min = 0;
    var max = scale.length;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return scale[random];
};

DataModel.prototype.randomizeRykNodes = function() {
  for (var i = 1; i <= DataModel.NODE_COUNT; i++)  {
      var rykNode = this.rykNodes[i];
      if (!rykNode.lock) {
          rykNode.pulseCount = this.getRandomPulseCount();
          rykNode.mode = this.getRandomMode(rykNode.pulseCount);
          rykNode.octave = this.getRandomOctave();
          rykNode.note = this.getRandomNote();
      }
  }
  this.notify();
};


