
function DataModel() {
    this.rykNodes = [];
}

DataModel.prototype.subscribe = function() {

};

DataModel.prototype.notify = function() {
    post("ryk nodes was set: " + JSON.stringify(this.rykNodes));
    post("\n");
};

exports.DataModel = DataModel;