// overlay section
const overlayList = document.querySelectorAll('.overlay');
// const overlayAreas = overlay.querySelectorAll(':not(#modal)');
const innerModal = document.getElementById('inner-modal');

const closeButton = document.getElementById('close-button');
const confirmButton = document.getElementById('confirm-button');

// modal input 
const nameInput = document.getElementById('addPlayerName');
// modal player label
let labelPlayer= document.getElementById('label-player');


// player one card
const playerOneCard= document.getElementById('playerOneCard');
// player one name
let playerOneName= document.getElementById('playerOneName');
// player one edit button
const playerOneEdit= document.getElementById('playerOneEdit');


// player two card
const playerTwoCard= document.getElementById('playerTwoCard');
// player two name
let playerTwoName= document.getElementById('playerTwoName');
// player two edit button
const playerTwoEdit= document.getElementById('playerTwoEdit');

// current active player
const activePlayerName= document.getElementById('active-player-name');

let activePlayer=0;
let = internalTicTacToeBoard = [
  ['','',''],
  ['','',''],
  ['','',''],
  // ['0','0','0'],
  // ['1','1','0'],
  // ['2','2','0'],
]

// let playerNames = []
const players = [
    {
        name: '',
        symbol: 'O'
    },
    {
        name: '',
        symbol: 'X'
    },
];

const winnerName= document.getElementById('winner-name');

// winning message 
const endGameOverlay= document.getElementById('endGameOverlay');

const winningMsgModal= document.getElementById('winningMsgModal');
const tieMsgModal= document.getElementById('tieMsgModal');


const turnMsg= document.getElementById('turn-msg');



// form 
const form = document.getElementById('my-form');

// tiles-section
const tilesSection= document.getElementById('tiles-section');


// startNewGame button 
const startNewGameBtn= document.getElementById('startNewGame');

const RestartWinBtn= document.getElementById('RestartWin');
const RestartTieBtn= document.getElementById('RestartTie');



// grab all child div of the #map board 
const ticTacToeTiles = document.querySelector('#ticTacToeTiles');
const allTiles = Array.from(ticTacToeTiles.querySelectorAll('*'));


// 
const errorMsg= document.getElementById('config-error');


for (const tiles of allTiles) {
    tiles.addEventListener('click',selectGameTile)
}


playerOneEdit.addEventListener('click', function (event) {
    editPlayerName(event,'playerOne')
  });

playerTwoEdit.addEventListener('click',function (event) {
    editPlayerName(event,'playerTwo')
});
  
confirmButton.addEventListener('click',function (event) {
    // event.preventDefault();
    saveName(event);
  });
  
  
  // closeButton.addEventListener('click',closeOverlay );
closeButton.addEventListener('click', function (event) {
    closeOverlay(event);
  });
  
  
// closeButton.addEventListener('mouseenter', () => {
//     closeButton.classList.add('hover:confirm-button');
//   });
  
// closeButton.addEventListener('mouseleave', () => {
//     closeButton.classList.remove('hover:confirm-button');
//   });
  

for (overlay of overlayList) {
  overlay.addEventListener('click', function(event) {
      // only closes if it is explicitly overlay
      console.log(event.target)
    if (event.target === overlay || event.target === endGameOverlay) {
      closeOverlay(event);
    }
  });
}

startNewGameBtn.addEventListener('click',function (event) 
{   
    startNewGame();
    clearTiles();
} );

RestartWinBtn.addEventListener('click',function (event) 
{   closeOverlay(event);
    startNewGame();
    clearTiles();
    startNewGameBtn.style.display = 'block';
    turnMsg.style.display = 'block';
});
RestartTieBtn.addEventListener('click',function (event) 
{   closeOverlay(event);
    startNewGame();
    clearTiles();
    startNewGameBtn.style.display = 'block';
    turnMsg.style.display = 'block';
});

// let everyTilesUsedUp = allTiles.map(child => child.classList.contains('disabledCustom'))
// console.log(everyTilesUsedUp.every(item => item==true))