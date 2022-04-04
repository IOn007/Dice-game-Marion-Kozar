let roundPlayer1 = 0;
let roundPlayer2 = 0;
let globalPlayer1 = 0;
let globalPlayer2 = 0; 
let currentPlayer = 1;

function handleNewGame(event) {  
  // A chaque nouvelle partie, round et global sont réinitialisés à 0
  if (event.currentTarget.id === 'newGame') {
    // définition du score temporaire ROUND
    roundPlayer1 = 0;
    roundPlayer2 = 0;
    document.getElementById('roundPlayer1').innerHTML = roundPlayer1;
    document.getElementById('roundPlayer2').innerHTML = roundPlayer2;
    
    // définition du score global GLOBAL2    // définition du score global GLOBAL
    globalPlayer1 = 0;
    globalPlayer2 = 0;   
    document.getElementById('globalPlayer1').innerHTML = globalPlayer1;
    document.getElementById('globalPlayer2').innerHTML = globalPlayer2;

    // on ajoute la classe active sur le joueur 1 qui joue en premier
    document.getElementById('player1').className = 'active';
  }
}

// Obtient un nombre alétaoire entier entre 1 et 6 inclus
function rollDice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

// Au clic sur roll lance le dé et stocke le resultat entre 1 et 6
function handleRollDice(event) {
  //  Le joueur 1 commence
  if (event.currentTarget.id === 'roll') {
    // peut lancer le dé 
    let dice = Number(rollDice(1,6));
    console.log("ceci est dé" + dice);

    // on affiche l'image du dé correspondant au tirage au sort
    let diceImage = document.getElementById('dice');
    diceImage.src = "img/dice" + dice + ".svg";
    console.log(diceImage.src);
    // Si dice = 1
    if (dice === 1){
      switch (currentPlayer) {
        case 1:
          // on vide le score round
          roundPlayer1 = 0;
          document.getElementById('roundPlayer1').innerHTML = roundPlayer1;
          // on passe la main au joueur 2
          // on retire la classe active sur le joueur 1 qui joue en premier
          document.getElementById('player1').className = '';
          // on ajoute la classe active sur le joueur 2 qui joue en premier
          document.getElementById('player2').className = 'active';
          break;
        case 2:
          // on vide le score round
          roundPlayer2 = 0;
          document.getElementById('roundPlayer2').innerHTML = roundPlayer2;
          // on passe la main au joueur 2
          // on retire la classe active sur le joueur 1 qui joue en premier
          document.getElementById('player2').className = '';
          // on ajoute la classe active sur le joueur 2 qui joue en premier
          document.getElementById('player1').className = 'active';
          break;
      }
      // On change de joueur
      if (currentPlayer === 1) {
        currentPlayer = 2;
      } else {
        currentPlayer = 1;
      }
      console.log("joueur qui joue : " + currentPlayer);
    }
    else {
      switch (currentPlayer) {
        case 1:
          //on incrémente le score à round player 1
          roundPlayer1 += dice;
          console.log("ceci est le score incrémenté du joueur 1: " + roundPlayer1);
          document.getElementById('roundPlayer1').innerHTML = roundPlayer1;
          break;
        case 2:
          //on incrémente le score à round player 2
          roundPlayer2 += dice;
          console.log("ceci est le score incrémenté du joueur 2: " + roundPlayer2);
          document.getElementById('roundPlayer2').innerHTML = roundPlayer2;
          break;
      }
    }
  }
}

document.getElementById('newGame').addEventListener('click', handleNewGame);
document.getElementById('roll').addEventListener('click', handleRollDice);




// peut ajouter le score de round à global
  // et passe la main

