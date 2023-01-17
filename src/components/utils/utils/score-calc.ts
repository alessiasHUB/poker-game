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
type CardKind = "C" | "D" | "S" | "H";
// all suites are of the same strength in poker, can remove
const kindValue = { C: 0.1, D: 0.2, S: 0.3, H: 0.4 };
type CardValue = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

interface Card {
  cardKind: CardKind;
  cardValue: CardValue;
}
type InputCards = {
  Black: Card[];
  White: Card[];
};
type Winner = "White wins." | "Black wins." | "Tie.";
type WinningType =
  | " - with high card: "
  | " - with pair: "
  | " - with two pairs: "
  | " - with three of a kind: "
  | " - with straight: "
  | " - with flush: "
  | " - with full house: "
  | " - with four of a kind: "
  | " - with straight flush";
type WinningCard = string;
type ReturnType =
  | {
      winner: Winner;
      winningType: WinningType;
      winningCard: WinningCard;
    }
  | { winner: Winner };

//------------------------------------------------checks top card in hand
function highestCard(hand: Card[]): Card {
  let handOfCards: number[] = [];
  for (let card of hand) {
    handOfCards.push(card.cardValue + kindValue[card.cardKind]);
  }
  let largestCard = Math.max(...handOfCards);
  let indexOfLargestCard = handOfCards.indexOf(largestCard);
  let topCard: Card = hand[indexOfLargestCard];
  return topCard;
}
//------------------------------------------------checks how many of same in hand
function numOfSame(hand: Card[]): 0 | object {
  const pairObj: any = {};
  for (let card of hand) {
    if (pairObj[card.cardValue] === undefined) {
      pairObj[card.cardValue] = 1;
    } else {
      pairObj[card.cardValue]++;
    }
  }
  if (!Object.values(pairObj.includes(2 | 3 | 4))) {
    return 0;
  } else {
    return pairObj;
  }
}
//------------------------------------------------checks four of a kind in hand
function isFourOfAKind(handObj: object): boolean {
  if (Object.keys(handObj)[Object.values(handObj).indexOf(4)] === undefined) {
    return false;
  } else {
    return true;
  }
}
//------------------------------------------------checks three of a kind in hand
function isThreeOfAKind(handObj: object): boolean {
  if (Object.keys(handObj)[Object.values(handObj).indexOf(3)] === undefined) {
    return false;
  } else {
    return true;
  }
}
//------------------------------------------------checks number of pairs in hand
function numPairs(handObj: object): number {
  let count: number = 0;
  if (Object.keys(handObj)[Object.values(handObj).indexOf(2)] === undefined) {
    return 0;
  } else {
    for (let num of Object.values(handObj)) {
      if (num === 2) count++;
    }
  }
  return count;
}
//------------------------------------------------checks if cards are a full house
function isFullHouse(hand: Card[]): boolean {
  const handObj = numOfSame(hand);
  if (handObj === 0) return false;
  if (isThreeOfAKind(handObj) && numPairs(handObj) === 1) {
    return true;
  } else {
    return false;
  }
}
//------------------------------------------------checks if cards are in a row
function isInARow(hand: Card[]): boolean {
  let handOfCards: number[] = [];
  for (let card of hand) {
    handOfCards.push(card.cardValue);
  }
  let sortedHand = handOfCards.sort();
  let previousCard = sortedHand[0];
  for (let i = 1; i < sortedHand.length; i++) {
    if (previousCard + 1 === sortedHand[i]) {
      previousCard = sortedHand[i];
    } else {
      return false;
    }
  }
  return true;
}
//------------------------------------------------checks if cards are one suite
function isOneSuite(hand: Card[]): boolean {
  let handOfCards: number = 0;
  const suiteValue = { C: 0.1, D: 1, S: 4, H: 16 };
  const trueCases: number[] = [0.4, 4, 16, 64];
  for (let card of hand) {
    handOfCards = +suiteValue[card.cardKind];
  }
  if (trueCases.includes(handOfCards)) {
    return true;
  } else {
    return false;
  }
}
//------------------------------------------------checks if cards are straight flush
function isStraightFlush(hand: Card[]): boolean {
  if (isInARow(hand) && isOneSuite(hand)) {
    return true;
  } else {
    return false;
  }
}

