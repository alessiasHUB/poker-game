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
export type ReturnType =
  | {
      winner: Winner;
      winningType: WinningType;
      winningCard: WinningCard;
    }
  | { winner: Winner };

//------------------------------------------------checks top card in hands
function highestCard(hands: InputCards): (string | Card)[] {
  let handOfCardsBlack: number[] = [];
  let handOfCardsWhite: number[] = [];
  const blackHand = hands.Black;
  const whiteHand = hands.White;

  for (let card of blackHand) {
    handOfCardsBlack.push(card.cardValue + kindValue[card.cardKind]);
  }
  for (let card of whiteHand) {
    handOfCardsWhite.push(card.cardValue + kindValue[card.cardKind]);
  }
  let largestCard = Math.max(...handOfCardsBlack);
  let indexOfLargestCard = handOfCardsBlack.indexOf(largestCard);
  let topCardBlack: Card = blackHand[indexOfLargestCard];
  largestCard = Math.max(...handOfCardsWhite);
  indexOfLargestCard = handOfCardsWhite.indexOf(largestCard);
  let topCardWhite: Card = whiteHand[indexOfLargestCard];
  if (topCardBlack > topCardWhite) {
    return ["Black", topCardBlack];
  } else {
    return ["White", topCardWhite];
  }
}
//------------------------------------------------checks how many of same in hands
function numOfSame(hands: InputCards): 0 | object[] {
  const blackHand = hands.Black;
  const whiteHand = hands.White;
  const pairObjBlack: any = {};
  const pairObjWhite: any = {};
  for (let card of blackHand) {
    if (pairObjBlack[card.cardValue] === undefined) {
      pairObjBlack[card.cardValue] = 1;
    } else {
      pairObjBlack[card.cardValue]++;
    }
  }
  for (let card of whiteHand) {
    if (pairObjWhite[card.cardValue] === undefined) {
      pairObjWhite[card.cardValue] = 1;
    } else {
      pairObjWhite[card.cardValue]++;
    }
  }

  if (
    !Object.values(pairObjBlack).includes(2 | 3 | 4) &&
    !Object.values(pairObjWhite).includes(2 | 3 | 4)
  ) {
    return 0;
  } else {
    return [pairObjBlack, pairObjWhite];
  }
}
//------------------------------------------------checks four of a kind in hands
function isFourOfAKind(handObjs: object[]): "Both" | "White" | "Black" | 0 {
  const handObjBlack = handObjs[0];
  const handObjWhite = handObjs[1];
  const result: ("White" | "Black")[] = [];
  if (
    Object.keys(handObjBlack)[Object.values(handObjBlack).indexOf(4)] ===
    undefined
  ) {
    result.push("Black");
  }
  if (
    Object.keys(handObjWhite)[Object.values(handObjWhite).indexOf(4)] ===
    undefined
  ) {
    result.push("White");
  }
  if (result.length === 2) {
    return "Both";
  } else if (result.length === 1) {
    return result[0];
  } else {
    return 0;
  }
}
//------------------------------------------------checks three of a kind in hands
function isThreeOfAKind(handObjs: object[]): "Both" | "White" | "Black" | 0 {
  const handObjBlack = handObjs[0];
  const handObjWhite = handObjs[1];
  const result: ("White" | "Black")[] = [];
  if (
    Object.keys(handObjBlack)[Object.values(handObjBlack).indexOf(3)] ===
    undefined
  ) {
    result.push("Black");
  }
  if (
    Object.keys(handObjWhite)[Object.values(handObjWhite).indexOf(3)] ===
    undefined
  ) {
    result.push("White");
  }
  if (result.length === 2) {
    return "Both";
  } else if (result.length === 1) {
    return result[0];
  } else {
    return 0;
  }
}
//------------------------------------------------checks number of pairs in hands
function numPairs(
  handObjs: object[]
): "Both2" | "Black2" | "White2" | "Both1" | "Black1" | "White1" | 0 {
  const handObjBlack = handObjs[0];
  const handObjWhite = handObjs[1];
  const result: number[] = [];
  let count: number = 0;

  for (let num of Object.values(handObjBlack)) {
    if (num === 2) count++;
  }
  result.push(count);
  count = 0;

  for (let num of Object.values(handObjWhite)) {
    if (num === 2) count++;
  }
  result.push(count);
  if (result[0] === 2 && result[1] === 2) {
    return "Both2";
  } else if (result[0] === 2 && result[1] !== 2) {
    return "Black2";
  } else if (result[0] !== 2 && result[1] === 2) {
    return "White2";
  } else if (result[0] === 1 && result[1] === 1) {
    return "Both1";
  } else if (result[0] === 1 && result[1] !== 1) {
    return "Black1";
  } else if (result[0] !== 1 && result[1] === 1) {
    return "White1";
  } else {
    return 0;
  }
}
//------------------------------------------------checks if cards are a full house
function isFullHouse(hands: InputCards): "Both" | "Black" | "White" | 0 {
  const handObjs = numOfSame(hands);
  if (handObjs === 0) {
    return 0;
  } else {
    if (isThreeOfAKind(handObjs) === "Both" && numPairs(handObjs) === "Both1") {
      return "Both";
    } else if (
      isThreeOfAKind(handObjs) === "Both" &&
      numPairs(handObjs) === "Black1"
    ) {
      return "Black";
    } else if (
      isThreeOfAKind(handObjs) === "Both" &&
      numPairs(handObjs) === "White1"
    ) {
      return "White";
    } else if (
      isThreeOfAKind(handObjs) === "Black" &&
      numPairs(handObjs) === "Both1"
    ) {
      return "Black";
    } else if (
      isThreeOfAKind(handObjs) === "White" &&
      numPairs(handObjs) === "Both1"
    ) {
      return "White";
    } else if (
      isThreeOfAKind(handObjs) === "Black" &&
      numPairs(handObjs) === "Black1"
    ) {
      return "Black";
    } else if (
      isThreeOfAKind(handObjs) === "White" &&
      numPairs(handObjs) === "White1"
    ) {
      return "White";
    } else {
      return 0;
    }
  }
}
//------------------------------------------------checks if cards are in a row
function isInARow(hands: InputCards): any  {
  let handOfCardsBlack: number[] = [];
  let handOfCardsWhite: number[] = [];
  const blackHand = hands.Black;
  const whiteHand = hands.White;
  const result = []

  for (let card of blackHand) {
    handOfCardsBlack.push(card.cardValue);
  }
  let sortedHand = handOfCardsBlack.sort();
  let previousCard = sortedHand[0];
  for (let i = 1; i < sortedHand.length; i++) {
    if (previousCard + 1 === sortedHand[i]) {
      previousCard = sortedHand[i];
    } else {
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
    } else {
      result.push("White");
      break;
    }
  }

  if(){}
  
}
//------------------------------------------------checks if cards are one suite
function isOneSuite(hand: Card[]): boolean {
  let handOfCards: number = 0;
  const suiteValue = { C: 0.1, D: 1, S: 4, H: 16 };
  const trueCases: number[] = [0.4, 4, 16, 64];
  for (let card of hand) {
    handOfCards += suiteValue[card.cardKind];
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
    console.log(163);
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

  const inputWhiteObj = numOfSame(inputCards.White);
  const inputBlackObj = numOfSame(inputCards.Black);
  if (inputWhiteObj !== 0 || inputBlackObj !== 0) {
    if (inputBlackObj !== 0 && isFourOfAKind(inputBlackObj)) {
      console.log(196);
      if (
        isFourOfAKind(inputBlackObj) &&
        inputWhiteObj !== 0 &&
        !isFourOfAKind(inputWhiteObj)
      ) {
        return {
          winner: "Black wins.",
          winningType: " - with four of a kind: ",
        };
      } else if (
        inputWhiteObj !== 0 &&
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
      console.log(226);
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
    }
  }

  if (isOneSuite(inputCards.Black) || isOneSuite(inputCards.White)) {
    console.log(259);
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

  if (isInARow(inputCards.Black) || isInARow(inputCards.White)) {
    console.log(282);
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

  if (inputWhiteObj !== 0 || inputBlackObj !== 0) {
    if (isThreeOfAKind(inputBlackObj) || isThreeOfAKind(inputWhiteObj)) {
      console.log(306);
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
      console.log(336);
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
      console.log(363);
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
    console.log(393);
    return {
      winner: "Black wins.",
      winningType: " - with high card: ",
      winningCard: ` highest card: ${blackTop.cardValue}${blackTop.cardKind}`,
    };
  } else {
    console.log(400);
    return {
      winner: "White wins.",
      winningType: " - with high card: ",
      winningCard: ` highest card: ${whiteTop.cardValue}${whiteTop.cardKind}`,
    };
  }
}

export default gameResult;
