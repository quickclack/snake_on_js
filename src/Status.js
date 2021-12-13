'use strict';

/** Здесь будет храниться статус игры, например мы, завершили или остановлено. */
class Status {
    constructor() {
        this.condition = 'paused';
    }

    /** Это означает что мы играем. */
    setPlaying() {
        this.condition = 'playing';
    }

    /** Это означает что игра на паузе. */
    setPaused() {
        this.condition = 'paused';
    }

    /**
     * @returns {boolean} если мы сейчас играем, тогда true, иначе false.
     */
    isPlaying() {
        return this.condition === 'playing';
    }

    /**
     * @returns {boolean} если игра сейчас на паузе, тогда true, иначе false.
     */
    isPaused() {
        return this.condition === 'paused';
    }
}