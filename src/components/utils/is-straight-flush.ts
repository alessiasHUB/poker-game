import { InputCards, ReturnType } from "../score-calc";
import isStraight from "./is-straight";
import isFlush from "./is-flush";

//------------------------------------------------checks if cards are straight flush
export default function isStraightFlush(hands: InputCards): false | ReturnType {
  const straightResult = isStraight(hands);
  const flushResult = isFlush(hands);
  if (!straightResult || !flushResult) {
    return false;
  } else {
    if (straightResult && flushResult) {
      if (straightResult.winner === flushResult.winner) {
        return { winner: straightResult.winner };
      } else if (
        straightResult.winner !== flushResult.winner &&
        (straightResult.winner === "Tie" || flushResult.winner === "Tie")
      ) {
        if (straightResult.winner !== "Tie") {
          return { winner: straightResult.winner };
        } else {
          return { winner: flushResult.winner };
        }
      } else {
        return false;
      }
      // if (straightResult.winner === "Black" && flushResult.winner ==="Black"){
      //   return {winner:"Black"}
      // } else if (straightResult.winner === "White" && flushResult.winner === "White") {
      //   return {winner:"White"};
      // } else if (straightResult.winner === "Tie" && flushResult.winner === "Black") {
      //   return {winner:"Black"};
      // }else if (straightResult.winner === "Tie" && flushResult.winner === "White") {
      //   return {winner:"White"};
      // } else {
      //   return straightResult
      // }
    } else {
      return false;
    }
  }
}
