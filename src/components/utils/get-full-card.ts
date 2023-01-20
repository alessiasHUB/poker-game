import { Card } from "../score-calc";

//------------------------------------------------return full card based on value
export default function getFullCard(cardVal: number, hand: Card[]): Card {
  for (let card of hand) {
    if (card.cardValue === cardVal) {
      return card;
    }
  }
  // this will not run
  console.log("bad return");
  return { cardValue: 2, cardKind: "S" };
}
