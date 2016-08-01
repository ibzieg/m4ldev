/**
 * Created by ian on 7/31/16.
 */

var DeviceLoader = require("device_loader.js");

function initialize() {
    this.device = DeviceLoader.getDevice(function () {
        load();
    });
}

/*******************************************************************************
 *
 */
function load() {

//    var liveSet = new LiveAPI("live_set");
//    liveSet.observe("tracks");

/*      var tracks = new LiveAPI(function () {
          post("the tracks changed\n");
      }, "live_set");*/
}




/*******************************************************************************
 *
 */
// This function searches the LOM for a track by it's text name and then
// outputs the ID
function name() {
    var searchName = arguments[0];
    for (var token = 1; token < arguments.length; token++) {
        searchName += " " + arguments[token];
    }

    var liveSet = new LiveAPI("live_set");
    var numTracks = liveSet.getcount("tracks");

    for (var i = 0; i < numTracks; i++) {
        var track = new LiveAPI("live_set tracks " + i);
        var trackName = track.get("name");
        if (trackName == searchName) {
            outlet(0,"id",parseInt(track.id));
            return;
        }
    }

    // Not found
    outlet(0,"id",0);
}

/*******************************************************************************
 *
 */
// This function lists out all of the Live Track names as strings
// and pumps them out in such a way to load the umenu
function bang() {
    var liveSet = new LiveAPI("live_set");
    var numTracks = liveSet.getcount("tracks");

    outlet(0, "clear");
    for (var i = 0; i < numTracks; i++) {
        var track = new LiveAPI("live_set tracks " + i);
        var trackName = track.get("name");
        //outlet(0, "append " + trackName);
        outlet(0,"append",trackName);
    }

}


// How do you send a command to a umenu to select a particular item?