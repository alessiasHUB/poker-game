import { InputCards, Card } from "../score-calc";

//------------------------------------------------checks top card in hands
export default function highestCardInHands(
  hands: InputCards
): ["White" | "Black" | "Both", Card] {
  let handOfCardsBlack: number[] = [];
  let handOfCardsWhite: number[] = [];
  const blackHand = hands.Black;
  const whiteHand = hands.White;

  for (let card of blackHand) {
    handOfCardsBlack.push(card.cardValue);
  }
  for (let card of whiteHand) {
    handOfCardsWhite.push(card.cardValue);
  }

  const largestCardBlack: number = Math.max(...handOfCardsBlack);
  const largestCardWhite: number = Math.max(...handOfCardsWhite);

  if (largestCardBlack > largestCardWhite) {
    let indexOfLargestCard = handOfCardsBlack.indexOf(largestCardBlack);
    let topCardBlack: Card = blackHand[indexOfLargestCard];
    return ["Black", topCardBlack];
  } else if (largestCardBlack < largestCardWhite) {
    let indexOfLargestCard = handOfCardsWhite.indexOf(largestCardWhite);
    const topCardWhite: Card = whiteHand[indexOfLargestCard];
    return ["White", topCardWhite];
  } else {
    let indexOfLargestCard = handOfCardsWhite.indexOf(largestCardWhite);
    const topCardWhite: Card = whiteHand[indexOfLargestCard];
    // todo: change return to display both cards?
    return ["Both", topCardWhite];
  }
}
