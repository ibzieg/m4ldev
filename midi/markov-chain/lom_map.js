/**
 * Created by ian on 7/31/16.
 */

/*
song = {
    tracks: [
        track {
            tracks: live.object
            name: string
            id: int
            clips: [
                clip {
                    clip: live.object
                    name: string
                    id: int
                }
            ]
        }
    ]
}

*/

function LomMap(options) {
    this.observers = [];
    this.refresh();
}
exports.LomMap = LomMap;

////////////////////////////////////////////////////////////////////////////////
LomMap.prototype.refresh = function() {
    // Create a cache of relevant objects in the LOM

    this.song = {
        liveObject: new LiveAPI("live_set"),
        tracks: []
    };

    var trackCount = this.song.liveObject.getcount("tracks");

    for (var t = 0; t < trackCount; t++) {
        var trackObj = new LiveAPI("live_set tracks " + t);
        if (parseInt(trackObj.id)) {
            this.song.tracks[t] = {
                liveObject: trackObj,
                name: trackObj.get("name"),
                clips: []
            };

            var clipSlotCount = trackObj.getcount("clip_slots");
            var clipCount = 0;

            for (var c = 0; c < clipSlotCount; c++) {
                var clipPath = trackObj.path.substr(1, trackObj.path.length - 2) + " clip_slots " + c + " clip";
                var clipObj = new LiveAPI(clipPath);

                if (parseInt(clipObj.id) > 0) {
                    this.song.tracks[t].clips[clipCount++] = {
                        liveObject: clipObj,
                        name: clipObj.get("name")
                    };
                }
            }

        }

    }

    this.notifyObservers();

};

////////////////////////////////////////////////////////////////////////////////
LomMap.prototype.observe = function(callback) {
    this.observers.push(callback);
};

////////////////////////////////////////////////////////////////////////////////
LomMap.prototype.notifyObservers = function() {
    for (var i = 0; i < this.observers.length; i++) {
        var callback = this.observers[i];
        if (typeof callback === "function") {
            callback();
        }
    }
};

