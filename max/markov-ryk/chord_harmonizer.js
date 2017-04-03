/**
 * Created by ian on 3/23/16.
 */


// mode in
// root note in
// pitch in

// pitch out I
// pitch out III
// pitch out V

inlets  = 3;
outlets = 3;

setinletassist(-1,function (outletNumber) {
    switch (outletNumber) {
        case 0: assist("note root of chord"); break;
        case 1: assist("mode [0-6]"); break;
        case 2: assist("scale key [0-11]"); break;

    }
});

setoutletassist(-1,function (inletNumber) {
    switch (inletNumber) {
        case 0: assist("chord I"); break;
        case 1: assist("chord III"); break;
        case 2: assist("chord V"); break;

    }
});

var verbose = false;
var rootNoteIndex = 0;
var modeIndex = 0;
var masterScale = [];

////////////////////////////////////////////////////////////////////////////////
var Notes = [
    { Name: "C" , Type: "natural" },
    { Name: "C#", Type: "sharp"   },
    { Name: "D" , Type: "natural" },
    { Name: "D#", Type: "sharp"   },
    { Name: "E" , Type: "natural" },
    { Name: "F" , Type: "natural" },
    { Name: "F#", Type: "sharp"   },
    { Name: "G" , Type: "natural" },
    { Name: "G#", Type: "sharp"   },
    { Name: "A" , Type: "natural" },
    { Name: "A#", Type: "sharp"   },
    { Name: "B" , Type: "natural" }
];


var Modes = [
    { Name: "I   Ionian (Major)",       Sequence: [2, 2, 1, 2, 2, 2, 1] },
    { Name: "II  Dorian",               Sequence: [2, 1, 2, 2, 2, 1, 2] },
    { Name: "III Phrygian",             Sequence: [1, 2, 2, 2, 1, 2, 2] },
    { Name: "IV  Lydian",               Sequence: [2, 2, 2, 1, 2, 2, 1] },
    { Name: "V   Mixolydian",           Sequence: [2, 2, 1, 2, 2, 1, 2] },
    { Name: "VI  Aeolian (Nat. Minor)", Sequence: [2, 1, 2, 2, 1, 2, 2] },
    { Name: "VII  Locrian",             Sequence: [1, 2, 2, 1, 2, 2, 2] }
];


////////////////////////////////////////////////////////////////////////////////
GetNoteIndexFromName = function (noteName) {
    var i, n;
    for (i = 0, n = Notes.length; i < n; i++) {
        if (noteName == Notes[i].Name) {
            return i;
        }
    }
};


////////////////////////////////////////////////////////////////////////////////
GenerateScaleFromIndex = function (rootIndex, scaleIndex, isPentatonic) {

    if (typeof isPentatonic !== "boolean") {
        isPentatonic = false;
    }

    if (rootIndex < 0 || rootIndex > Notes.length-1) {
        return [];
        throw new Error("rootIndex out of bounds: " +  rootIndex );
    } else if (scaleIndex < 0 || scaleIndex > Modes.length-1) {
        return [];
        throw new Error("scaleIndex out of bounds: " + scaleIndex);
    }

    var scaleNotes = [];
    var noteIndex = rootIndex;
    var scaleObj = Modes[scaleIndex];
    for (var i = 0, n = scaleObj.Sequence.length; i < n; i++) {
        var curNote = Notes[noteIndex % Notes.length];
        scaleNotes.push(curNote.Name);
        noteIndex += scaleObj.Sequence[i];
    }

    if (isPentatonic) {
        delete scaleNotes[1];
        delete scaleNotes[5];
    }

    return scaleNotes;
};

