var ProbabilityTable = require("probability_table.js");


inlets = 0;
outlets = 0;



devices = {};
device = undefined;
id = 0;
var storedModel = undefined;




function bang() {
    post("main is bang");
    post("\n");
}

function initialize() {

    /****************************************************************
     * This section can be reused by js module
     ****************************************************************/
    var getDeviceId = function () {
        return "device" + id;
    };

    // Make reference to this global device
    devices = new Global("devices");
    id = (new LiveAPI("this_device")).id;
    device = devices[getDeviceId()];

    // Create the device if this is the first time it has been accessed
    if (!device) {
        devices[getDeviceId()] = {};
        device = devices[getDeviceId()];
    }
    /****************************************************************/

    // Initialize data model

    device.markovChain = {
        model: createModel()
    };

    cpost("test message!\n");

    if (storedModel) {
        //device.markovChain.model.data = storedModel;
        post("loading stored model: "+storedModel+"\n");
        device.markovChain.model.properties.probTable.target.setProbTable(storedModel.target);
        //device.markovChain.model.properties.probTable.parent.setProbTable(storedModel.parent);
    }


    device.initialized = true;

    // Notify others that the device is initialized
    if (device.components) {
        for (var i = 0; i < device.components.length; i++) {
            try {
                device.components[i].load();
            } catch(error) {
                post("component["+i+"] failed to load: "+error);
                post("\n");
            }
        }
    }


}

function resetModel () {
    device.markovChain = {
        model: createModel()
    };

    notifyclients();
}

function createModel() {

    var model = {
        properties: {

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

    if (device && device.markovChain) {
        device.markovChain.model.properties.probTable.target.setProbTable(deserializedModel.target);
        //device.markovChain.model.properties.probTable.parent.setProbTable(deserializedModel.parent);
    } else {
        storedModel = deserializedModel;
    }
}

function getvalueof() {
    try {
        var serializedModel = JSON.stringify({
            target: device.markovChain.model.properties.probTable.target.getProbTable()
            //parent: device.markovChain.model.properties.probTable.parent.getProbTable()
        });
        //post("getvalueof: "+serializedModel+"\n");
        return serializedModel;
    } catch (error) {
        // nothing
    }
}


