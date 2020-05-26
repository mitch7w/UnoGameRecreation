const express = require("express");
const app = express();

app.listen(3000, function(req, res) {
  console.log("App Listening on port 3000");
});

// Each card has:
// colour: green, blue, green, yellow, none
// special: 0 skip , 1 reverse , 2 +2 , 3 colour change , 4 +4 , 5 normal number
// number: 0-9 and if 10 it is special

// Initialize card array at start
playerTurn = 0 ; // First player to have a turn
direction = 0 ; // 0 forward and 1 backwards in player array
currentColour = "none" ; // Only used when change colour card is played
winner = "none" ;
function initialize() {
  let pickupPile = [
    // red cards
    {
      colour: "red",
      special: 5,
      number: 0
    }, // numbers 1-9
    {
      colour: "red",
      special: 5,
      number: 1
    },
    {
      colour: "red",
      special: 5,
      number: 1
    },
    {
      colour: "red",
      special: 5,
      number: 2
    },
    {
      colour: "red",
      special: 5,
      number: 2
    },
    {
      colour: "red",
      special: 5,
      number: 3
    },
    {
      colour: "red",
      special: 5,
      number: 3
    },
    {
      colour: "red",
      special: 5,
      number: 4
    },
    {
      colour: "red",
      special: 5,
      number: 4
    },
    {
      colour: "red",
      special: 5,
      number: 5
    },
    {
      colour: "red",
      special: 5,
      number: 5
    },
    {
      colour: "red",
      special: 5,
      number: 6
    },
    {
      colour: "red",
      special: 5,
      number: 6
    },
    {
      colour: "red",
      special: 5,
      number: 7
    },
    {
      colour: "red",
      special: 5,
      number: 7
    },
    {
      colour: "red",
      special: 5,
      number: 8
    },
    {
      colour: "red",
      special: 5,
      number: 8
    },
    {
      colour: "red",
      special: 5,
      number: 9
    },
    {
      colour: "red",
      special: 5,
      number: 9
    },
    {
      colour: "red",
      special: 0,
      number: 10
    }, // skip cards
    {
      colour: "red",
      special: 0,
      number: 10
    },
    {
      colour: "red",
      special: 1,
      number: 10
    }, // reverse cards
    {
      colour: "red",
      special: 1,
      number: 10
    },
    {
      colour: "red",
      special: 2,
      number: 10
    }, // +2 cards
    {
      colour: "red",
      special: 2,
      number: 10
    },
    // blue cards
    {
      colour: "blue",
      special: 5,
      number: 0
    }, // numbers 1-9
    {
      colour: "blue",
      special: 5,
      number: 1
    },
    {
      colour: "blue",
      special: 5,
      number: 1
    },
    {
      colour: "blue",
      special: 5,
      number: 2
    },
    {
      colour: "blue",
      special: 5,
      number: 2
    },
    {
      colour: "blue",
      special: 5,
      number: 3
    },
    {
      colour: "blue",
      special: 5,
      number: 3
    },
    {
      colour: "blue",
      special: 5,
      number: 4
    },
    {
      colour: "blue",
      special: 5,
      number: 4
    },
    {
      colour: "blue",
      special: 5,
      number: 5
    },
    {
      colour: "blue",
      special: 5,
      number: 5
    },
    {
      colour: "blue",
      special: 5,
      number: 6
    },
    {
      colour: "blue",
      special: 5,
      number: 6
    },
    {
      colour: "blue",
      special: 5,
      number: 7
    },
    {
      colour: "blue",
      special: 5,
      number: 7
    },
    {
      colour: "blue",
      special: 5,
      number: 8
    },
    {
      colour: "blue",
      special: 5,
      number: 8
    },
    {
      colour: "blue",
      special: 5,
      number: 9
    },
    {
      colour: "blue",
      special: 5,
      number: 9
    },
    {
      colour: "blue",
      special: 0,
      number: 10
    }, // skip cards
    {
      colour: "blue",
      special: 0,
      number: 10
    },
    {
      colour: "blue",
      special: 1,
      number: 10
    }, // reverse cards
    {
      colour: "blue",
      special: 1,
      number: 10
    },
    {
      colour: "blue",
      special: 2,
      number: 10
    }, // +2 cards
    {
      colour: "blue",
      special: 2,
      number: 10
    },
    // green cards
    {
      colour: "green",
      special: 5,
      number: 0
    }, // numbers 1-9
    {
      colour: "green",
      special: 5,
      number: 1
    },
    {
      colour: "green",
      special: 5,
      number: 1
    },
    {
      colour: "green",
      special: 5,
      number: 2
    },
    {
      colour: "green",
      special: 5,
      number: 2
    },
    {
      colour: "green",
      special: 5,
      number: 3
    },
    {
      colour: "green",
      special: 5,
      number: 3
    },
    {
      colour: "green",
      special: 5,
      number: 4
    },
    {
      colour: "green",
      special: 5,
      number: 4
    },
    {
      colour: "green",
      special: 5,
      number: 5
    },
    {
      colour: "green",
      special: 5,
      number: 5
    },
    {
      colour: "green",
      special: 5,
      number: 6
    },
    {
      colour: "green",
      special: 5,
      number: 6
    },
    {
      colour: "green",
      special: 5,
      number: 7
    },
    {
      colour: "green",
      special: 5,
      number: 7
    },
    {
      colour: "green",
      special: 5,
      number: 8
    },
    {
      colour: "green",
      special: 5,
      number: 8
    },
    {
      colour: "green",
      special: 5,
      number: 9
    },
    {
      colour: "green",
      special: 5,
      number: 9
    },
    {
      colour: "green",
      special: 0,
      number: 10
    }, // skip cards
    {
      colour: "green",
      special: 0,
      number: 10
    },
    {
      colour: "green",
      special: 1,
      number: 10
    }, // reverse cards
    {
      colour: "green",
      special: 1,
      number: 10
    },
    {
      colour: "green",
      special: 2,
      number: 10
    }, // +2 cards
    {
      colour: "green",
      special: 2,
      number: 10
    },
    // yellow cards
    {
      colour: "yellow",
      special: 5,
      number: 0
    }, // numbers 1-9
    {
      colour: "yellow",
      special: 5,
      number: 1
    },
    {
      colour: "yellow",
      special: 5,
      number: 1
    },
    {
      colour: "yellow",
      special: 5,
      number: 2
    },
    {
      colour: "yellow",
      special: 5,
      number: 2
    },
    {
      colour: "yellow",
      special: 5,
      number: 3
    },
    {
      colour: "yellow",
      special: 5,
      number: 3
    },
    {
      colour: "yellow",
      special: 5,
      number: 4
    },
    {
      colour: "yellow",
      special: 5,
      number: 4
    },
    {
      colour: "yellow",
      special: 5,
      number: 5
    },
    {
      colour: "yellow",
      special: 5,
      number: 5
    },
    {
      colour: "yellow",
      special: 5,
      number: 6
    },
    {
      colour: "yellow",
      special: 5,
      number: 6
    },
    {
      colour: "yellow",
      special: 5,
      number: 7
    },
    {
      colour: "yellow",
      special: 5,
      number: 7
    },
    {
      colour: "yellow",
      special: 5,
      number: 8
    },
    {
      colour: "yellow",
      special: 5,
      number: 8
    },
    {
      colour: "yellow",
      special: 5,
      number: 9
    },
    {
      colour: "yellow",
      special: 5,
      number: 9
    },
    {
      colour: "yellow",
      special: 0,
      number: 10
    }, // skip cards
    {
      colour: "yellow",
      special: 0,
      number: 10
    },
    {
      colour: "yellow",
      special: 1,
      number: 10
    }, // reverse cards
    {
      colour: "yellow",
      special: 1,
      number: 10
    },
    {
      colour: "yellow",
      special: 2,
      number: 10
    }, // +2 cards
    {
      colour: "yellow",
      special: 2,
      number: 10
    }
  ];
  // TODO Randomize array
  let players = [ // Initialize players array
    {
      name: "Mitch",
      cards: []
    } // give each player 7 cards
  ];
  playedPile.push(pickupPile.pop()) ; // Add first card to playedPile
}

