
// Creating a class for the Tic Tac Toe game
class TicTacToeGame {

    // Draws the initial board onto the DOM
    drawBoard() {
        // Clears the board 
        document.body.innerHTML = "";
        // Creates the first element 
        // Creates a div that can be placed on the DOM
        let gameBoard = document.createElement('div');
        gameBoard.id = 'gameBoard';
        // Adds a board class - it's in the .css
        gameBoard.classList.add('board');

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
        // Creates a function that draws out the tictactoe board
        
        this.drawBoard();
    }
}
    const game = new TicTacToeGame();
    game.start();
