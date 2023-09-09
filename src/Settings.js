'use strict';

class Settings {
    init({rowsCount = 27, colsCount = 29, speed = 5, winLength = 50} = {}) {
        
        if (rowsCount < 10 || rowsCount > 30) {
            throw new Error('Неверные настройки, значение rowsCount должно быть в диапозоне [10, 30]');
        }
        if (colsCount < 10 || colsCount > 30) {
            throw new Error('Неверные настройки, значение colsCount должно быть в диапозоне [10, 30]');
        }
        if (speed < 1 || speed > 10) {
            throw new Error('Неверные настройки, значение speed должно быть в диапозоне [1, 10]');
        }
        if (winLength < 5 || winLength > 50) {
            throw new Error('Неверные настройки, значение winLength должно быть в диапозоне [5, 50]');
        }

        this.rowsCount = rowsCount;
        this.colsCount = colsCount;
        this.speed = speed;
        this.winLength = winLength;
    }
}
