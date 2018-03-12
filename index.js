import {default as Chord} from './src/Chord'


//A major chord
var myChord = new Chord("C", [0, 4, 7]);

console.log(myChord.getNote(0).toString());
console.log(myChord.getNote(1).toString());
console.log(myChord.getNote(2).toString());

myChord.transpose(-1);

console.log(myChord.getNote(0).toString());
console.log(myChord.getNote(1).toString());
console.log(myChord.getNote(2).toString());


export default Chord