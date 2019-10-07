class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]

        this.player = 'x';

    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.field[rowIndex][columnIndex]){
            this.field[rowIndex][columnIndex] = this.player;
            this.player = (this.player == 'o') ? 'x': 'o';  
        }
    }

    isFinished() {
        return (this.isDraw() || this.getWinner()) ? true: false;
    }

    getWinner() {
        let win = null;
        if (this.field[1][1] === this.field[0][2] && this.field[1][1] === this.field[2][0] ||
            this.field[1][1] === this.field[0][0] && this.field[1][1] === this.field[2][2]) {
                win = this.field[1][1];
        }
        for(let i = 0; i < this.field.length; i++){
            if((this.field[0][i] == this.field[1][i])&&(this.field[1][i] == this.field[2][i])){
                win = this.field[0][i];
            }
            if((this.field[i][0] == this.field[i][1])&&(this.field[i][1] == this.field[i][2])){
                win = this.field[i][0];
            }
        }

        return win;
    }

    noMoreTurns() {
        let turn = true;
        for(let i = 0; i < this.field.length; i++){
            for(let j = 0; j < this.field.length; j++){
                if(!this.field[i][j]){
                    turn = false;
                    break;
                }
            }
        }
        return turn;
    }

    isDraw() {
        return  (this.noMoreTurns() && !this.getWinner()) ? true: false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
