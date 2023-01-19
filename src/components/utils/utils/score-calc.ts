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
type CardKind = "C" | "D" | "S" | "H";
// todo: all suites are of the same strength in poker, can remove
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
  | "straight flush"
  | "royal flush";
type WinningCard = Card;
export type ReturnType =
  | {
      winner: Winner;
      winningType: WinningType;
      winningCard: WinningCard;
    }
  | { winner: Winner };

//=====================HELPER FUNCTIONS==============================================
//------------------------------------------------checks top card in hands
function highestCardInHands(
  hands: InputCards
): ["White" | "Black" | "Both", Card] {
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
  hands: InputCards,
  num: number
): ["White" | "Black" | "Both", Card] {
  let bestCardBlack: number = 0;
  let bestCardWhite: number = 0;
  const objBlack = objs[0];
  const objWhite = objs[1];

  Object.entries(objBlack).find(([key, value]) => {
    if (value === num) {
      bestCardBlack = Number(key);
      return true;
    }
    return false;
  });
  Object.entries(objWhite).find(([key, value]) => {
    if (value === num) {
      bestCardWhite = Number(key);
      return true;
    }
    return false;
  });

  if (bestCardBlack > bestCardWhite) {
    const winningCard: Card = getFullCard(bestCardBlack, hands.Black);
    return ["Black", winningCard];
  } else if (bestCardBlack < bestCardWhite) {
    const winningCard: Card = getFullCard(bestCardWhite, hands.White);
    return ["White", winningCard];
  } else {
    const winningCard: Card = getFullCard(bestCardWhite, hands.White);
    return ["Both", winningCard];
  }
}
//------------------------------------------------return full card based on value
function getFullCard(cardVal: number, hand: Card[]): Card {
  for (let card of hand) {
    if (card.cardValue === cardVal) {
      return card;
    }
  }
  // this will not run
  return { cardValue: 2, cardKind: "S" };
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
  handObjs: object[],
  hands: InputCards
): "White" | "Black" | 0 | ["White" | "Black" | "Both", Card] {
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
    const winner = cardOfMultiples(handObjs, hands, 4);
    return winner;
  } else if (result.length === 1) {
    return result[0];
  } else {
    return 0;
  }
}
//------------------------------------------------checks three of a kind in hands
function isThreeOfAKind(
  handObjs: object[],
  hands: InputCards
): "White" | "Black" | 0 | ["White" | "Black" | "Both", Card] {
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
    const winner = cardOfMultiples(handObjs, hands, 3);
    return winner;
  } else if (result.length === 1) {
    return result[0];
  } else {
    return 0;
  }
}
//------------------------------------------------checks if two pairs in hands
// todo
function isTwoPairs(
  handObjs: object[],
  hands: InputCards
): "White" | "Black" | 0 | ["White" | "Black" | "Both", Card] {
  return "White";
}
//------------------------------------------------checks if one pair in hands
// todo
function isOnePair(
  handObjs: object[],
  hands: InputCards
): "White" | "Black" | 0 | ["White" | "Black" | "Both", Card] {
  return "White";
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
): "Black" | "White" | 0 | ["White" | "Black" | "Both", Card] {
  const handObjs = numOfSame(hands);
  if (handObjs === 0) {
    return 0;
  } else {
    if (
      isThreeOfAKind(handObjs, hands) === "Both" &&
      numPairs(handObjs) === "Both1"
    ) {
      const winner = cardOfMultiples(handObjs, hands, 3);
      return winner;
    } else if (
      isThreeOfAKind(handObjs, hands) === "Both" &&
      numPairs(handObjs) === "Black1"
    ) {
      return "Black";
    } else if (
      isThreeOfAKind(handObjs, hands) === "Both" &&
      numPairs(handObjs) === "White1"
    ) {
      return "White";
    } else if (
      isThreeOfAKind(handObjs, hands) === "Black" &&
      numPairs(handObjs) === "Both1"
    ) {
      return "Black";
    } else if (
      isThreeOfAKind(handObjs, hands) === "White" &&
      numPairs(handObjs) === "Both1"
    ) {
      return "White";
    } else if (
      isThreeOfAKind(handObjs, hands) === "Black" &&
      numPairs(handObjs) === "Black1"
    ) {
      return "Black";
    } else if (
      isThreeOfAKind(handObjs, hands) === "White" &&
      numPairs(handObjs) === "White1"
    ) {
      return "White";
    } else {
      return 0;
    }
  }
}
//------------------------------------------------checks if cards are in a row
function isStraight(
  hands: InputCards
): "White" | "Black" | "Both" | 0 | ["White" | "Black" | "Both", Card] {
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
function isFlush(
  hands: InputCards
): "White" | "Black" | 0 | ["White" | "Black" | "Both", Card] {
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
): "White" | "Black" | 0 | ["White" | "Black" | "Both", Card] {
  if (isStraight(hands) === "Black" && isFlush(hands) === "Black") {
    return "Black";
  } else if (isStraight(hands) === "White" && isFlush(hands) === "White") {
    return "White";
  } else if (isStraight(hands) === "Both" && isFlush(hands) === "Both") {
    const winner = highestCardInHands(hands);
    return winner;
  } else if (isStraight(hands) === "Both" && isFlush(hands) === "White") {
    return "White";
  } else if (isStraight(hands) === "Both" && isFlush(hands) === "Black") {
    return "Black";
  } else if (isStraight(hands) === "White" && isFlush(hands) === "Both") {
    return "White";
  } else if (isStraight(hands) === "Black" && isFlush(hands) === "Both") {
    return "Black";
  } else {
    return 0;
  }
}
//------------------------------------------------checks if cards are royal flush
// todo^^^^^ (check if there's an ACE)

//=====================GAME RESULT==============================================
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
  }
}

export default gameResult;
