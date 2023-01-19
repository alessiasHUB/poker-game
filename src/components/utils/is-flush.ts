import { InputCards, Card } from "../score-calc";
import highestCardInHands from "./highest-card-in-hands";

//------------------------------------------------checks if cards are one suite9
export default function isFlush(
  hands: InputCards
): "White" | "Black" | 0 | ["White" | "Black" | "Both", Card] {
  let handOfCardsBlack: number = 0;
  let handOfCardsWhite: number = 0;
  const blackHand = hands.Black;
  const whiteHand = hands.White;

  const suiteValue = { C: 0.1, D: 1, S: 4, H: 16 };
  const trueCases: number[] = [0.5, 5, 20, 80];

  for (let card of blackHand) {
    handOfCardsBlack += suiteValue[card.cardKind];
  }
  for (let card of whiteHand) {
    handOfCardsWhite += suiteValue[card.cardKind];
  }
  if (
    trueCases.includes(handOfCardsBlack) &&
    trueCases.includes(handOfCardsWhite)
  ) {
    const winner = highestCardInHands(hands);
    return winner;
  } else if (
    trueCases.includes(handOfCardsBlack) &&
    !trueCases.includes(handOfCardsWhite)
  ) {
    return "Black";
  } else if (
    !trueCases.includes(handOfCardsBlack) &&
    trueCases.includes(handOfCardsWhite)
  ) {
    return "White";
  } else {
    return 0;
  }
}
