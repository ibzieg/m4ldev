inlets = 0;
outlets = 1;


devices = {};
device = {};


var tableSize = 8;


function initialize() {
    ////////////////////////////////////////////////////////////////
    // Make reference to this global device
    //devices = new Global("devices");
    //id = (new LiveAPI("this_device")).id;
    //device = devices["device"+id];
    //if (!device) device = {};
    ////////////////////////////////////////////////////////////////
    /****************************************************************
     * This section can be reused by js module
     ****************************************************************/
    var getDeviceId = function () {
        return "device"+id;
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


    if (device.initialized) {
        load();
    } else {
        if (!device.components) {
            device.components = [];
        }

        device.components.push({
            load: function () {
                load();
            }
        });
        post("waiting for main");
        post("\n");

    }

}

function load() {

/*    post("adding observer");
    post("\n");
    device.markovChain.model.properties.name.observe(function (newValue) {
       render();
    });*/

    render();
}

function render() {
/*    var str = device.markovChain.model.data.name;
    post("the name is " + str);
    post("\n");
    outlet(0, "rendered model: " +str);*/
}


