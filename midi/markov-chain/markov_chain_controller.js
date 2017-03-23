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
    this.initialized = true;
}

/*******************************************************************************
 *
 */
function loadbang() {
    this.initialized = false;
}

/*******************************************************************************
 *
 */
function getSelectedTargetTrack() {
    return deviceGlobals.markovChain.liveSet.getTrackByName(
        deviceGlobals.markovChain.model.getTargetTrackName());
}

/*******************************************************************************
 *
 */
function getSelectedParentTrack() {
    return deviceGlobals.markovChain.liveSet.getTrackByName(
        deviceGlobals.markovChain.model.getParentTrackName());
}

/*******************************************************************************
 *
 */
function clock() {
    //    Determine the currently playing clip
    //    Get next state based on probabilities for this clip (clip index == row index)
    //    Trigger the next clip
    var selectedTrack = getSelectedTargetTrack();

    if (!selectedTrack) {
        return;
    }

    try {
        for (var c = 0, n = selectedTrack.clips.length; c < n; c++) {
            var clip = selectedTrack.clips[c];
            if (clip.liveObject.get("is_playing") == true) {
                //var destinationMap = probMap[c % tableSize];
                var destinationMap = getProbabilityMap(c % ProbabilityTable.TABLE_SIZE);
                var p = Math.round(Math.random() * destinationMap.length - 1);
                var destinationIndex = destinationMap[p];
                var destinationClip = selectedTrack.clips[destinationIndex];
                //post("firing clip: " + clip.name);
                destinationClip.liveObject.call("fire");
            }
        }
    } catch (error) {
        post("Failed to fire clip: " + error);
        post("\n");
    }

}

/*******************************************************************************
 *
 */
function getProbabilityMap(clipIndex) {
    var c, n;

    var parentTrack = getSelectedParentTrack();
    var targetTable = deviceGlobals.markovChain.model.targetTable.getProbTable();
    var parentTable = deviceGlobals.markovChain.model.parentTable.getProbTable();

    // Make local copy of array
    var probability = [];
    for (c = 0; c < ProbabilityTable.TABLE_SIZE; c++) {
        probability[c] = targetTable[clipIndex][c];
    }

    // find which clip is playing on 2nd Order track and get probability vector for that clip
    var probability2 = [];
    for (c = 0; c < ProbabilityTable.TABLE_SIZE; c++) {
        probability2[c] = 0;
    }

    if (parentTrack) {
        try {
            for (c = 0, n = parentTrack.clips.length; c < n; c++) {
                var clip = parentTrack.clips[c];
                if (clip.liveObject.get("is_playing") == true) {
                    probability2 = parentTable[c];
                    break;
                }
            }
        } catch (error) {
            post("Failed to read from 2nd Order clip: " + error);
            post("\n");
        }
    }

    // add vectors together
    for (c = 0, n = probability.length; c < n; c++) {
        probability[c] = probability[c] + probability2[c];
    }

    // build the map
    var map = [];
    var p = 0;
    for (var i = 0; i < ProbabilityTable.TABLE_SIZE; i++) {
        var percent = map.length + Math.round(probability[i]);
        for ( ; p < percent; p++) {
            map[p] = i;
        }
    }

    return map;

}