function play() {
  switch (playedPile[playedPile.length - 1].special) { // Check state of top card
    // Player not allowed to play
    case 0: // skip
      nextPlayer();
      break;
    case 1: // Reverse
      if (direction == 0) {
        direction = 1;
      } else direction = 0;
      break;
    case 2: // +2
      pickupCard(playerTurn);
      pickupCard(playerTurn);
      nextPlayer();
      break;
    case 4: // Pickup four cards
      pickupCard(playerTurn);
      pickupCard(playerTurn);
      pickupCard(playerTurn);
      pickupCard(playerTurn);
      nextPlayer();
      break;
      // Player allowed to play
    case 3: // Colour change
    case 5: // Normal colour
    // currentColour has been set by previous user's selection of their card
    // set selectedCard using DOM
    if(cardValid(selectedCard)) { // Check validity of card choice  TODO make sure selected card is indexed properly and not off by 1
      playedPile.push(players[playerTurn].cards.splice(selectedCard,1)) ; // Put card down on pile and remove it from player's hand
      removeCard(selectedCard)) // Remove card from player's hand
      if(players[playerTurn].cards.length==1) {
        console.log(players[playerTurn].name + " says UNO!");
      }
      if(players[playerTurn].cards.length==0) { // Player has won
        winner = players[playerTurn].name ;
      }
      playerTurn++ ;
    }
    else { // Card is not valid
      console.log("Card is not valid! Try again");
    } // play will exit but game will call this currentPlayer's play() again  TODO remove the infinite loop here if the player doesn't have a playable card
    break ;
    default:
      console.log("playerTurn is broken AF");
  }
  return;
}

function nextPlayer() {
  if (direction == 0) {
    if (playerTurn == players.length - 1) {
      playerTurn = 0;
    } else playerTurn++;

  } else { // direction is backwards through players array
    if (playerTurn == 0) {
      playerTurn = players.length - 1;
    } else {
      playerTurn--;
    }
  }
}

function pickupCard(currentPlayer) {
  players[currentPlayer].cards.push(pickupPile.pop()) // Take card off pile and give it to currentPlayer
}

function game() { // Call this somewhere in index.html or something
  while(winner== "none") {
    play()
  }
  console.log(winner + " has won the game!");
}

function cardValid(card) {
  if (players[playerTurn].cards[card].number == playedPile[playedPile.length-1].number ||
    players[playerTurn].cards[card].colour == playedPile[playedPile.length-1].colour) {
      return true ;
    }
    else return false ;
}
