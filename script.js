

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
    let dice = rollDice(1,6);
    console.log(dice);
  }
}

document.getElementById('newGame').addEventListener('click', handleNewGame);
document.getElementById('roll').addEventListener('click', handleRollDice);


  // si le dé = 1 alors round =0 et fin du tour
  // si dé >1 alors incrémente round avec la valeur du dé

// peut ajouter le score de round à global
  // et passe la main

