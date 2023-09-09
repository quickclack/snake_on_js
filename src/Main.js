'use strict';

window.addEventListener('load', () => {
    const settings = new Settings();
    const status = new Status();
    const snake = new Snake();
    const board = new Board();
    const controls = new Controls();
    const game = new Game();
    const score = new Score();
    const audio = new Audio('../audio/snake_rattle_n_roll.mp3');
    const crash = new Audio('../audio/crash.mp3');

    const initialSettings = { speed: 5, winLength: 50};

    settings.init(initialSettings);
    snake.init(settings);
    board.init(settings, snake);
    game.init(settings, status, board, snake, controls, score, audio, crash);
    score.init(settings);
    controls.init(game,);

    board.renderBoard();
    board.renderSnake(snake);
    score.renderPointsForWin(initialSettings.winLength);
    board.renderNewFood();
    score.renderCurrentScore(snake.body.length);
    controls.addControlsEventListeners();
});