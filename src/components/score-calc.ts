/**
 * title: Poker hands
 * date: 17/01/2022
 * link: https://codingdojo.org/kata/PokerHands/
 * ============================================================
 * task:
 * Your job is to compare several pairs of poker hands and to
 * indicate which, if either, has a higher rank.
 * clubs, diamonds, hearts, spades = C, D, H, S
 * 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, ace =
 * 2, 3, 4, 5, 6, 7, 8, 9, 10,  11,   12,    13,   14
 * ============================================================
 * Checks which hand is ranked higher
 * @param cards - an object containing the cards of the two players
 * @returns who the winner is and what their hand was
 */

//=====================HELPER FUNCTIONS==============================================
// import cardOfMultiples from "./utils/card-of-multiples";
// import getFullCard from "./utils/get-full-card";
import highestCardInHands from "./utils/highest-card-in-hands";
import isFlush from "./utils/is-flush";
import isFourOfAKind from "./utils/is-four-of-a-kind";
import isOnePair from "./utils/is-one-pair";
import isStraightFlush from "./utils/is-straight-flush";
import isStraight from "./utils/is-straight";
import isThreeOfAKind from "./utils/is-three-of-a-kind";
import isTwoPairs from "./utils/is-two-pairs";
import numOfSame from "./utils/num-of-same";
import isFullHouse from "./utils/is-full-house";
import isRoyalFlush from "./utils/is-royal-flush";
// import numPairs from "./utils/num-pairs";
//------------------------------------------------checks if cards are royal flush
// todo^^^^^ (check if there's an ACE in winning hand)
// todo: "TIE" for PAIR, TWO PAIRS, HIGHCARD
//=====================TYPES=============================================
export type CardKind = "C" | "D" | "S" | "H";
export type CardValue = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export interface Card {
  cardKind: CardKind;
  cardValue: CardValue;
}
export type InputCards = {
  Black: Card[];
  White: Card[];
};
export type Winner = "White" | "Black" | "Tie";
// export type WinnerAndCard = ["White" | "Black" | "Both", Card];
export type WinningType =
  | "high card"
  | "pair"
  | "two pairs"
  | "three of a kind"
  | "straight"
  | "flush"
  | "full house"
  | "four of a kind"
  | "straight flush"
  | "royal flush";
export type WinningCard = number | Card;
export type ReturnType =
  | {
      winner: Winner;
      winningType: WinningType;
      winningCard: WinningCard;
    }
  | { winner: Winner };

//========================GAME RESULT====================================
//todo: add winning hand to return type?

//------------------------------------------------game result function
function gameResult(inputCards: InputCards): ReturnType {
  // royal flush ----> straight flush
  const straightFlushResult = isStraightFlush(inputCards);
  if (straightFlushResult) {
    const royalFlushResultBlack = isRoyalFlush(inputCards.Black);
    const royalFlushResultWhite = isRoyalFlush(inputCards.White);
    if (royalFlushResultBlack && royalFlushResultWhite) {
      return {
        winner: "Tie",
      };
    } else if (royalFlushResultBlack) {
      return { winner: "Black", winningType: "royal flush" };
    } else if (royalFlushResultWhite) {
      return { winner: "White", winningType: "royal flush" };
    }
    if (straightFlushResult.winner !== "Tie") {
      return {
        winner: straightFlushResult.winner,
        winningType: "straight flush",
      };
    } else {
      return straightFlushResult;
    }
  }

  const numOfSameObjs = numOfSame(inputCards);

  // four of a kind ----> full house
  if (numOfSameObjs) {
    const fourOfAKindResult = isFourOfAKind(numOfSameObjs, inputCards);
    const fullHouseResult = isFullHouse(inputCards);
    // four of a kind
    if (fourOfAKindResult) {
      if (fourOfAKindResult) {
        if (fourOfAKindResult.winner !== "Tie") {
          return {
            winner: fourOfAKindResult.winner,
            winningType: "four of a kind",
          };
        } else {
          return fourOfAKindResult;
        }
      }
    } /* full house */ else if (fullHouseResult) {
      if (fullHouseResult) {
        if (fullHouseResult.winner !== "Tie") {
          return {
            winner: fullHouseResult.winner,
            winningType: "full house",
          };
        } else {
          return fullHouseResult;
        }
      }
    }
  }

  // flush
  const flushResult = isFlush(inputCards);
  if (flushResult) {
    if (flushResult.winner !== "Tie") {
      return {
        winner: flushResult.winner,
        winningType: "flush",
      };
    } else {
      return flushResult;
    }
  }

  // straight
  const straightResult = isStraight(inputCards);
  if (straightResult) {
    if (straightResult.winner !== "Tie") {
      return {
        winner: straightResult.winner,
        winningType: "straight",
      };
    } else {
      return straightResult;
    }
  }

  // three of a kind ---> two pairs ---> one pair
  if (numOfSameObjs) {
    const threeOfAKindResult = isThreeOfAKind(numOfSameObjs, inputCards);
    const twoPairsResult = isTwoPairs(numOfSameObjs, inputCards);
    const onePairResult = isOnePair(numOfSameObjs, inputCards);
    // three of a kind
    if (threeOfAKindResult) {
      if (threeOfAKindResult.winner !== "Tie") {
        return {
          winner: threeOfAKindResult.winner,
          winningType: "three of a kind",
        };
      } else {
        return threeOfAKindResult;
      }
    } /* two pairs */ else if (twoPairsResult) {
      if (twoPairsResult.winner !== "Tie") {
        return {
          winner: twoPairsResult.winner,
          winningType: "two pairs",
        };
      } else {
        return twoPairsResult;
      }
    } /* one pairs */ else if (onePairResult) {
      if (onePairResult.winner !== "Tie") {
        return {
          winner: onePairResult.winner,
          winningType: "pair",
        };
      } else {
        return onePairResult;
      }
    }
  }

  // high card
  const highestCardResult = highestCardInHands(inputCards);
  if (!numOfSameObjs) {
    if (highestCardResult[0] === "Black") {
      return { winner: "Black", winningType: "high card" };
    } else if (highestCardResult[0] === "White") {
      return { winner: "White", winningType: "high card" };
    } else {
      return { winner: "Tie" };
    }
  } else return { winner: "Tie" };
}

export default gameResult;