//------------------------------------------------game result
// export to other function, who won in each function: White | Black | Both
// if both check topCard
function gameResult(inputCards: InputCards): ReturnType {
  const blackTop = highestCard(inputCards.Black);
  const whiteTop = highestCard(inputCards.White);

  if (isStraightFlush(inputCards.Black) || isStraightFlush(inputCards.White)) {
    if (
      isStraightFlush(inputCards.Black) &&
      !isStraightFlush(inputCards.White)
    ) {
      return { winner: "Black wins.", winningType: " - with straight flush" };
    } else if (
      isStraightFlush(inputCards.White) &&
      !isStraightFlush(inputCards.Black)
    ) {
      return { winner: "White wins.", winningType: " - with straight flush" };
    } else {
      if (blackTop > whiteTop) {
        return {
          winner: "Black wins.",
          winningType: " - with straight flush",
          winningCard: ` highest card: ${blackTop.cardValue}${blackTop.cardKind}`,
        };
      } else {
        return {
          winner: "White wins.",
          winningType: " - with straight flush",
          winningCard: ` highest card: ${whiteTop.cardValue}${whiteTop.cardKind}`,
        };
      }
    }
  }

  if (isInARow(inputCards.Black) || isInARow(inputCards.White)) {
    if (isInARow(inputCards.Black) && !isInARow(inputCards.White)) {
      return { winner: "Black wins.", winningType: " - with straight: " };
    } else if (isInARow(inputCards.White) && !isInARow(inputCards.Black)) {
      return { winner: "White wins.", winningType: " - with straight: " };
    } else {
      if (blackTop > whiteTop) {
        return {
          winner: "Black wins.",
          winningType: " - with straight: ",
          winningCard: ` highest card: ${blackTop.cardValue}${blackTop.cardKind}`,
        };
      } else {
        return {
          winner: "White wins.",
          winningType: " - with straight: ",
          winningCard: ` highest card: ${whiteTop.cardValue}${whiteTop.cardKind}`,
        };
      }
    }
  }

  if (isOneSuite(inputCards.Black) || isOneSuite(inputCards.White)) {
    if (isOneSuite(inputCards.Black) && !isOneSuite(inputCards.White)) {
      return { winner: "Black wins.", winningType: " - with flush: " };
    } else if (isOneSuite(inputCards.White) && !isOneSuite(inputCards.Black)) {
      return { winner: "White wins.", winningType: " - with flush: " };
    } else {
      if (blackTop > whiteTop) {
        return {
          winner: "Black wins.",
          winningType: " - with flush: ",
          winningCard: ` highest card: ${blackTop.cardValue}${blackTop.cardKind}`,
        };
      } else {
        return {
          winner: "White wins.",
          winningType: " - with flush: ",
          winningCard: ` highest card: ${whiteTop.cardValue}${whiteTop.cardKind}`,
        };
      }
    }
  }

  const inputWhiteObj = numOfSame(inputCards.White);
  const inputBlackObj = numOfSame(inputCards.Black);
  // checks pairs and full house
  if (inputWhiteObj !== 0 && inputBlackObj !== 0) {
    if (isFourOfAKind(inputBlackObj) || isFourOfAKind(inputWhiteObj)) {
      if (isFourOfAKind(inputBlackObj) && !isFourOfAKind(inputWhiteObj)) {
        return {
          winner: "Black wins.",
          winningType: " - with four of a kind: ",
        };
      } else if (
        isFourOfAKind(inputWhiteObj) &&
        !isFourOfAKind(inputBlackObj)
      ) {
        return {
          winner: "White wins.",
          winningType: " - with four of a kind: ",
        };
      } else {
        if (blackTop > whiteTop) {
          return {
            winner: "Black wins.",
            winningType: " - with four of a kind: ",
            winningCard: ` 4 card: `,
          };
        } else {
          return {
            winner: "White wins.",
            winningType: " - with four of a kind: ",
            winningCard: ` 4 card: `,
          };
        }
      }
    } else if (isFullHouse(inputCards.Black) || isFullHouse(inputCards.White)) {
      if (isFullHouse(inputCards.Black) && !isFullHouse(inputCards.White)) {
        return {
          winner: "Black wins.",
          winningType: " - with full house: ",
        };
      } else if (
        isFullHouse(inputCards.White) &&
        !isFullHouse(inputCards.Black)
      ) {
        return {
          winner: "White wins.",
          winningType: " - with full house: ",
        };
      } else {
        if (blackTop > whiteTop) {
          return {
            winner: "Black wins.",
            winningType: " - with full house: ",
            winningCard: ` 3 card: `,
          };
        } else {
          return {
            winner: "White wins.",
            winningType: " - with full house: ",
            winningCard: ` 3 card: `,
          };
        }
      }
    } else if (isThreeOfAKind(inputBlackObj) || isThreeOfAKind(inputWhiteObj)) {
      if (isThreeOfAKind(inputBlackObj) && !isThreeOfAKind(inputWhiteObj)) {
        return {
          winner: "Black wins.",
          winningType: " - with three of a kind: ",
        };
      } else if (
        isThreeOfAKind(inputWhiteObj) &&
        !isThreeOfAKind(inputBlackObj)
      ) {
        return {
          winner: "White wins.",
          winningType: " - with three of a kind: ",
        };
      } else {
        if (blackTop > whiteTop) {
          return {
            winner: "Black wins.",
            winningType: " - with three of a kind: ",
            winningCard: ` card: `,
          };
        } else {
          return {
            winner: "White wins.",
            winningType: " - with three of a kind: ",
            winningCard: ` card: `,
          };
        }
      }
    } else if (numPairs(inputBlackObj) > 1 || numPairs(inputWhiteObj) > 1) {
      if (numPairs(inputBlackObj) > 1 && numPairs(inputWhiteObj) < 2) {
        return {
          winner: "Black wins.",
          winningType: " - with two pairs: ",
        };
      } else if (numPairs(inputWhiteObj) > 1 && numPairs(inputBlackObj) < 2) {
        return {
          winner: "White wins.",
          winningType: " - with two pairs: ",
        };
      } else {
        if (blackTop > whiteTop) {
          return {
            winner: "Black wins.",
            winningType: " - with two pairs: ",
            winningCard: ` highest pair: `,
          };
        } else {
          return {
            winner: "White wins.",
            winningType: " - with two pairs: ",
            winningCard: ` highest pair: `,
          };
        }
      }
    } else if (numPairs(inputBlackObj) > 1 || numPairs(inputWhiteObj) > 1) {
      if (numPairs(inputBlackObj) > 1 && numPairs(inputWhiteObj) < 1) {
        return {
          winner: "Black wins.",
          winningType: " - with pair: ",
        };
      } else if (numPairs(inputWhiteObj) > 1 && numPairs(inputBlackObj) < 1) {
        return {
          winner: "White wins.",
          winningType: " - with pair: ",
        };
      } else {
        if (blackTop > whiteTop) {
          return {
            winner: "Black wins.",
            winningType: " - with pair: ",
            winningCard: ` highest pair: `,
          };
        } else {
          return {
            winner: "White wins.",
            winningType: " - with pair: ",
            winningCard: ` highest pair: `,
          };
        }
      }
    }
  }

  if (blackTop > whiteTop) {
    return {
      winner: "Black wins.",
      winningType: " - with straight flush",
      winningCard: ` highest card: ${blackTop.cardValue}${blackTop.cardKind}`,
    };
  } else {
    return {
      winner: "White wins.",
      winningType: " - with straight flush",
      winningCard: ` highest card: ${whiteTop.cardValue}${whiteTop.cardKind}`,
    };
  }
}

export default gameResult;
