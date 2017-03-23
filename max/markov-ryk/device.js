
/*******************************************************************************
 *
 */
function Device() {
	//this.id = (new LiveAPI("this_device")).id;
}
exports.Device = Device;

/*******************************************************************************
 *
 */

Device.GLOBAL_ID_PREFIX = "device";
Device.GLOBAL_DEVICE_LIST_NAME = "devices";

/*******************************************************************************
 *
 */
Device.prototype.getFormattedId = function() {
    return Device.GLOBAL_ID_PREFIX+this.id;
};

/*******************************************************************************
 *
 */
Device.prototype.initGlobals = function() {
    var devices = new Global(Device.GLOBAL_DEVICE_LIST_NAME);
    devices[this.getFormattedId()] = {};
    return devices[this.getFormattedId()];
};

/*******************************************************************************
 *
 */
Device.prototype.getGlobals = function() {
    var devices = new Global(Device.GLOBAL_DEVICE_LIST_NAME);
    return devices[this.getFormattedId()];
};
