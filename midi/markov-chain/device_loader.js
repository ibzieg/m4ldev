/**
 * Created by ian on 7/31/16.
 */


/*******************************************************************************
 *
 */
exports.getDevice = function (readyCallback) {

    var getDeviceId = function () {
        return "device"+id;
    };

    // Make reference to this global device
    var device;
    var devices = new Global("devices");
    var id = (new LiveAPI("this_device")).id;
    device = devices[getDeviceId()];

    // Create the device if this is the first time it has been accessed
    if (!device) {
        devices[getDeviceId()] = {};
        device = devices[getDeviceId()];
        device.id = id;
    }

    if (typeof readyCallback === "function") {
        if (device.initialized) {
            readyCallback();
        } else {
            if (!device.components) {
                device.components = [];
            }

            device.components.push({
                load: function () {
                    readyCallback();
                }
            });
        }
    }

    return device;

};