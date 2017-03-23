"use strict";
var guid = require("utility.js").guid;

function Device() {
    this.id = guid();
}
Device.prototype.getFormattedId = function () {
    return Device.GLOBAL_ID_PREFIX + this.id;
};
Device.prototype.initGlobals = function () {
    var devices = new Global(Device.GLOBAL_DEVICE_LIST_NAME);
    devices[this.getFormattedId()] = {};
    return devices[this.getFormattedId()];
};
Device.prototype.getGlobals = function () {
    var devices = new Global(Device.GLOBAL_DEVICE_LIST_NAME);
    return devices[this.getFormattedId()];
};

Device.GLOBAL_ID_PREFIX = "com.ianzieg.max.markov-ryk.Device_";
Device.GLOBAL_DEVICE_LIST_NAME = "com.ianzieg.max.markov-ryk.devices";

exports.Device = Device;