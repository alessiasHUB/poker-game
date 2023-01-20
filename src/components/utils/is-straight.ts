import { InputCards, ReturnType } from "../score-calc";
import highestCardInHands from "./highest-card-in-hands";

//------------------------------------------------checks if cards are in a row
export default function isStraight(hands: InputCards): false | ReturnType {
  let handOfCardsBlack: number[] = [];
  let handOfCardsWhite: number[] = [];
  const blackHand = hands.Black;
  const whiteHand = hands.White;
  const result: ("White" | "Black")[] = [];

  for (let card of blackHand) {
    handOfCardsBlack.push(card.cardValue);
  }
  let sortedHand = handOfCardsBlack.sort((a, b) => a - b);
  let previousCard = sortedHand[0];
  let count = 0;
  for (let i = 1; i < sortedHand.length; i++) {
    if (previousCard + 1 === sortedHand[i]) {
      previousCard++;
      count++;
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
  sortedHand = handOfCardsWhite.sort((a, b) => a - b);
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
    if (winner[0] === "Both") {
      return { winner: "Tie" };
    } else {
      return { winner: winner[0], winningCard: winner[1] };
    }
  } else if (result.length === 1) {
    return { winner: result[0] };
  } else {
    return false;
  }
}
