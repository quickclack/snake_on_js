'use strict';

class Controls {
    constructor() {
        this.startBtnEl = document.getElementById('startBtn');
        this.pauseBtnEl = document.getElementById('pauseBtn');
    }

    
    init(game) {
        this.game = game;
    }

   
    addControlsEventListeners() {
        this.startBtnEl.addEventListener('click', this.game.start.bind(this.game));
        this.pauseBtnEl.addEventListener('click', this.game.pause.bind(this.game));
        document.addEventListener('keydown', this.game.pressKeyHandler.bind(this.game));
    }
}
