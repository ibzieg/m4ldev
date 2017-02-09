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

function list(data) {
    var noteNumber = arguments[0];
    var velocity = arguments[1];

    //post("note="+noteNumber+" velo="+velocity+"\n");

    // Fire action if this is a Note On event
    if (velocity > 0) {
        mapNoteToAction(noteNumber);
    }

}

/*******************************************************************************
 *
 */
function mapNoteToAction(noteNumber) {
    switch (noteNumber) {

    /* C -2 */ case 0: deviceGlobals.markovChain.model.targetTable.identity(); break;
    /* C#-2 */ case 1: deviceGlobals.markovChain.model.targetTable.seed(); break;
    /* D -2 */ case 2: deviceGlobals.markovChain.model.targetTable.random(); break;
    /* D#-2 */ case 3: deviceGlobals.markovChain.model.targetTable.converge(deviceGlobals.markovChain.model.targetEvolveAmount); break;
    /* E -2 */ case 4: deviceGlobals.markovChain.model.targetTable.evolve(deviceGlobals.markovChain.model.targetEvolveAmount); break;
    /* F -2 */ case 5: deviceGlobals.markovChain.model.targetTable.diverge(deviceGlobals.markovChain.model.targetEvolveAmount); break;
    /* F#-2 */ case 6: deviceGlobals.markovChain.model.targetTable.shiftUp(); break;
    /* G -2 */ case 7: deviceGlobals.markovChain.model.targetTable.shiftDown(); break;
    /* G#-2 */ case 8: deviceGlobals.markovChain.model.targetTable.shiftRight(); break;
    /* A -2 */ case 9: deviceGlobals.markovChain.model.targetTable.shiftLeft(); break;

    /* A#-2 */ case 10: deviceGlobals.markovChain.model.parentTable.identity(); break;
    /* B -2 */ case 11: deviceGlobals.markovChain.model.parentTable.seed(); break;
    /* C -1 */ case 12: deviceGlobals.markovChain.model.parentTable.random(); break;
    /* C#-1 */ case 13: deviceGlobals.markovChain.model.parentTable.converge(deviceGlobals.markovChain.model.parentEvolveAmount); break;
    /* D -1 */ case 14: deviceGlobals.markovChain.model.parentTable.evolve(deviceGlobals.markovChain.model.parentEvolveAmount); break;
    /* D#-1 */ case 15: deviceGlobals.markovChain.model.parentTable.diverge(deviceGlobals.markovChain.model.parentEvolveAmount); break;
    /* E -1 */ case 16: deviceGlobals.markovChain.model.parentTable.shiftUp(); break;
    /* F -1 */ case 17: deviceGlobals.markovChain.model.parentTable.shiftDown(); break;
    /* F#-1 */ case 18: deviceGlobals.markovChain.model.parentTable.shiftRight(); break;
    /* G -1 */ case 19: deviceGlobals.markovChain.model.parentTable.shiftLeft(); break;

    /* G#-1 */ case 20: fireClip(0); break;
    /* A -1 */ case 21: fireClip(1); break;
    /* A#-1 */ case 22: fireClip(2); break;
    /* B -1 */ case 23: fireClip(3); break;
    /* C  0 */ case 24: fireClip(4); break;
    /* C# 0 */ case 25: fireClip(5); break;
    /* D  0 */ case 26: fireClip(6); break;
    /* D# 0 */ case 27: fireClip(7); break;

    /* E  0 */ case 28: stopAllClips(); break;

    }
}

/*******************************************************************************
 *
 */
function fireClip(clipIndex) {
    var track = deviceGlobals.markovChain.liveSet.getTrackByName(
        deviceGlobals.markovChain.model.getTargetTrackName());
    if (track) {
        var clip = track.clips[clipIndex % ProbabilityTable.TABLE_SIZE];
        if (clip) {
            clip.liveObject.call("fire");
        }
    }
}

/*******************************************************************************
 * Stop all clips on the selected track
 */
function stopAllClips() {
    var track = deviceGlobals.markovChain.liveSet.getTrackByName(
        deviceGlobals.markovChain.model.getTargetTrackName());
    if (track) {
        track.liveObject.call("stop_all_clips");
    }
}