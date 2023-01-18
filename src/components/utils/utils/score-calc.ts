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
type Winner = "White" | "Black" | "Tie";
type WinningType =
  | "high card"
  | "pair"
  | "two pairs"
  | "three of a kind"
  | "straight"
  | "flush"
  | "full house"
  | "four of a kind"
  | "straight flush";
type WinningCard = string;
export type ReturnType =
  | {
      winner: Winner;
      winningType: WinningType;
      winningCard: WinningCard;
    }
  | { winner: Winner };

//------------------------------------------------checks top card in hands
function highestCardInHands(
  hands: InputCards
): ("White" | "Black" | "Both" | Card)[] {
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
  } else if (topCardBlack < topCardWhite) {
    return ["White", topCardWhite];
  } else {
    return ["Both", topCardWhite];
  }
}
//------------------------------------------------return value of card from multiples
function cardOfMultiples(
  objs: object[],
  num: number
): ("Black" | "White" | "Both" | number)[] {
  let bestCardBlack: CardValue | string = "";
  let bestCardWhite: CardValue | string = "";
  const objBlack = objs[0];
  const objWhite = objs[1];

  Object.entries(objBlack).find(([key, value]) => {
    if (value === num) {
      bestCardBlack = key;
      return true;
    }
    return false;
  });
  Object.entries(objWhite).find(([key, value]) => {
    if (value === num) {
      bestCardWhite = key;
      return true;
    }
    return false;
  });

  if (bestCardBlack > bestCardWhite) {
    return ["Black", Number(bestCardBlack)];
  } else if (bestCardBlack < bestCardWhite) {
    return ["White", Number(bestCardWhite)];
  } else {
    return ["Both", Number(bestCardWhite)];
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
function isFourOfAKind(
  handObjs: object[]
): "White" | "Black" | 0 | (number | "Both" | "White" | "Black")[] {
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
    const winner = cardOfMultiples(handObjs, 4);
    return winner;
  } else if (result.length === 1) {
    return result[0];
  } else {
    return 0;
  }
}
//------------------------------------------------checks three of a kind in hands
function isThreeOfAKind(
  handObjs: object[]
): "Both" | "White" | "Black" | 0 | (number | "Both" | "White" | "Black")[] {
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
    const winner = cardOfMultiples(handObjs, 3);
    return winner;
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
function isFullHouse(
  hands: InputCards
): "Both" | "Black" | "White" | 0 | (number | "Both" | "White" | "Black")[] {
  const handObjs = numOfSame(hands);
  if (handObjs === 0) {
    return 0;
  } else {
    if (isThreeOfAKind(handObjs) === "Both" && numPairs(handObjs) === "Both1") {
      const winner = cardOfMultiples(handObjs, 3);
      return winner;
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
function isInARow(
  hands: InputCards
): "White" | "Black" | "Both" | 0 | ("White" | "Black" | "Both" | Card)[] {
  let handOfCardsBlack: number[] = [];
  let handOfCardsWhite: number[] = [];
  const blackHand = hands.Black;
  const whiteHand = hands.White;
  const result: ("White" | "Black" | "Both")[] = [];

  for (let card of blackHand) {
    handOfCardsBlack.push(card.cardValue);
  }
  let sortedHand = handOfCardsBlack.sort();
  let previousCard = sortedHand[0];
  for (let i = 1; i < sortedHand.length; i++) {
    if (previousCard + 1 === sortedHand[i]) {
      previousCard = sortedHand[i];
    } else {
      // push the opposite for a simpler return
      result.push("White");
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
      // push the opposite for a simpler return
      result.push("Black");
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
//------------------------------------------------checks if cards are one suite9
function isOneSuite(
  hands: InputCards
): "White" | "Black" | "Both" | 0 | ("White" | "Black" | "Both" | Card)[] {
  let handOfCardsBlack: number = 0;
  let handOfCardsWhite: number = 0;
  const blackHand = hands.Black;
  const whiteHand = hands.White;

  const suiteValue = { C: 0.1, D: 1, S: 4, H: 16 };
  const trueCases: number[] = [0.4, 4, 16, 64];
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
): "White" | "Black" | 0 | ("White" | "Black" | "Both" | Card)[] {
  if (isInARow(hands) === "Black" && isOneSuite(hands) === "Black") {
    return "Black";
  } else if (isInARow(hands) === "White" && isOneSuite(hands) === "White") {
    return "White";
  } else if (isInARow(hands) === "Both" && isOneSuite(hands) === "Both") {
    const winner = highestCardInHands(hands);
    return winner;
  } else if (isInARow(hands) === "Both" && isOneSuite(hands) === "White") {
    return "White";
  } else if (isInARow(hands) === "Both" && isOneSuite(hands) === "Black") {
    return "Black";
  } else if (isInARow(hands) === "White" && isOneSuite(hands) === "Both") {
    return "White";
  } else if (isInARow(hands) === "Black" && isOneSuite(hands) === "Both") {
    return "Black";
  } else {
    return 0;
  }
}
//------------------------------------------------checks if cards are royal flush
// todo^^^^^

//=======================GAME RESULT==================================
//------------------------------------------------game result function
function gameResult(inputCards: InputCards): ReturnType {
  // royal flush
  // straight flush
  const straightFlushResult = isStraightFlush(inputCards);
  if (straightFlushResult !== 0) {
    console.log(399);
    if (straightFlushResult === "Black") {
      return { winner: "Black", winningType: "straight flush" };
    } else if (straightFlushResult === "White") {
      return { winner: "White", winningType: "straight flush" };
    } else if (Array.isArray(straightFlushResult)) {
      if (straightFlushResult[0] === "Black") {
        return {
          winner: "Black",
          winningType: "straight flush",
          winningCard: `${straightFlushResult[1]}`,
        };
      } else if (straightFlushResult[0] === "White") {
        return {
          winner: "White",
          winningType: "straight flush",
          winningCard: `${straightFlushResult[1]}`,
        };
      } else {
        return { winner: "Tie" };
      }
    }
  }

  const numOfSameObjs = numOfSame(inputCards);
  const highestCardResult = highestCardInHands(inputCards);
  // four of a kind ----> full house
  if (numOfSameObjs !== 0) {
    console.log(427);
    const fourOfAKindResult = isFourOfAKind(numOfSameObjs);
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
            winningCard: `${fourOfAKindResult[1]}`,
          };
        } else if (fourOfAKindResult[0] === "White") {
          return {
            winner: "White",
            winningType: "four of a kind",
            winningCard: `${fourOfAKindResult[1]}`,
          };
        } else {
          return {
            winner: "Tie",
          };
        }
      }
    } else if (fullHouseResult) {
      // START HERE^^^ full house
    }
  } /* high card */ else {
    if (highestCardResult[0] === "Black") {
      return { winner: "Black", winningType: "high card" };
    } else if (highestCardResult[0] === "White") {
      return { winner: "White", winningType: "high card" };
    } else {
      return { winner: "Tie" };
    }
  }
  // four of a kind ---> full house
  // const inputWhiteObj = numOfSame(inputCards);
  // const inputBlackObj = numOfSame(inputCards);
  // if (inputWhiteObj !== 0 || inputBlackObj !== 0) {
  //   if (inputBlackObj !== 0 && isFourOfAKind(inputBlackObj)) {
  //     console.log(196);
  //     if (
  //       isFourOfAKind(inputBlackObj) &&
  //       inputWhiteObj !== 0 &&
  //       !isFourOfAKind(inputWhiteObj)
  //     ) {
  //       return {
  //         winner: "Black",winningType: "straight flush",
  //         winningType: "four of a kind: ",
  //       };
  //     } else if (
  //       inputWhiteObj !== 0 &&
  //       isFourOfAKind(inputWhiteObj) &&
  //       !isFourOfAKind(inputBlackObj)
  //     ) {
  //       return {
  //         winner: "White",winningType: "straight flush",
  //         winningType: "four of a kind: ",
  //       };
  //     } else {
  //       if (blackTop > whiteTop) {
  //         return {
  //           winner: "Black",winningType: "straight flush",
  //           winningType: "four of a kind: ",
  //           winningCard: ` 4 card: `,
  //         };
  //       } else {
  //         return {
  //           winner: "White",winningType: "straight flush",
  //           winningType: "four of a kind: ",
  //           winningCard: ` 4 card: `,
  //         };
  //       }
  //     }
  //   } else if (isFullHouse(inputCards.Black) || isFullHouse(inputCards.White)) {
  //     console.log(226);
  //     if (isFullHouse(inputCards.Black) && !isFullHouse(inputCards.White)) {
  //       return {
  //         winner: "Black",winningType: "straight flush",
  //         winningType: "full house: ",
  //       };
  //     } else if (
  //       isFullHouse(inputCards.White) &&
  //       !isFullHouse(inputCards.Black)
  //     ) {
  //       return {
  //         winner: "White",winningType: "straight flush",
  //         winningType: "full house: ",
  //       };
  //     } else {
  //       if (blackTop > whiteTop) {
  //         return {
  //           winner: "Black",winningType: "straight flush",
  //           winningType: "full house: ",
  //           winningCard: ` 3 card: `,
  //         };
  //       } else {
  //         return {
  //           winner: "White",winningType: "straight flush",
  //           winningType: "full house: ",
  //           winningCard: ` 3 card: `,
  //         };
  //       }
  //     }
  //   }
  // }
  // // flush
  // if (isOneSuite(inputCards.Black) || isOneSuite(inputCards.White)) {
  //   console.log(259);
  //     if (blackTop > whiteTop) {
  //       return {
  //         winner: "Black",winningType: "straight flush",
  //         winningType: "flush: ",
  //         winningCard: ` highest card: ${blackTop.cardValue}${blackTop.cardKind}`,
  //       };
  //     } else {
  //       return {
  //         winner: "White",winningType: "straight flush",
  //         winningType: "flush: ",
  //         winningCard: ` highest card: ${whiteTop.cardValue}${whiteTop.cardKind}`,
  //       };
  //     }
  //   }
  // // straight
  // if (isInARow(inputCards.Black) || isInARow(inputCards.White)) {
  //   console.log(282);
  //     if (blackTop > whiteTop) {
  //       return {
  //         winner: "Black",winningType: "straight flush",
  //         winningType: "straight: ",
  //         winningCard: ` highest card: ${blackTop.cardValue}${blackTop.cardKind}`,
  //       };
  //     } else {
  //       return {
  //         winner: "White",winningType: "straight flush",
  //         winningType: "straight: ",
  //         winningCard: ` highest card: ${whiteTop.cardValue}${whiteTop.cardKind}`,
  //       };
  //     }
  //   }
  // // three of a kind ---> two pairs ---> one pair
  // if (inputWhiteObj !== 0 || inputBlackObj !== 0) {
  //   if (isThreeOfAKind(inputBlackObj) || isThreeOfAKind(inputWhiteObj)) {
  //     console.log(306);
  //     if (isThreeOfAKind(inputBlackObj) && !isThreeOfAKind(inputWhiteObj)) {
  //       return {
  //         winner: "Black",winningType: "straight flush",
  //         winningType: "three of a kind: ",
  //       };
  //     } else if (
  //       isThreeOfAKind(inputWhiteObj) &&
  //       !isThreeOfAKind(inputBlackObj)
  //     ) {
  //       return {
  //         winner: "White",winningType: "straight flush",
  //         winningType: "three of a kind: ",
  //       };
  //     } else {
  //       if (blackTop > whiteTop) {
  //         return {
  //           winner: "Black",winningType: "straight flush",
  //           winningType: "three of a kind: ",
  //           winningCard: ` card: `,
  //         };
  //       } else {
  //         return {
  //           winner: "White",winningType: "straight flush",
  //           winningType: "three of a kind: ",
  //           winningCard: ` card: `,
  //         };
  //       }
  //     }
  //   } else if (numPairs(inputBlackObj) > 1 || numPairs(inputWhiteObj) > 1) {
  //     console.log(336);
  //     if (numPairs(inputBlackObj) > 1 && numPairs(inputWhiteObj) < 2) {
  //       return {
  //         winner: "Black",winningType: "straight flush",
  //         winningType: "two pairs: ",
  //       };
  //     } else if (numPairs(inputWhiteObj) > 1 && numPairs(inputBlackObj) < 2) {
  //       return {
  //         winner: "White",winningType: "straight flush",
  //         winningType: "two pairs: ",
  //       };
  //     } else {
  //       if (blackTop > whiteTop) {
  //         return {
  //           winner: "Black",winningType: "straight flush",
  //           winningType: "two pairs: ",
  //           winningCard: ` highest pair: `,
  //         };
  //       } else {
  //         return {
  //           winner: "White",winningType: "straight flush",
  //           winningType: "two pairs: ",
  //           winningCard: ` highest pair: `,
  //         };
  //       }
  //     }
  //   } else if (numPairs(inputBlackObj) > 1 || numPairs(inputWhiteObj) > 1) {
  //     console.log(363);
  //     if (numPairs(inputBlackObj) > 1 && numPairs(inputWhiteObj) < 1) {
  //       return {
  //         winner: "Black",winningType: "straight flush",
  //         winningType: "pair: ",
  //       };
  //     } else if (numPairs(inputWhiteObj) > 1 && numPairs(inputBlackObj) < 1) {
  //       return {
  //         winner: "White",winningType: "straight flush",
  //         winningType: "pair: ",
  //       };
  //     } else {
  //       if (blackTop > whiteTop) {
  //         return {
  //           winner: "Black",winningType: "straight flush",
  //           winningType: "pair: ",
  //           winningCard: ` highest pair: `,
  //         };
  //       } else {
  //         return {
  //           winner: "White",winningType: "straight flush",
  //           winningType: "pair: ",
  //           winningCard: ` highest pair: `,
  //         };
  //       }
  //     }
  //   }
  // }

  // if (blackTop > whiteTop) {
  //   console.log(393);
  //   return {
  //     winner: "Black",winningType: "straight flush",
  //     winningType: "high card: ",
  //     winningCard: ` highest card: ${blackTop.cardValue}${blackTop.cardKind}`,
  //   };
  // } else {
  //   console.log(400);
  //   return {
  //     winner: "White",winningType: "straight flush",
  //     winningType: "high card: ",
  //     winningCard: ` highest card: ${whiteTop.cardValue}${whiteTop.cardKind}`,
  //   };
  // }
}

export default gameResult;
