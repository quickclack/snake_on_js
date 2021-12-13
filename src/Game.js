'use strict';

class Game {
    constructor() {
        this.tickIdentifier = null;
        this.messageEl = document.getElementById('message');
    }

    /**
     * Метод получает другие игровые обьекты, которые нужны ему 
     * для работы.
     * @param {Settings} settings 
     * @param {Status} status 
     * @param {Board} board 
     * @param {Snake} snake 
     * @param {Menu} menu 
     * @param {Score} score
     */
    init(settings, status, board, snake, controls, score) {
        this.settings = settings;
        this.status = status;
        this.board = board;
        this.controls = controls;
        this.snake = snake;
        this.score = score;
    }

    /**
     * Метод запускает игру.
     */
    start() {
        if (this.status.isPaused()) {
            this.status.setPlaying();
            this.tickIdentifier = setInterval(this.doTick.bind(this), 1000 / this.settings.speed);
        }
    }

    /**
     * Метод ставит игру на паузу.
     */
    pause() {
        if (this.status.isPlaying()) {
            this.status.setPaused();
            this.stopGame();
        }
    }

    /**
     * Этот метод запускается каждую секунду и осуществляет:
     * 1. перемещение змейки
     * 2. проверяет проиграна/выиграна ли игра
     * 3. увеличивает размер змейки если она ест еду
     * 4. заново отрисовывает положение змейки и еды
     */
    doTick() {
        this.snake.performStep();
        if (this.isSnakeSteppedOntoItself()) {
            this.stopGame();
            this.setMessage('Вы проиграли');
            return;
        }
        if (this.board.didSnakeEatFood()) {
            this.snake.increaseBody();
            this.score.renderCurrentScore(this.snake.body.length);

            if (this.isGameWon()) {
                this.stopGame();
                this.setMessage('Вы выиграли!');
                return;
            }

            this.board.clearFood();
            this.board.renderNewFood();
        }
        this.board.clearSnake();
        this.board.renderSnake();
    }

    /**
     * Метод проверяет выиграна ли игра.
     * @returns {boolean} если длина змейки достигла длины нужной 
     * для выиграша, тогда true, иначе false.
     */
    isGameWon() {
        return this.snake.body.length == this.settings.winLength;
    }

    /**
     * Метод проверяет сьела ли змейка сама себя.
     * @returns {boolean}
     */
    isSnakeSteppedOntoItself() {
        let cellArr = this.snake.body.map(function (cellCoords) {
            return cellCoords.x.toString() + cellCoords.y.toString();
        });
        let head = cellArr.shift();
        return cellArr.includes(head);
    }

    stopGame() {
        clearInterval(this.tickIdentifier);
    }

    /**
     * В зависимости от нажатой кнопки (вверх, вниз, влево, вправо) будет
     * вызываться соответствующий метод.
     * @param {KeyboardEvent} event
     */
    pressKeyHandler(event) {
        switch (event.key) {
            case "ArrowUp":
                this.snake.changeDirection('up');
                break;
            case "ArrowDown":
                this.snake.changeDirection('down');
                break;
            case "ArrowLeft":
                this.snake.changeDirection('left');
                break;
            case "ArrowRight":
                this.snake.changeDirection('right');
                break;
        }
    }

    /**
     * Метод выводит сообщение на странице.
     * @param {string} text
     */
    setMessage(text) {
        this.messageEl.innerText = text;
    }
}