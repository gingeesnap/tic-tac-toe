
// Creating a class for the Tic Tac Toe game
const PLAYER_ONE_SYMBOL = 'X';
const PLAYER_TWO_SYMBOL = 'O';

class TicTacToeGame {

    // Draws the initial board onto the DOM
    handleSquareClick(event) {
        this.executeMove(event.target.id);
    }
    
    executeMove(moveIndex) {
        if(this.board[moveIndex] == ""){
            // Puts and X or O in the square
            this.board[moveIndex] = this.currentPlayer;
            this.updateBoard();

            if(!this.gameHasWinner()){
                // switch current player to opposite
                this.currentPlayer = (this.currentPlayer == PLAYER_ONE_SYMBOL ?
                    PLAYER_TWO_SYMBOL:
                    PLAYER_ONE_SYMBOL);

            } else {
                // restart the game
                alert("Player " + this.currentPlayer + " is the winner!");
                this.start();

            }


          
            
            console.log(this.board);
        }

    }
    updateBoard() {
        let gameBoard = document.getElementById('gameBoard');
        let squareElements = gameBoard.childNodes;
        console.log(squareElements);
        squareElements.forEach((element, index) => {
            if(element.innerText != this.board[index]) {
                element.innerText = this.board[index];
            }
        })
    
    }
    gameHasWinner() {
        const winningCombos = [ 
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
            [0, 4, 8], [2, 4, 6] // diagonal
            ];
        return winningCombos.find(combo => {
           if(this.board[combo[0]] != ""
                && this.board[combo[1]] != "" && this.board[combo[2]] != "" &&
                this.board[combo[0]] == this.board[combo[1]] && this.board[combo[1]] == this.board[combo[2]])
            return true;
                else
            return false;
        });

    }
    
    drawBoard() {
        // Clears the board 
        document.body.innerHTML = "";
        // Creates the first element 
        // Creates a div that can be placed on the DOM
        let gameBoard = document.createElement('div');
        gameBoard.id = 'gameBoard';
        // Adds a board class - it's in the .css
        gameBoard.classList.add('board');
        // Binds the keyword this toward the function
        gameBoard.addEventListener('click', this.handleSquareClick.bind(this))

        // Allows iteration over each position in the board

        this.board.forEach((square, index) => {
            // Creates a square for each position on the board
            let squareElement = document.createElement('div');
            // Adds an attribute; the id is the index
            // First square will be 0
            squareElement.id = index;
            // Adds the square class - it's in the .css
            squareElement.classList.add('square');
            // Appends to the gameBoard created above
            gameBoard.appendChild(squareElement);
        });
        // Appends the gameBoard onto the DOM
        document.body.appendChild(gameBoard);
    }
// The start method will be called when the game starts
    start() {
        // Creates a data structure thate represents tictactoe board
        // Inserts and array of nine blank spaces
        this.board = ["","","","","","","","",""];
        this.currentPlayer =  PLAYER_ONE_SYMBOL;       
        // Creates a function that draws out the tictactoe board
        this.drawBoard();
    }
}
    const game = new TicTacToeGame();
    game.start();
