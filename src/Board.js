'use strict';

class Board {
    constructor() {
        this.boardEl = document.getElementById('game');
    }
    
    init(settings, snake) {
        this.settings = settings;
        this.snake = snake;
    }

    renderBoard() {
        for (let row = 0; row < this.settings.rowsCount; row++) {
            let tr = document.createElement('tr');
            this.boardEl.appendChild(tr);

            for (let col = 0; col < this.settings.colsCount; col++) {
                let td = document.createElement('td');
                tr.appendChild(td);
            }
        }
    }

    renderSnake() {
        const snakeBodyElems = this.getSnakeBodyElems(this.snake.body);
        snakeBodyElems.forEach(function(tdEl) {
            tdEl.classList.add('snakeBody');
        });
    }

   
    clearFood() {
        document.querySelector('.food').classList.remove('food');
    }

    
    clearSnake() {
        const tdElems = document.querySelectorAll('.snakeBody');
        tdElems.forEach(function(td) {
            td.classList.remove('snakeBody');
        });
    }

    
    getCellEl(x, y) {
        return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
    }

    getSnakeBodyElems(bodyCoords) {
        if (bodyCoords.length === 0) {
            throw new Error('Не переданы координаты тела змейки.');
        }

        let bodyElems = [];
        for (let coordinate of bodyCoords) {
            let td = this.getCellEl(coordinate.x, coordinate.y);
            bodyElems.push(td);
        }
        return bodyElems;
    }

    didSnakeEatFood() {
        return this.boardEl.querySelector('.food').classList.contains('snakeBody');
    }


   getRandomEmptyTd() {
       const emptyTdElements = document.querySelectorAll('td:not(.snakeBody):not(.food)');
       const randomEmptyTd = emptyTdElements[Math.floor(Math.random() * (emptyTdElements.length - 1))]
       return randomEmptyTd;

   }

   renderNewFood() {
       const emptyTd = this.getRandomEmptyTd();
       emptyTd.classList.add('food');
   }
}
