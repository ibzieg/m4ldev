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
function clock() {
    //    Determine the currently playing clip
    //    Get next state based on probabilities for this clip (clip index == row index)
    //    Trigger the next clip
    if (debug) {
        post("clock trigger");
        post("\n");
    }

    try {
        for (var c = 0, n = selectedTrack.clips.length; c < n; c++) {
            var clip = selectedTrack.clips[c];
            if (clip.clip.get("is_playing") == true) {
                //var destinationMap = probMap[c % tableSize];
                var destinationMap = getProbabilityMap(c % tableSize);
                var p = Math.round(Math.random() * destinationMap.length - 1);
                var destinationIndex = destinationMap[p];
                var destinationClip = selectedTrack.clips[destinationIndex];
                post("firing clip: " + clip.name);
                destinationClip.clip.call("fire");
            }
        }
    } catch (error) {
        post("Failed to fire clip: " + error);
        post("\n");
    }


}


////////////////////////////////////////////////////////////////////////////////
function getProbabilityMap(clipIndex) {
    var c, n;

    // Make local copy of array
    var probability = [];
    for (c = 0; c < tableSize; c++) {
        probability[c] = probTable[clipIndex][c];
    }

    // find which clip is playing on 2nd Order track and get probability vector for that clip
    var probability2 = [];
    for (c = 0; c < selectedTrack2.clips.length; c++) {
        probability2[c] = 0;
    }

    try {
        for (c = 0, n = selectedTrack2.clips.length; c < n; c++) {
            var clip = selectedTrack2.clips[c];
            if (clip.clip.get("is_playing") == true) {
                probability2 = probTable2[c];
                break;
            }
        }
    } catch (error) {
        probability2 = [0, 0, 0, 0, 0, 0, 0, 0];
        post("Failed to read from 2nd Order clip: "+error);
        post("\n");
    }

    // add vectors together and normalize them
    var sum = 0;
    for (c = 0, n = probability.length; c < n; c++) {
        var secondOrder = probability2[c % probability2.length];

        // Reduce the second order by 1/n where n is the size of the vector
        secondOrder -= 1.0 / tableSize;
        if (secondOrder < 0) {
            secondOrder = 0;
        }

        probability[c] = probability[c] + secondOrder;
        sum += probability[c];
    }

    for (c = 0, n = probability.length; c < n; c++) {
        probability[c] = probability[c] / sum;
    }

    // build the map
    var map = [];
    var p = 0;
    for (var i = 0; i < tableSize; i++) {
        var percent = map.length + Math.round(probability[i] * 100);
        for ( ; p < percent; p++) {
            map[p] = i;
        }
    }

    return map;

}