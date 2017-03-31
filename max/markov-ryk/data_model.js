
function DataModel() {
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

DataModel.defaultRykNode = function(note) {
    return {
        "pulseCount": 1,
        "mode": "Gate",
        "octave": 0,
        "note": note,
        "lock": 0
    };
};

DataModel.prototype.subscribe = function() {

};

DataModel.prototype.notify = function() {
    post("ryk nodes was set: " + JSON.stringify(this.rykNodes));
    post("\n");
};

exports.DataModel = DataModel;