'use strict';

import {default as Note} from '@lyre/note'

export default class Chord {
    constructor(root, intervals) {
        this.root = new Note(root);
        this.intervals = intervals;
    }
    
    /**
     * Returns the root note.
     * @returns {Note} The root note.
     */
    getRoot() {
        return this.root;
    }
    
    /**
     * Sets the new root note of the chord.
     * @param {Note|string} note The root note
     */
    setRoot(note) {
        this.root = new Note(root);
    }
    
    /**
     * Returns the nth position note.
     * @param {integer} n The nth note, starting at 0 for root.
     * @returns The nth note.
     */
    getNote(n) {
        return this.root.getInterval(this.intervals[n]);
    }
    
    /**
     * Transposes a chord up or down the given semitones.
     * @param {integer} name Positive to transpose down or positive to transpose up 
     */
    transpose(semitones) {
        this.root = this.root.getInterval(semitones);
    }
}