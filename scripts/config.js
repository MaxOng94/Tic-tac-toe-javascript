function openOverlay() {
  overlay.classList.remove('hidden');
}

function closeOverlay(event) {
  // console.log(event)
  endGameOverlay.classList.add('hidden');
  overlay.classList.add('hidden');
  // overlay.style.display = 'none';
  // remove the 'required' attribute so console will not log error
  nameInput.removeAttribute('required');

  startNewGameBtn.style.display = 'block';
  turnMsg.style.display = 'block';

  event.preventDefault();
}




// players details 

function updatePlayerName(event,player) {
  openOverlay()
  // let playerNames = players.map(player => player.name);
  // console.log(playerNames)
  if (player == 'playerOne') {
    labelPlayer.textContent = 'Player 1'
    playerOneName.textContent = nameInput.value.trim()
    players[0]['name'] = nameInput.value.trim()
  } else if (player == 'playerTwo') {
    labelPlayer.textContent = 'Player 2'
    playerTwoName.textContent = nameInput.value.trim()
    players[1]['name'] = nameInput.value.trim()
  };
};


function saveName(event) {
  event.preventDefault();
  errorMsg.textContent = "";
  innerModal.classList.remove('errorCustom');

  if (nameInput.value.trim() == '') {
    errorMsg.textContent = 'Please enter a valid name!'
    innerModal.classList.add('errorCustom')
    return;    
  
  } else if (playerOneName.textContent ===""){
    // update playerOne
    updatePlayerName(event,'playerOne');
    closeOverlay(event);
    
  } else if (playerTwoName.textContent ===""){
    // update playerTwo
    updatePlayerName(event,'playerTwo');
    closeOverlay(event);

  }
  event.preventDefault();
};


function editPlayerName(event,player) {
  nameInput.value = ''
  if (player == 'playerOne') {
    playerOneName.textContent="";
    labelPlayer.textContent = 'Player 1';
    openOverlay();
    } else {
    playerTwoName.textContent="";
    labelPlayer.textContent = 'Player 2';
    openOverlay();
  }
    ;
  };

// players details 




