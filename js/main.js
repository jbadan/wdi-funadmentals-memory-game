var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];
var cardsInPlay = [];

var checkForMatch = function(){
      if (cardsInPlay.length === 2){
      if (cardsInPlay[0] === cardsInPlay[1]) {
        document.getElementById('alert').innerHTML += "<br> You found a match!";
    //  alert ("You found a match!");
  } else {
      document.getElementById('alert').innerHTML += "<br> Sorry, try again!";
    //  alert ("Sorry, try again.");
  }
}
};

var flipCard = function (){
    var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    };
};

//sorts cards - not optimal, but working see https://www.w3schools.com/js/js_array_sort.asp
// randomly ends up with 2 queens of hearts on same board etc.
cards.sort(function(a, b){return 0.5 - Math.random()});


var createBoard = function (){
    for (var i=0; i<cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
};

createBoard();
