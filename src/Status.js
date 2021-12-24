'use strict';

class Status {
    constructor() {
        this.condition = 'paused';
    }


    setPlaying() {
        this.condition = 'playing';
    }

    setPaused() {
        this.condition = 'paused';
    }


    isPlaying() {
        return this.condition === 'playing';
    }

    isPaused() {
        return this.condition === 'paused';
    }
}
