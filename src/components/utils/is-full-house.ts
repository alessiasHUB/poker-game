import { InputCards, ReturnType } from "../score-calc";
import numOfSame from "./num-of-same";
import cardOfMultiples from "./card-of-multiples";
import isThreeOfAKind from "./is-three-of-a-kind";
import numPairs from "./num-pairs";

//------------------------------------------------checks if cards are a full house
export default function isFullHouse(hands: InputCards): false | ReturnType {
  const handObjs = numOfSame(hands);
  if (!handObjs) {
    return false;
  } else {
    const threeResult = isThreeOfAKind(handObjs, hands);
    const numPairsResult = numPairs(handObjs);

    if (threeResult && numPairsResult) {
      console.log(numPairsResult.slice(0, 5));
      if (threeResult.winner === numPairsResult.slice(0, 5)) {
        return threeResult;
      } else if (threeResult.winner === "White" && numPairsResult === "Both1") {
        return threeResult;
      } else if (threeResult.winner === "Black" && numPairsResult === "Both1") {
        return threeResult;
      } else if (threeResult.winner === "Tie" && numPairsResult === "Both1") {
        const winnerThrees = cardOfMultiples(handObjs, hands, 3);
        if (winnerThrees.winner === "Tie") {
          const winnerTwos = cardOfMultiples(handObjs, hands, 2);
          return winnerTwos;
        } else {
          return winnerThrees;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
