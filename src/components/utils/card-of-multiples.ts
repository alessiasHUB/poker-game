import { InputCards, ReturnType } from "../score-calc";

//------------------------------------------------return value of card from multiples
export default function cardOfMultiples(
  objs: object[],
  hands: InputCards,
  num: number
): ReturnType {
  const objBlack = objs[0];
  const objWhite = objs[1];

  const bestCardsBlack = Object.entries(objBlack).filter(([key, value]) => {
    return value === num;
  });
  const bestCardsWhite = Object.entries(objWhite).filter(([key, value]) => {
    return value === num;
  });

  const blackMax = Math.max(
    ...bestCardsBlack.map((subArray) => Number(subArray[0]))
  );
  const whiteMax = Math.max(
    ...bestCardsWhite.map((subArray) => Number(subArray[0]))
  );

  if (blackMax > whiteMax) {
    // const winningCard: Card = getFullCard(blackMax, hands.Black);
    return { winner: "Black", winningCard: blackMax };
  } else if (blackMax < whiteMax) {
    // const winningCard: Card = getFullCard(whiteMax, hands.White);
    return { winner: "White", winningCard: whiteMax };
  } else {
    if (
      blackMax === whiteMax &&
      bestCardsBlack.length > 1 &&
      bestCardsWhite.length > 1
    ) {
      const blackSecondVal = bestCardsBlack.filter(
        (subArray) => Number(subArray[0]) !== blackMax
      );
      const whiteSecondVal = bestCardsWhite.filter(
        (subArray) => Number(subArray[0]) !== whiteMax
      );

      if (blackSecondVal[0][0] > whiteSecondVal[0][0]) {
        return { winner: "Black", winningCard: Number(blackSecondVal[0][0]) };
      } else if (blackSecondVal[0][0] < whiteSecondVal[0][0]) {
        return { winner: "White", winningCard: Number(whiteSecondVal[0][0]) };
      } else {
        return { winner: "Tie" };
      }
    } else {
      return { winner: "Tie" };
    }
  }
}
