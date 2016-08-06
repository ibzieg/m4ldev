/**
 * Created by ian on 7/31/16.
 */

inlets = 1;
outlets = 1;

var DeviceLoader = require("device_loader.js");

function initialize() {
    this.device = DeviceLoader.loadDevice();
    load();
}

function loadbang() {
    this.initialized = false;
}

/*******************************************************************************
 *
 */
function load() {
    //this.device = device;

    this.device.markovChain.liveSet.observe(function () {
       resetMenu();
    });

    resetMenu();

    this.initialized = true;

}

function resetMenu() {
    outlet(0, "clear");
    outlet(0, "append", "(none)");
    var selectedName = this.device.markovChain.model.properties.getTargetTrackName();
    post("resetMenu: searching for name: "+selectedName+"\n");
    var matchedNameIndex = -1;
    var liveSet = this.device.markovChain.liveSet.song;
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
        this.device.markovChain.model.properties.setTargetTrackName("");
    }

}

function setSelectedTrack(trackName) {
    if (!this.initialized) {
        return;
    }
    trackName = arguments[0];
    device.markovChain.model.properties.setTargetTrackName(trackName);
}


// How do you send a command to a umenu to select a particular item?