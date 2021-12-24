'use strict';

class Game {
    constructor() {
        this.tickIdentifier = null;
        this.messageEl = document.getElementById('message');
    }

    
    init(settings, status, board, snake, controls, score) {
        this.settings = settings;
        this.status = status;
        this.board = board;
        this.controls = controls;
        this.snake = snake;
        this.score = score;
    }

    
    start() {
        if (this.status.isPaused()) {
            this.status.setPlaying();
            this.tickIdentifier = setInterval(this.doTick.bind(this), 1000 / this.settings.speed);
        }
    }

    
    pause() {
        if (this.status.isPlaying()) {
            this.status.setPaused();
            this.stopGame();
        }
    }
    
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

    
    isGameWon() {
        return this.snake.body.length == this.settings.winLength;
    }

   
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

    setMessage(text) {
        this.messageEl.innerText = text;
    }
}
