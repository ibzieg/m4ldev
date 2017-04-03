
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
}
exports.DataModel = DataModel;

DataModel.NODE_COUNT = 8;

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
            callback();
        } else {
            post("Error: subscribers["+i+"] is not a function\n");
        }
    }
};

DataModel.prototype.getRandomPulseCount = function() {
    var evens = [1, 2, 4, 6, 8];
    var min = 0;
    var max = 4;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return evens[random];
};

DataModel.prototype.getRandomMode = function() {
    var random = Math.random();
    if (random < 0.05) {
        return "Mute";
    } else if (random < 0.80) {
        return "Gate";
    } else {
        return "Repeat";
    }
};

DataModel.prototype.getRandomOctave = function() {
    var min = 1;
    var max = 3;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

DataModel.prototype.getRandomNote = function() {
    var min = 1;
    var max = 12;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

DataModel.prototype.randomizeRykNodes = function() {
  for (var i = 1; i <= DataModel.NODE_COUNT; i++)  {
      var rykNode = this.rykNodes[i];
      if (!rykNode.lock) {
          rykNode.pulseCount = this.getRandomPulseCount();
          rykNode.mode = this.getRandomMode();
          rykNode.octave = this.getRandomOctave();
          rykNode.note = this.getRandomNote();
      }
  }
  this.notify();
};


