import { InputCards, ReturnType } from "../score-calc";
import numOfSame from "./num-of-same";
import cardOfMultiples from "./card-of-multiples";

//------------------------------------------------checks if cards are a full house
export default function isFullHouse(
  hands: InputCards
): "Black" | "White" | 0 | ["White" | "Black" | "Both", Card] {
  const handObjs = numOfSame(hands);
  if (handObjs === 0) {
    return 0;
  } else {
    const threeResult = isThreeOfAKind(handObjs, hands);
    const numPairsResult = numPairs(handObjs);
    if (threeResult === "Black" && numPairsResult === "Both1") {
      return "Black";
    } else if (threeResult === "White" && numPairsResult === "Both1") {
      return "White";
    } else if (threeResult === "Black" && numPairsResult === "Black1") {
      return "Black";
    } else if (threeResult === "White" && numPairsResult === "White1") {
      return "White";
    } else if (Array.isArray(threeResult)) {
      const winner: ["White" | "Black" | "Both", Card] = cardOfMultiples(
        handObjs,
        hands,
        3
      );
      return winner;
    } else {
      return 0;
    }
  }
}
