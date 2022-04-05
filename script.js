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
  }
}

// Obtient un nombre alétaoire entier entre 1 et 6 inclus
function rollDice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

// Fonction pour changer de joueur
function switchPlayer() {
  switch (currentPlayer) {
    case 1:
      // on vide le score round
      roundPlayer1 = 0;
      document.getElementById('roundPlayer1').innerHTML = roundPlayer1;
      // on retire la classe bold au joueur 1
      document.getElementById('p1').className = '';
      // on retire la puce rouge au joueur 1
      document.getElementById('player1').className = '';
      // on passe la main au joueur 2
       // on passe le h2 en gras
      document.getElementById('p2').className = 'bold';
      // on ajoute la puce rouge pour l'affordance
      document.getElementById('player2').className = 'active';
      currentPlayer = 2;
      break;
    case 2:
      // on vide le score round
      roundPlayer2 = 0;
      document.getElementById('roundPlayer2').innerHTML = roundPlayer2;
       // on retire la classe bold au joueur 1
       document.getElementById('p2').className = '';
       // on retire la puce rouge au joueur 1
       document.getElementById('player2').className = '';
       // on passe la main au joueur 1
      // on passe le h1 en gras
      document.getElementById('p1').className = 'bold';
      // on ajoute la puce rouge pour l'affordance
      document.getElementById('player1').className = 'active';
      currentPlayer = 1;
      break;
  }
}
// Au clic sur roll lance le dé et stocke le resultat entre 1 et 6
function handleRollDice(event) {
  //  Si le joueur clique sur le bouton roll dice
  if (event.currentTarget.id === 'roll') {
    // peut lancer le dé 
    let dice = Number(rollDice(1,6));
    // console.log("ceci est le dé " + dice);

    // on affiche l'image du dé correspondant au tirage au sort
    let diceImage = document.getElementById('dice');
    diceImage.src = "img/dice" + dice + ".svg";
    // console.log(diceImage.src);
    // Si dice = 1
    if (dice === 1){
      switchPlayer();
      console.log("joueur qui joue : " + currentPlayer);
    }
    else {
      switch (currentPlayer) {
        // joueur 1
        case 1:
          //on incrémente le score à round player 1
          roundPlayer1 += dice;
          console.log("ceci est le score incrémenté du joueur 1: " + roundPlayer1);
          document.getElementById('roundPlayer1').innerHTML = roundPlayer1;
          break;
        // joueur 2
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
// Au clic sur hold sauve le score dans global
function handleHold(event) {
  //  Si le joueur clique sur le bouton hold
  if (event.currentTarget.id === 'hold') {
    if (globalPlayer1 < 100 && globalPlayer2 < 100) {
      // en fonction du joueur
      switch (currentPlayer) {
        // joueur 1
        case 1:
          //on incrémente le score round à global du player 1
          globalPlayer1 += roundPlayer1;
          console.log("ceci est le score global incrémenté du joueur 1: " + globalPlayer1);
          document.getElementById('globalPlayer1').innerHTML = globalPlayer1;
          if (globalPlayer1 >= 100){
            alert('Congrats ! Player 1 wins 🏆');}
          break;
        // joueur 2
        case 2:
        //on incrémente le score round à global du player 2
          globalPlayer2 += roundPlayer2;
          console.log("ceci est le score global incrémenté du joueur 1: " + globalPlayer2);
          document.getElementById('globalPlayer2').innerHTML = globalPlayer2;
          if (globalPlayer2 >= 100){
            alert('Congrats ! Player 2 wins 🏆');
          }
          break;
      }
      // On change de joueur
      switchPlayer();
      // FIn du jeu... QUi a gagné ???
    } else if (globalPlayer1 >= 100){
      alert('Congrats ! Player 1 wins 🏆');
    } else if (globalPlayer2 >= 100){
      alert('Congrats ! Player 2 wins 🏆');
    }
  }  
}
// On ajouter un écouteur d'événement sur le bouton newGame
document.getElementById('newGame').addEventListener('click', handleNewGame);
// On ajouter un écouteur d'événement sur le bouton roll
document.getElementById('roll').addEventListener('click', handleRollDice);
// On ajouter un écouteur d'événement sur le bouton hold
document.getElementById('hold').addEventListener('click', handleHold);
