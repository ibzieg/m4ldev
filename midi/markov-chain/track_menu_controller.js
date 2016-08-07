inlets = 1;
outlets = 1;

var Device = require("device.js").Device;
var ProbabilityTable = require("probability_table.js").ProbabilityTable;

var deviceGlobals;

/*******************************************************************************
 *
 */
function initialize() {
    deviceGlobals = (new Device()).getGlobals();
    load();
}

/*******************************************************************************
 *
 */
function loadbang() {
    this.initialized = false;
    this.tableType = -1;
}

/*******************************************************************************
 *
 */
function load() {
    this.initialized = true;

    deviceGlobals.markovChain.liveSet.observe(function () {
       resetMenu();
    });
    resetMenu();

}

/*******************************************************************************
 *
 */
function resetMenu() {
    outlet(0, "clear");
    outlet(0, "append", "(none)");
    var selectedName = getSelectedTrack();
    //post("resetMenu: searching for name: "+selectedName+"\n");
    var matchedNameIndex = -1;
    var liveSet = deviceGlobals.markovChain.liveSet.song;
    for (var i = 0; i < liveSet.tracks.length; i++) {
        var name = liveSet.tracks[i].name;
        outlet(0,"append",name);
        if (name == selectedName) {
            matchedNameIndex = i;
        }
    }

    if (matchedNameIndex >= 0) {
        // The currently selected track still exists in the set.
        // Update the menu selection to reflect our selection
        //outlet(0,"setsymbol",name);
        outlet(0,"set",matchedNameIndex+1);
        // TODO this might cause an infinite loop
    } else {
        // Name is not matched. Leave the selection on the first default entry,
        // which is the empty string.
        // Update the model to reflect that no selection is made.
        setSelectedTrack("");
    }
}

/*******************************************************************************
 *
 */
function setSelectedTrack(trackName) {
    if (!this.initialized) {
        return;
    }
    trackName = arguments[0];
    if (this.tableType === ProbabilityTable.TABLE_TYPE_PARENT) {
        deviceGlobals.markovChain.model.setParentTrackName(trackName);
    } else {
        deviceGlobals.markovChain.model.setTargetTrackName(trackName);
    }
}

/*******************************************************************************
 *
 */
function getSelectedTrack() {
    if (!this.initialized) {
        return;
    }
    if (this.tableType === ProbabilityTable.TABLE_TYPE_PARENT) {
        return deviceGlobals.markovChain.model.getParentTrackName();
    } else {
        return deviceGlobals.markovChain.model.getTargetTrackName();
    }
}

/*******************************************************************************
 *
 */
function setTableType(type) {
    this.tableType = parseInt(type);
}