////////////////////////////////////////////////////////////////////////////////
function GetHarmonizedChord(noteIndex) {
    // generate all the chords corresponding to this note
    // major triad
    // minor triad (transposed major)
    // aug triad   (major triad with sharpened 5th)
    // dim triad   (major triad with flattened 5th)
    // test if any of the chords are members of the master scale

    var harmonizedChord = {};


    var majorScale = GenerateScaleFromIndex(noteIndex, 0);
    var minorScale = GenerateScaleFromIndex(noteIndex, 5);

    var majorTriad = [
        majorScale[0],
        majorScale[2],
        majorScale[4]
    ];

    var diminishedTriad = [
        minorScale[0],
        minorScale[2],
        Notes[GetNoteIndexFromName(minorScale[4]) - 1]
    ];
    if (typeof diminishedTriad[2] === "object") {
        diminishedTriad[2] = diminishedTriad[2].Name;
    }

    var augmentedTriad = [
        majorScale[0],
        majorScale[2],
        Notes[GetNoteIndexFromName(majorScale[4]) + 1]
    ];
    if (typeof augmentedTriad[2] === "object") {
        augmentedTriad[2] = augmentedTriad[2].Name;
    }

    var minorTriad = [
        minorScale[0],
        minorScale[2],
        minorScale[4]
    ];

    var isTriadMemberOfScale = function (triad) {
        if (masterScale.indexOf(triad[0]) >= 0 &&
            masterScale.indexOf(triad[1]) >= 0 &&
            masterScale.indexOf(triad[2]) >= 0) {
            return true;
        }
    };

    if (isTriadMemberOfScale(majorTriad)) {
        harmonizedChord = {
            //Type:  Scales[0].Name,
            Type: "",
            Notes: majorTriad
        };
    } else if (isTriadMemberOfScale(augmentedTriad)) {
        harmonizedChord = {
            //Type:  "Augmented " + Scales[0].Name,
            Type: "aug",
            Notes: augmentedTriad
        };
    } else if (isTriadMemberOfScale(minorTriad)) {
        harmonizedChord = {
            //Type:  Scales[5].Name,
            Type: "min",
            Notes: minorTriad
        };
    } else if (isTriadMemberOfScale(diminishedTriad)) {
        harmonizedChord = {
            //Type:  "Diminished " + Scales[0].Name,
            Type: "dim",
            Notes: diminishedTriad
        };
    }

    return harmonizedChord ? harmonizedChord.Notes : {};

};

////////////////////////////////////////////////////////////////////////////////
function msg_int(value) {
    switch(inlet) {
        case 0: note(value); break;
        case 1: mode(value); break;
        case 2: scale(value); break;
    }
}

////////////////////////////////////////////////////////////////////////////////
function note(value) {
    if (verbose) {
        post("Note value: " + value);
        post("\n");
    }
    // for this note
    // % by 12 to get note index
    // / by 12 to get octave index

    // get the triad pattern for this note index, given the key & mode ?
    value--;
    var note   = value % 12;
    var octave = Math.floor(value / 12);

    // Use incoming note 0-11 as an index into the current master scale;
    note = GetNoteIndexFromName(masterScale[note]);

    var chord = GetHarmonizedChord(note, masterScale);

    //post("chord is: "+chord);
    //post("\n");

    if (!chord) {
        post("No chord for this note: " + note + " " + Notes[note].Name);
        post("\n");
        return;
    }

    var outputChordMidiPitch = function(chordIndex) {
      if (chord[chordIndex]) {
          var chordNoteIndex = GetNoteIndexFromName(chord[chordIndex]);

          var octaveOut = octave;
          if (chordNoteIndex < note) {
              octaveOut++;
          }

          outlet(chordIndex, chordNoteIndex + (octaveOut*12));
      }
    };

    outputChordMidiPitch(0);
    outputChordMidiPitch(1);
    outputChordMidiPitch(2);


/*    outlet(0, chord[0]);
    outlet(1, chord[1]);
    outlet(2, chord[2]);*/

}

////////////////////////////////////////////////////////////////////////////////
function mode(value) {
    if (verbose) {
        post("Mode value: " + value);
        post("\n");
    }

    modeIndex = value % 6;
    masterScale = GenerateScaleFromIndex(rootNoteIndex, modeIndex);

}

////////////////////////////////////////////////////////////////////////////////
function scale(value) {
    if (verbose) {
        post("Scale value: " + value)
        post("\n");
    }

    rootNoteIndex = value % 11;
    masterScale = GenerateScaleFromIndex(rootNoteIndex, modeIndex);
}

