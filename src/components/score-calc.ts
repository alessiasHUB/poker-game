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

//=====================TYPES=============================================
export type CardKind = "C" | "D" | "S" | "H";
// todo: all suites are of the same strength in poker, can remove
const kindValue = { C: 0.1, D: 0.2, S: 0.3, H: 0.4 };
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

//=====================HELPER FUNCTIONS==============================================
//------------------------------------------------checks top card in hands

//------------------------------------------------return value of card from multiples

//------------------------------------------------return full card based on value

//------------------------------------------------checks how many of same in hands

//------------------------------------------------checks four of a kind in hands

//------------------------------------------------checks three of a kind in hands

//------------------------------------------------checks if two pairs in hands

//------------------------------------------------checks if one pair in hands

//------------------------------------------------checks number of pairs in hands

//------------------------------------------------checks if cards are a full house
function isFullHouse(
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

//------------------------------------------------checks if cards are in a row
function isStraight(
  hands: InputCards
): "White" | "Black" | 0 | ["White" | "Black" | "Both", Card] {
  let handOfCardsBlack: number[] = [];
  let handOfCardsWhite: number[] = [];
  const blackHand = hands.Black;
  const whiteHand = hands.White;
  const result: ("White" | "Black")[] = [];

  for (let card of blackHand) {
    handOfCardsBlack.push(card.cardValue);
  }
  let sortedHand = handOfCardsBlack.sort();
  let previousCard = sortedHand[0];
  for (let i = 1; i < sortedHand.length; i++) {
    if (previousCard + 1 === sortedHand[i]) {
      previousCard = sortedHand[i];
      result.push("Black");
      break;
    }
  }
  for (let card of whiteHand) {
    handOfCardsWhite.push(card.cardValue);
  }
  sortedHand = handOfCardsWhite.sort();
  previousCard = sortedHand[0];
  for (let i = 1; i < sortedHand.length; i++) {
    if (previousCard + 1 === sortedHand[i]) {
      previousCard = sortedHand[i];
      result.push("White");
      break;
    }
  }

  if (result.length === 2) {
    return 0;
  } else if (result.length === 1) {
    return result[0];
  } else {
    const winner = highestCardInHands(hands);
    return winner;
  }
}

//------------------------------------------------checks if cards are one suite
function isFlush(
  hands: InputCards
): "White" | "Black" | 0 | ["White" | "Black" | "Both", Card] {
  let handOfCardsBlack: number = 0;
  let handOfCardsWhite: number = 0;

  const blackHand = hands.Black;
  const whiteHand = hands.White;

  const suiteValue = { C: 0.1, D: 1, S: 4, H: 16 };
  const trueCases: number[] = [0.5, 5, 20, 80];

  for (let card of blackHand) {
    handOfCardsBlack += suiteValue[card.cardKind];
  }
  for (let card of whiteHand) {
    handOfCardsWhite += suiteValue[card.cardKind];
  }
  if (
    trueCases.includes(handOfCardsBlack) &&
    trueCases.includes(handOfCardsWhite)
  ) {
    const winner = highestCardInHands(hands);
    return winner;
  } else if (
    trueCases.includes(handOfCardsBlack) &&
    !trueCases.includes(handOfCardsWhite)
  ) {
    return "Black";
  } else if (
    !trueCases.includes(handOfCardsBlack) &&
    trueCases.includes(handOfCardsWhite)
  ) {
    return "White";
  } else {
    return 0;
  }
}

//------------------------------------------------checks if cards are straight flush
function isStraightFlush(
  hands: InputCards
): "White" | "Black" | 0 | ["White" | "Black" | "Both", Card] {
  const straightResult = isStraight(hands);
  const flushResult = isFlush(hands);

  if (straightResult === "Black" && flushResult === "Black") {
    return "Black";
  } else if (straightResult === "White" && flushResult === "White") {
    return "White";
  } else if (Array.isArray(straightResult)) {
    if (straightResult[0] === "Both" && flushResult === "White") {
      return "White";
    } else if (straightResult[0] === "Both" && flushResult === "Black") {
      return "Black";
    } else if (Array.isArray(flushResult)) {
      if (straightResult[0] === "Both" && flushResult[0] === "Both") {
        const winner = highestCardInHands(hands);
        return winner;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  } else if (Array.isArray(flushResult)) {
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
//------------------------------------------------checks if cards are royal flush
// todo^^^^^ (check if there's an ACE in winning hand)

//=====================GAME RESULT==============================================
//todo: add winning hand to return type?
//------------------------------------------------game result function
function gameResult(inputCards: InputCards): ReturnType {
  // royal flush
  // straight flush
  const straightFlushResult = isStraightFlush(inputCards);
  console.log(459, straightFlushResult);
  if (straightFlushResult !== 0) {
    console.log(461, straightFlushResult);
    if (straightFlushResult === "Black") {
      return { winner: "Black", winningType: "straight flush" };
    } else if (straightFlushResult === "White") {
      return { winner: "White", winningType: "straight flush" };
    } else if (Array.isArray(straightFlushResult)) {
      if (straightFlushResult[0] === "Black") {
        return {
          winner: "Black",
          winningType: "straight flush",
          winningCard: straightFlushResult[1],
        };
      } else if (straightFlushResult[0] === "White") {
        return {
          winner: "White",
          winningType: "straight flush",
          winningCard: straightFlushResult[1],
        };
      } else {
        return { winner: "Tie" };
      }
    }
  }

  const numOfSameObjs = numOfSame(inputCards);

  // four of a kind ----> full house
  if (numOfSameObjs !== 0) {
    console.log(427);
    const fourOfAKindResult = isFourOfAKind(numOfSameObjs, inputCards);
    const fullHouseResult = isFullHouse(inputCards);
    // four of a kind
    if (fourOfAKindResult !== 0) {
      if (fourOfAKindResult === "Black") {
        return { winner: "Black", winningType: "four of a kind" };
      } else if (fourOfAKindResult === "White") {
        return { winner: "White", winningType: "four of a kind" };
      } else if (Array.isArray(fourOfAKindResult)) {
        if (fourOfAKindResult[0] === "Black") {
          return {
            winner: "Black",
            winningType: "four of a kind",
            winningCard: fourOfAKindResult[1],
          };
        } else if (fourOfAKindResult[0] === "White") {
          return {
            winner: "White",
            winningType: "four of a kind",
            winningCard: fourOfAKindResult[1],
          };
        } else {
          return {
            winner: "Tie",
          };
        }
      }
    } /* full house */ else if (fullHouseResult !== 0) {
      if (!Array.isArray(fullHouseResult)) {
        if (fullHouseResult === "Black") {
          return {
            winner: "Black",
            winningType: "full house",
          };
        } else if (fullHouseResult === "White") {
          return {
            winner: "White",
            winningType: "full house",
          };
        }
      } else {
        if (fullHouseResult[0] === "Black") {
          return {
            winner: "Black",
            winningType: "full house",
            winningCard: fullHouseResult[1],
          };
        } else if (fullHouseResult[0] === "White") {
          return {
            winner: "White",
            winningType: "full house",
            winningCard: fullHouseResult[1],
          };
        } else {
          return {
            winner: "Tie",
          };
        }
      }
    }
  }

  // flush
  const flushResult = isFlush(inputCards);
  if (flushResult !== 0) {
    if (!Array.isArray(flushResult)) {
      if (flushResult === "Black") {
        return { winner: "Black", winningType: "flush" };
      } else if (flushResult === "White") {
        return { winner: "White", winningType: "flush" };
      }
    } else {
      if (flushResult[0] === "Black") {
        return {
          winner: "Black",
          winningType: "flush",
          winningCard: flushResult[1],
        };
      } else if (flushResult[0] === "White") {
        return {
          winner: "White",
          winningType: "flush",
          winningCard: flushResult[1],
        };
      } else {
        return { winner: "Tie" };
      }
    }
  }

  // straight
  const straightResult = isStraight(inputCards);
  if (straightResult !== 0) {
    if (!Array.isArray(straightResult)) {
      if (straightResult === "Black") {
        return { winner: "Black", winningType: "flush" };
      } else if (straightResult === "White") {
        return { winner: "White", winningType: "flush" };
      }
    } else {
      if (straightResult[0] === "Black") {
        return {
          winner: "Black",
          winningType: "flush",
          winningCard: straightResult[1],
        };
      } else if (straightResult[0] === "White") {
        return {
          winner: "White",
          winningType: "flush",
          winningCard: straightResult[1],
        };
      } else {
        return { winner: "Tie" };
      }
    }
  }

  // three of a kind ---> two pairs ---> one pair
  if (numOfSameObjs !== 0) {
    console.log(427);
    const threeOfAKindResult = isThreeOfAKind(numOfSameObjs, inputCards);
    const twoPairsResult = isTwoPairs(numOfSameObjs, inputCards);
    const onePairResult = isOnePair(numOfSameObjs, inputCards);
    // three of a kind
    if (threeOfAKindResult !== 0) {
      if (threeOfAKindResult === "Black") {
        return { winner: "Black", winningType: "four of a kind" };
      } else if (threeOfAKindResult === "White") {
        return { winner: "White", winningType: "four of a kind" };
      } else if (Array.isArray(threeOfAKindResult)) {
        if (threeOfAKindResult[0] === "Black") {
          return {
            winner: "Black",
            winningType: "four of a kind",
            winningCard: threeOfAKindResult[1],
          };
        } else if (threeOfAKindResult[0] === "White") {
          return {
            winner: "White",
            winningType: "four of a kind",
            winningCard: threeOfAKindResult[1],
          };
        } else {
          return {
            winner: "Tie",
          };
        }
      }
    } /* two pairs */ else if (twoPairsResult !== 0) {
      if (!Array.isArray(twoPairsResult)) {
        if (twoPairsResult === "Black") {
          return {
            winner: "Black",
            winningType: "full house",
          };
        } else if (twoPairsResult === "White") {
          return {
            winner: "White",
            winningType: "full house",
          };
        }
      } else {
        if (twoPairsResult[0] === "Black") {
          return {
            winner: "Black",
            winningType: "full house",
            winningCard: twoPairsResult[1],
          };
        } else if (twoPairsResult[0] === "White") {
          return {
            winner: "White",
            winningType: "full house",
            winningCard: twoPairsResult[1],
          };
        } else {
          return {
            winner: "Tie",
          };
        }
      }
    } /* one pairs */ else if (onePairResult !== 0) {
      if (!Array.isArray(onePairResult)) {
        if (onePairResult === "Black") {
          return {
            winner: "Black",
            winningType: "full house",
          };
        } else if (onePairResult === "White") {
          return {
            winner: "White",
            winningType: "full house",
          };
        }
      } else {
        if (onePairResult[0] === "Black") {
          return {
            winner: "Black",
            winningType: "full house",
            winningCard: onePairResult[1],
          };
        } else if (onePairResult[0] === "White") {
          return {
            winner: "White",
            winningType: "full house",
            winningCard: onePairResult[1],
          };
        } else {
          return {
            winner: "Tie",
          };
        }
      }
    }
  }

  // high card
  const highestCardResult = highestCardInHands(inputCards);
  if (numOfSameObjs === 0) {
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
