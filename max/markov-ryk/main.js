"use strict";

var Device = require("device.js").Device;
inlets = 1;
outlets = 1;
var deviceGlobals;
/*******************************************************************************
 *
 */
function initialize() {
    deviceGlobals = (new Device()).initGlobals();

    post((new Device()).getFormattedId());

    if (this.storedModel) {
        // deviceGlobals.markovChain.model.deserialize(this.storedModel);
    }
    // Tell children to initialize
    deviceGlobals.initialized = true;
    outlet(0, "initialize");
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