// 
function startNewGame() {
    activePlayer=0
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player names for both players!')
        return;
    }
    // Show tilesSection that was hidden 
    tilesSection.classList.remove('hidden');
    tilesSection.classList.add('flex');

    // when activePlayer = 0 (First player)
    //  before starting the game, by default first player
    activePlayerName.textContent = players[activePlayer]['name'];

    // Default highlight first player's card
    playerTwoCard.classList.remove('playerTurnCustom')
    playerOneCard.classList.add('playerTurnCustom')
}


function switchPlayer() {
// condition to switch player
    if (activePlayer === 0) {
       activePlayer = 1  
   } else {
       activePlayer = 0
   }  
    // display player's name      
   activePlayerName.textContent = players[activePlayer]['name']

   // switch playerTurnSignal on player's card
   if (playerOneCard.dataset.playerid == activePlayer) {
       playerTwoCard.classList.remove('playerTurnCustom')
       playerOneCard.classList.add('playerTurnCustom')
   } else {
       playerOneCard.classList.remove('playerTurnCustom')
       playerTwoCard.classList.add('playerTurnCustom')
   }
}



function selectGameTile(event) {
    /* 
    This function will update the tiles with player's symbol 
    Also checks for win 
    */
    console.log(event)
    console.log(event.target)

    event.target.textContent = players[activePlayer]['symbol']; //players[0]
    event.target.classList.add("disabledCustom");
    event.target.classList.remove("hover:cursor-pointer");

    // tiles have their respective data-row an data-col, grab them
    fieldRow= event.target.dataset.row;
    fieldCol= event.target.dataset.col;

     // update tile with user's symbol
    internalTicTacToeBoard[fieldRow][fieldCol] = players[activePlayer]['symbol'];

    // check for wins
    // if no wins, switchPlayer(), else returns

    let won = checkWin(fieldRow,fieldCol);

    console.log(internalTicTacToeBoard)

    // won is of boolean data type
    //  if win, change the message inside the winningmsgoverlay display 
    // set a default message for the display

    // returns an array that tracks if all ties are already selected 
    let everyTilesUsedUp = allTiles.map(child => child.classList.contains('disabledCustom'))
    console.log(everyTilesUsedUp.every(item => item==true))

    if (won) {
        console.log('i won')
        winnerName.textContent = players[activePlayer]['name'];
        
        displayEndGameOverlay();
        winningMsgModal.style.display = 'flex'
        tieMsgModal.style.display = 'none'

        // winningMsgModal.classList.remove('hidden');
        // tieMsgModal.classList.add('hidden');
        return;
    }

    // check if every tile is used up
    else if (everyTilesUsedUp.every(item => item==true))
    {
        console.log('i tie')
        displayEndGameOverlay();
        winningMsgModal.style.display = 'none'
        tieMsgModal.style.display = 'flex';
        return;

    }
    
    switchPlayer()
    
};


function displayEndGameOverlay () {
        
    // remove startnewgame btn 
    startNewGameBtn.style.display = 'none';

    // remove turnMsg display  
    turnMsg.style.display = 'none';

    // open endGameOverlay with display=block 
    // endGameOverlay.style.display = 'block';
    endGameOverlay.classList.remove('hidden');

}


function checkRow(row){
    let rowArray = internalTicTacToeBoard[row]

    // check if all elements in an array is equal 
    let allEqual = rowArray.every((val) => val === rowArray[0]);
    return allEqual
};

function checkCol(col){
    let colArray = [];
    for (let i = 0; i < internalTicTacToeBoard.length; i++) {
        colArray.push(internalTicTacToeBoard[i][col]);
    };

        // check if all elements in an array is equal 
    let allEqual = colArray.every((val) => val === colArray[0]);
    return allEqual
};

function checkDiaLeftToRight(row,col){
    let diaArray = [];
    for (let i = 0; i < internalTicTacToeBoard.length; i++) {
        diaArray.push(internalTicTacToeBoard[i][i])

    };
    console.log(diaArray)

        // check if all elements in an array is equal 
    let allEqual = diaArray.every((val) => val === diaArray[0])
    return allEqual
};

function checkDiaRightToLefts(row,col){
    let diaArray = [internalTicTacToeBoard[0][2],internalTicTacToeBoard[1][1],internalTicTacToeBoard[2][0]];
    
    console.log(diaArray)

        // check if all elements in an array is equal 
    let allEqual = diaArray.every((val) => val === diaArray[0])
    return allEqual
};



function checkWin(fieldRow,fieldCol) {
    /*
    Check col,row, diagonal if there are 3 same symbols in a row 
    return outcome of (rowWin || colWin || dalWin)
    if any of them is true, return true
    */ 


    colWin = checkCol(fieldCol);
    rowWin = checkRow(fieldRow);
    //  only check diagonal if diagonal tile is clicked on
    // default diaWin is null, only check when fieldRow = fieldCol 
    dalWin = null;

    if (fieldRow==fieldCol) {

        dalWin = checkDiaLeftToRight(fieldRow,fieldCol);
        // console.log(rowWin || colWin || dalWin)
        return (rowWin || colWin || dalWin)
    }
    else if (Math.abs(fieldRow - fieldCol) == 2) {
         
        dalWin = checkDiaRightToLefts(fieldRow,fieldCol);
        console.log(rowWin || colWin || dalWin)
        return (rowWin || colWin || dalWin)
    }
    // console.log(rowWin || colWin || dalWin)          
    return (rowWin || colWin || dalWin)
   }


// tiles 
function clearTiles() {
    allTiles.forEach(function(child) {
      child.textContent = "";
      child.classList.remove('disabledCustom');
      child.classList.add("hover:cursor-pointer");
    })
    // clear internal tiles toos
    internalTicTacToeBoard =[
        ['','',''],
        ['','',''],
        ['','','']
]
}
// tiles 