
inlets = 1;
outlets = 1;

function initialize() {
    this.clockDivide = 4;
    this.reset();
}

function setClockDivide(value) {
    this.clockDivide = value;
}

function reset() {
    this.clockCount = this.clockDivide-1;
}

function bang() {
    clockTick();
}

function clockTick() {
    this.clockCount++;
    if ((this.clockCount % this.clockDivide) === 0) {
        outlet(0, "bang");
    }
}