import {default as Chord} from './Chord'

function getNote(string) {
    if(string.charAt(1) == 'b' || string.charAt(1) == '#') {
        return new Note(string.substr(0, 2));
    } else {
        return new Note(string.substr(0, 1));
    }
}

function Parser(string) {
    var note = getNote(string);
    
    if(note.isFlat() || note.isSharp()) {
        string = string.substring(2);
    } else {
        string = string.substring(1);
    }
    
   console.log(note.toString());
}

Parser._pcTable = [
    [0, 4, 7],
    [0, 3, 7],
    [0, 4, 8],
    [0, 3, 6],
    [0, 4, 7, 10],
    [0, 4, 7, 11],
    [0, 3, 7, 11],
    [0, 3, 7, 10],
    [0, 4, 8, 10],
    [0, 4, 8, 11],
    [0, 3, 6, 10],
    [0, 3, 6, 9],
    [0, 4, 6, 10]
];

Parser._suffixTable = {
    'maj': 0,
    
    
    'min': 1,
    
    
    'aug': 2,
    
    
    'dim': 3,
    
    
    'dom7': 4,
    
    
    'maj7': 5,
    
    
    'minmaj7': 6,
    
    
    'min7': 7,
    
    
    'aug7': 8,
    
    
    'augmaj7': 9,
    
    
    'min7dim5': 10,
    
    
    'dim7': 11,
    
    
    'dom7dim5': 12
}