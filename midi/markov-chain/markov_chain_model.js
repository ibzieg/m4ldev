
var ProbabilityTable = require("probability_table.js").ProbabilityTable;

/*******************************************************************************
 *
 */
function MarkovChainModel(options) {

    this._options = options;

    this.targetTrackname = "";
    this.parentTrackName = "";

    this.targetTable = new ProbabilityTable({
        notifyMaxAttr: options.notifyMaxAttr
    });

    this.parentTable = new ProbabilityTable({
        notifyMaxAttr: options.notifyMaxAttr
    });

}
exports.MarkovChainModel = MarkovChainModel;

/*******************************************************************************
 *
 */
MarkovChainModel.prototype.setTargetTrackName = function (value) {
    this.targetTrackName = value;
    this._options.notifyMaxAttr();
};

/*******************************************************************************
 *
 */
MarkovChainModel.prototype.getTargetTrackName = function () {
    return this.targetTrackName;
};

/*******************************************************************************
 *
 */
MarkovChainModel.prototype.setParentTrackName = function (value) {
    this.ParentTrackName = value;
    this._options.notifyMaxAttr();
};

/*******************************************************************************
 *
 */
MarkovChainModel.prototype.getParentTrackName = function () {
    return this.ParentTrackName;
};

/*******************************************************************************
 *
 */
MarkovChainModel.prototype.serialize = function () {
    return JSON.stringify({
        targetTrackName: this.getTargetTrackName(),
        parentTrackName: this.getParentTrackName(),
        targetTable: this.targetTable.getProbTable(),
        parentTable: this.parentTable.getProbTable()
    });
};


/*******************************************************************************
 *
 */
MarkovChainModel.prototype.deserialize = function (serializedModel) {
    var deserializedModel = JSON.parse(serializedModel);
    this.setTargetTrackName(deserializedModel.targetTrackName);
    this.setParentTrackName(deserializedModel.parentTrackName);
    this.targetTable.setProbTable(deserializedModel.targetTable);
    this.parentTable.setProbTable(deserializedModel.parentTable);
};

