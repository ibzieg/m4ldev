inlets  = 1;
outlets = 6;

setinletassist(-1,function (outletNumber) {
    switch (outletNumber) {
        case 0: assist("Pitch [0-127]"); break;
    }
});

setoutletassist(-1,function (inletNumber) {
    switch (inletNumber) {
        case 0: assist("Pitch Out 0"); break;
        case 1: assist("Pitch Out 1"); break;
        case 2: assist("Pitch Out 2"); break;
        case 3: assist("Pitch Out 3"); break;
        case 4: assist("Pitch Out 4"); break;
        case 5: assist("Pitch Out 5"); break;
    }
});

var assignCount = 0;

function msg_int(value) {
    assignCount++;
    assignCount%=6;
    post("assignCount: "+assignCount);
    post("\n");
    post("value: "+value);
    post("\n");
    try {
        outlet(assignCount, parseInt(value));
    } catch (error) {
        post("outlet failed: "+error);
    }
}
