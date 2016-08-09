inlets = 1;
outlets = 1;

var ProbabilityTable = require("probability_table.js").ProbabilityTable;
var Device = require("device.js").Device;

var deviceGlobals;

/*******************************************************************************
 *
 */
function initialize() {
    deviceGlobals = (new Device()).getGlobals();
}

/*******************************************************************************
 *
 */
function msg_int(noteNumber) {
    switch (noteNumber) {

        case 0: deviceGlobals.markovChain.model.targetTable.identity(); break;
        case 1: deviceGlobals.markovChain.model.targetTable.seed(); break;
        case 2: deviceGlobals.markovChain.model.targetTable.random(); break;
        case 3: deviceGlobals.markovChain.model.targetTable.converge(deviceGlobals.markovChain.model.targetEvolveAmount); break;
        case 4: deviceGlobals.markovChain.model.targetTable.evolve(deviceGlobals.markovChain.model.targetEvolveAmount); break;
        case 5: deviceGlobals.markovChain.model.targetTable.diverge(deviceGlobals.markovChain.model.targetEvolveAmount); break;
        case 6: deviceGlobals.markovChain.model.targetTable.shiftUp(); break;
        case 7: deviceGlobals.markovChain.model.targetTable.shiftDown(); break;
        case 8: deviceGlobals.markovChain.model.targetTable.shiftRight(); break;
        case 9: deviceGlobals.markovChain.model.targetTable.shiftLeft(); break;

        case 10: deviceGlobals.markovChain.model.parentTable.identity(); break;
        case 11: deviceGlobals.markovChain.model.parentTable.seed(); break;
        case 12: deviceGlobals.markovChain.model.parentTable.random(); break;
        case 13: deviceGlobals.markovChain.model.parentTable.converge(deviceGlobals.markovChain.model.parentEvolveAmount); break;
        case 14: deviceGlobals.markovChain.model.parentTable.evolve(deviceGlobals.markovChain.model.parentEvolveAmount); break;
        case 15: deviceGlobals.markovChain.model.parentTable.diverge(deviceGlobals.markovChain.model.parentEvolveAmount); break;
        case 16: deviceGlobals.markovChain.model.parentTable.shiftUp(); break;
        case 17: deviceGlobals.markovChain.model.parentTable.shiftDown(); break;
        case 18: deviceGlobals.markovChain.model.parentTable.shiftRight(); break;
        case 19: deviceGlobals.markovChain.model.parentTable.shiftLeft(); break;

        case 20: fireClip(0); break;
        case 21: fireClip(1); break;
        case 22: fireClip(2); break;
        case 23: fireClip(3); break;
        case 24: fireClip(4); break;
        case 25: fireClip(5); break;
        case 26: fireClip(6); break;
        case 27: fireClip(7); break;
    }
}

/*******************************************************************************
 *
 */
function fireClip(clipIndex) {
    var track = deviceGlobals.markovChain.liveSet.getTrackByName(
        deviceGlobals.markovChain.model.getTargetTrackName());
    var clip = track[clipIndex % ProbabilityMap.TABLE_SIZE];

    if (clip) {
        clip.liveObject.call("fire");
    }

}