var ProbabilityTable = require("probability_table.js");
var LomMap = require("lom_map.js");


inlets = 1;
outlets = 1;



//devices = {};
device = undefined;
//id = 0;
var storedModel = undefined;






/*function generateDeviceId() {
    var devices = new Global("devices");
    if (typeof devices.lastId !== "number") {
        devices.lastId = 0;
    } else {
        devices.lastId += 1;
    }
    return "device" + devices.lastId;
}*/


var DeviceLoader = require("device_loader.js");

function initialize(deviceId) {

    /****************************************************************
     * This section can be reused by js module
     ****************************************************************/


    var getDeviceId = function () {
        return "device"+id;
    };

    // Make reference to this global device
    //var device;
    var devices = new Global("devices");
    var id = (new LiveAPI("this_device")).id;
    devices[getDeviceId()] = {};
    device = devices[getDeviceId()];

    /****************************************************************/

    // Initialize data model

    device.markovChain = {
        liveSet: new LomMap.LomMap(),
        model: createModel()
    };

    cpost("test message!\n");

    if (storedModel) {
        //device.markovChain.model.data = storedModel;
        post("loading stored model: "+storedModel+"\n");
        device.markovChain.model.properties.setTargetTrackName(storedModel.targetTrackName);
        device.markovChain.model.properties.probTable.target.setProbTable(storedModel.target);
        //device.markovChain.model.properties.probTable.parent.setProbTable(storedModel.parent);
    }


    device.initialized = true;

    // Notify others that the device is initialized
/*    if (device.components) {
        for (var i = 0; i < device.components.length; i++) {
            try {
                device.components[i].load();
            } catch(error) {
                post("component["+i+"] failed to load: "+error);
                post("\n");
            }
        }
    }*/

    // Tell children to initialize
    outlet(0,"initialize");

}

function resetModel () {
    device.markovChain = {
        liveSet: new LomMap.LomMap(),
        model: createModel()
    };

    notifyclients();
}

function createModel() {

    var model = {
         properties: {

             targetTrackName: "",
             setTargetTrackName: function (value) {
                 device.markovChain.model.properties.targetTrackName = value;
                 post("track name set to: "+value+"\n");
                 notifyclients();
             },
             getTargetTrackName: function () {
                 return   device.markovChain.model.properties.targetTrackName;
             },
             
             
             parentTrackName: "",
             setParentTrackName: function (value) {
                 model.properties.parentTrackName = value;
             },
             getParentTrackName: function () {
                 return   model.properties.targetTrackName;
             },

            probTable: {
                target: new ProbabilityTable.ProbabilityTable({
                    notifyMaxAttr: function () {
                        notifyclients();
                    }
                })
 /*               parent: new ProbabilityTable.ProbabilityTable({
                    notifyMaxAttr: function () {
                        notifyclients();
                    }
                })*/
            }

        }
    };

    return model;
}


function setvalueof(value) {
    //post("setvalueof: "+value +"\n");
    var deserializedModel = JSON.parse(value);

    post("setvalueof trackName: "+deserializedModel.targetTrackName+"\n");

    if (device && device.markovChain) {
        device.markovChain.model.properties.setTargetTrackName(deserializedModel.targetTrackName);
        device.markovChain.model.properties.probTable.target.setProbTable(deserializedModel.target);
        //device.markovChain.model.properties.probTable.parent.setProbTable(deserializedModel.parent);
    } else {
        storedModel = deserializedModel;
    }
}

function getvalueof() {
    try {
        var serializedModel = JSON.stringify({
            targetTrackName: device.markovChain.model.properties.getTargetTrackName(),
            target: device.markovChain.model.properties.probTable.target.getProbTable()
            //parent: device.markovChain.model.properties.probTable.parent.getProbTable()
        });
       // post("getvalueof: "+serializedModel+"\n");
        return serializedModel;
    } catch (error) {
        // nothing
    }
}


function refreshLomMap() {
    device.markovChain.liveSet.refresh();
}