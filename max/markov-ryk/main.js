var Device = require("device.js").Device;
var DataModel = require("data_model.js").DataModel;

inlets = 1;
outlets = 1;

var deviceId;
var deviceGlobals;

/*******************************************************************************
 *
 */
function initialize() {
    deviceId = Device.createDeviceId();
    deviceGlobals = Device.initGlobals(deviceId);

    if (this.storedModel) {
        // deviceGlobals.markovChain.model.deserialize(this.storedModel);
    }

    deviceGlobals.model = new DataModel();
    post("datamodel: "+deviceGlobals.model.id);

    outlet(0, "initialize", deviceId);
}
/*******************************************************************************
 *
 */
function setvalueof(value) {
    /*    if (deviceGlobals &&
            deviceGlobals.markovChain &&
            deviceGlobals.markovChain.model instanceof MarkovChainModel) {
            deviceGlobals.markovChain.model.deserialize(value);
        } else {
            this.storedModel = value;
        }*/
}
/*******************************************************************************
 *
 */
function getvalueof() {
    /*    if (deviceGlobals &&
            deviceGlobals.markovChain &&
            deviceGlobals.markovChain.model instanceof MarkovChainModel) {
    
            return deviceGlobals.markovChain.model.serialize();
        } else {
            return "";
        }*/
}
//# sourceMappingURL=main.js.map