import { Card, InputCards, WinnerAndCard } from "../score-calc";
import isStraight from "./is-straight";
import isFlush from "./is-flush";

//------------------------------------------------checks if cards are straight flush
function isStraightFlush(
  hands: InputCards
): "White" | "Black" | 0 | WinnerAndCard {
  const straightResult = isStraight(hands);
  const flushResult = isFlush(hands);
  console.log(straightResult, flushResult);
  console.log(straightResult, "\n", flushResult);
  if (straightResult === "Black" && flushResult === "Black") {
    return "Black";
  } else if (straightResult === "White" && flushResult === "White") {
    return "White";
  } else if ( straightResult!=="White"&& straightResult!=="Black" &&  straightResult) {
    if (straightResult[0] === "Both" && flushResult === "White") {
      return "White";
    } else if (straightResult[0] === "Both" && flushResult === "Black") {
      return "Black";
    } else if (typeof flushResult)) {
      if (straightResult[0] === "Both" && flushResult[0] === "Both") {
        const winner = highestCardInHands(hands);
        return winner;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  } else if (typeof flushResult)) {
    if (straightResult === "White" && flushResult[0] === "Both") {
      return "White";
    } else if (straightResult === "Black" && flushResult[0] === "Both") {
      return "Black";
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

export { isStraight, isFlush, isStraightFlush };
