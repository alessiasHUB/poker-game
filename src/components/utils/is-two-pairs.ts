import { InputCards, ReturnType } from "../score-calc";
import cardOfMultiples from "./card-of-multiples";
import numPairs from "./num-pairs";

//------------------------------------------------checks three of a kind in hands
export default function isTwoPairs(
  handObjs: object[],
  hands: InputCards
): false | ReturnType {
  const numPairsResult = numPairs(handObjs);
  let numInPairsResult: number;
  if (numPairsResult) {
    numInPairsResult = Number(numPairsResult.slice(-1));
    if (numInPairsResult === 2) {
      if (numPairsResult.slice(0, 5) === "Black") {
        return { winner: "Black" };
      } else if (numPairsResult[0] === "W") {
        return { winner: "White" };
      } else {
        const ultimateWinner = cardOfMultiples(handObjs, hands, 2);
        console.log(ultimateWinner);
        return ultimateWinner;
      }
    } else return false;
  } else return false;
}
