import { InputCards, Card } from "../score-calc";
import highestCardInHands from "./highest-card-in-hands";

//------------------------------------------------checks if cards are in a row
export default function isStraight(
  hands: InputCards
): "White" | "Black" | 0 | ["White" | "Black" | "Both", Card] {
  let handOfCardsBlack: number[] = [];
  let handOfCardsWhite: number[] = [];
  const blackHand = hands.Black;
  const whiteHand = hands.White;
  const result: ("White" | "Black")[] = [];

  for (let card of blackHand) {
    handOfCardsBlack.push(card.cardValue);
  }
  let sortedHand = handOfCardsBlack.sort();
  let previousCard = sortedHand[0];
  let count = 0;
  for (let i = 1; i < sortedHand.length; i++) {
    if (previousCard + 1 === sortedHand[i]) {
      previousCard++;
      count++;
      console.log("Black", count);
      console.log(previousCard - 1, sortedHand[i]);
    } else if (previousCard + 1 !== sortedHand[i]) {
      break;
    }
    if (count === 3) {
      result.push("Black");
    }
  }

  for (let card of whiteHand) {
    handOfCardsWhite.push(card.cardValue);
  }
  sortedHand = handOfCardsWhite.sort();
  previousCard = sortedHand[0];
  count = 0;
  for (let i = 1; i < sortedHand.length; i++) {
    if (previousCard + 1 === sortedHand[i]) {
      previousCard = sortedHand[i];
      count++;
    } else if (previousCard + 1 !== sortedHand[i]) {
      break;
    }
    if (count === 3) {
      result.push("White");
    }
  }

  if (result.length === 2) {
    const winner = highestCardInHands(hands);
    return winner;
  } else if (result.length === 1) {
    return result[0];
  } else {
    return 0;
  }
}
