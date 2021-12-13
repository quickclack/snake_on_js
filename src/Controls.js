'use strict';

class Controls {
    constructor() {
        this.startBtnEl = document.getElementById('startBtn');
        this.pauseBtnEl = document.getElementById('pauseBtn');
    }

    /**
     * @param {Game} game
     */
    init(game) {
        this.game = game;
    }

    /**
     * Метод устанавливает обработчики событий на клики по кнопкам
     * "Старт" и "Пауза", а так же на стрелки перемещения змейки.
     */
    addControlsEventListeners() {
        this.startBtnEl.addEventListener('click', this.game.start.bind(this.game));
        this.pauseBtnEl.addEventListener('click', this.game.pause.bind(this.game));
        document.addEventListener('keydown', this.game.pressKeyHandler.bind(this.game));
    }
}