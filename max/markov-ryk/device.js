"use strict";

var guid = require("utility.js").guid;

var Device = {};

Device.initGlobals = function (deviceId) {
    var devices = new Global(Device.GLOBAL_DEVICE_LIST_NAME);
    devices[deviceId] = {};
    return devices[deviceId];
};

Device.getGlobals = function (deviceId) {
    var devices = new Global(Device.GLOBAL_DEVICE_LIST_NAME);
    return devices[deviceId];
};

Device.createDeviceId = function() {
    this.id = Device.GLOBAL_ID_PREFIX + guid();
};

Device.GLOBAL_ID_PREFIX = "com.ianzieg.max.markov-ryk.Device_";
Device.GLOBAL_DEVICE_LIST_NAME = "com.ianzieg.max.markov-ryk.devices";

exports.Device = Device;