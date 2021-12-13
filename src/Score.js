'use strict';

class Score {
    constructor() {
        this.currentEl = document.querySelector('.current');
        this.toWinEl = document.querySelector('.toWin');
    }

    /**
     * @param {Settings} settings настройки игры.
     */
    init(settings) {
        this.settings = settings;
    }

    /**
     * Метод устанавливает текущий счет игрока.
     * @param {string} score
     */
    renderCurrentScore(score) {
        this.currentEl.textContent = score;
    }

    /**
     * Метод устанавливает количество очков, необходимых
     * для выигрыша.
     * @param {string} points
     */
    renderPointsForWin(points) {
        this.toWinEl.textContent = points;
    }
}