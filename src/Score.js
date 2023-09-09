'use strict';

class Score {
    constructor() {
        this.currentEl = document.querySelector('.current');
        this.toWinEl = document.querySelector('.toWin');
    }

    init(settings) {
        this.settings = settings;
    }

    renderCurrentScore(score) {
        this.currentEl.textContent = score;
    }

    renderPointsForWin(points) {
        this.toWinEl.textContent = points;
    }
}
