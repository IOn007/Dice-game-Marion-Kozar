let roundPlayer1 = 0;
let roundPlayer2 = 0;
let globalPlayer1 = 0;
let globalPlayer2 = 0; 

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
    console.log(dice);

    // on affiche l'image du dé correspondant au tirage au sort
    let diceImage = document.getElementById('dice');
    diceImage.src = "img/dice" + dice + ".svg";
    console.log(diceImage.src);

    //on incrémente le score à round player 1
    roundPlayer1 += dice;
    console.log(roundPlayer1);
    document.getElementById('roundPlayer1').innerHTML = roundPlayer1;
  }
}

document.getElementById('newGame').addEventListener('click', handleNewGame);
document.getElementById('roll').addEventListener('click', handleRollDice);


  // si le dé = 1 alors round =0 et fin du tour
  // si dé >1 alors incrémente round avec la valeur du dé

// peut ajouter le score de round à global
  // et passe la main

