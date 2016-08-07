var ProbabilityTable = require("probability_table.js");
var LomMap = require("lom_map.js");
var Device = require("device.js");

inlets = 1;
outlets = 1;

var deviceGlobals;

function initialize() {

    deviceGlobals = (new Device.Device()).initGlobals();

    // Initialize data model
    deviceGlobals.markovChain = {
        liveSet: new LomMap.LomMap(),
        model: createModel()
    };

    // Load pattr data
    if (this.storedModel) {
        //post("loading stored model: "+this.storedModel+"\n");
        deviceGlobals.markovChain.model.properties.setTargetTrackName(this.storedModel.targetTrackName);
        deviceGlobals.markovChain.model.properties.setParentTrackName(this.storedModel.parentTrackName);
        deviceGlobals.markovChain.model.properties.probTable.target.setProbTable(this.storedModel.target);
        deviceGlobals.markovChain.model.properties.probTable.parent.setProbTable(this.storedModel.parent);
    }

    deviceGlobals.initialized = true;

    // Tell children to initialize
    outlet(0,"initialize");
}

function resetModel () {
    deviceGlobals.markovChain = {
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
                 deviceGlobals.markovChain.model.properties.targetTrackName = value;
                 //post("track name set to: "+value+"\n");
                 notifyclients();
             },
             getTargetTrackName: function () {
                 return   deviceGlobals.markovChain.model.properties.targetTrackName;
             },

             parentTrackName: "",
             setParentTrackName: function (value) {
                 deviceGlobals.markovChain.model.properties.parentTrackName = value;
                 notifyclients();
             },
             getParentTrackName: function () {
                 return   deviceGlobals.markovChain.model.properties.parentTrackName;
             },

            probTable: {
                target: new ProbabilityTable.ProbabilityTable({
                    notifyMaxAttr: function () {
                        notifyclients();
                    }
                }),
                parent: new ProbabilityTable.ProbabilityTable({
                    notifyMaxAttr: function () {
                        notifyclients();
                    }
                })
            }

        }
    };

    return model;
}


function setvalueof(value) {
    //post("setvalueof: "+value +"\n");
    var deserializedModel = JSON.parse(value);

    //post("setvalueof trackName: "+deserializedModel.targetTrackName+"\n");

    if (deviceGlobals && deviceGlobals.markovChain) {
        deviceGlobals.markovChain.model.properties.setTargetTrackName(deserializedModel.targetTrackName);
        deviceGlobals.markovChain.model.properties.setParentTrackName(deserializedModel.parentTrackName);
        deviceGlobals.markovChain.model.properties.probTable.target.setProbTable(deserializedModel.target);
        deviceGlobals.markovChain.model.properties.probTable.parent.setProbTable(deserializedModel.parent);
    } else {
        this.storedModel = deserializedModel;
    }
}

function getvalueof() {
    try {
        var serializedModel = JSON.stringify({
            targetTrackName: deviceGlobals.markovChain.model.properties.getTargetTrackName(),
            parentTrackName: deviceGlobals.markovChain.model.properties.getParentTrackName(),
            target: deviceGlobals.markovChain.model.properties.probTable.target.getProbTable(),
            parent: deviceGlobals.markovChain.model.properties.probTable.parent.getProbTable()
        });
       // post("getvalueof: "+serializedModel+"\n");
        return serializedModel;
    } catch (error) {
        // nothing
    }
}


function refreshLomMap() {
    deviceGlobals.markovChain.liveSet.refresh();
}