import { InputCards } from "../score-calc";

//------------------------------------------------checks how many of same in hands
export default function numOfSame(hands: InputCards): false | object[] {
  const blackHand = hands.Black;
  const whiteHand = hands.White;
  const pairObjBlack: any = {};
  const pairObjWhite: any = {};

  for (let card of blackHand) {
    if (pairObjBlack[card.cardValue] === undefined) {
      pairObjBlack[card.cardValue] = 1;
    } else {
      pairObjBlack[card.cardValue]++;
    }
  }
  for (let card of whiteHand) {
    if (pairObjWhite[card.cardValue] === undefined) {
      pairObjWhite[card.cardValue] = 1;
    } else {
      pairObjWhite[card.cardValue]++;
    }
  }

  if (
    !Object.values(pairObjBlack).includes(2 | 3 | 4) &&
    !Object.values(pairObjWhite).includes(2 | 3 | 4)
  ) {
    return false;
  } else {
    return [pairObjBlack, pairObjWhite];
  }
}
