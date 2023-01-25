import { Card } from "../score-calc";

//------------------------------------------------checks if ACE is in the hand of a STRAIGHT FLUSH
export default function isRoyalFlush(hand: Card[]): boolean {
  for (let i = 0; i < hand.length; i++) {
    //----------------------------- 14 = ACE
    if (hand[i].cardValue === 14) {
      return true;
    }
  }
  return false;
}
