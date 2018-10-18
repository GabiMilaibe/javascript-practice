// Blackjack
// by Gabi
// 16.10.2018
//

let suits = ['Hearts','Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'];
console.log(values.length);

function createDeck(){
  let deck = [];
  for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++) {
      for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
        deck.push(values[valuesIdx] + ' of ' + suits[suitsIdx]);
      }
  }
 return deck;
}

let deck = createDeck();

function getNextCard(){
  return deck.shift();

}

for (let i = 0; i < deck.length; i++) {
  console.log(deck[i]);
}

let playerCards = [console.log.getNextCard(), console.log.getNextCard()];

console.log('Welcome to Blackjack!');
console.log('You are dealt: ');
console.log(' '+playerCards[0]);
console.log(' '+playerCards[1]);
