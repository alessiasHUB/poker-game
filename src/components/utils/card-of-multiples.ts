import { InputCards, ReturnType, Card } from "../score-calc";
import getFullCard from "./get-full-card";

//------------------------------------------------return value of card from multiples
export default function cardOfMultiples(
  objs: object[],
  hands: InputCards,
  num: number
): ReturnType {
  const objBlack = objs[0];
  const objWhite = objs[1];

  const bestCardBlack = Object.entries(objBlack).find(([key, value]) => {
    if (value === num) {
      return key;
    }
    return undefined;
  });
  const bestCardWhite = Object.entries(objWhite).find(([key, value]) => {
    if (value === num) {
      return key;
    }
    return undefined;
  });
  if (bestCardBlack && bestCardWhite) {
    if (Number(bestCardBlack[0]) > Number(bestCardWhite[0])) {
      const winningCard: Card = getFullCard(
        Number(bestCardBlack[0]),
        hands.Black
      );
      return { winner: "Black", winningCard: winningCard };
    } else if (Number(bestCardBlack[0]) < Number(bestCardWhite[0])) {
      const winningCard: Card = getFullCard(
        Number(bestCardWhite[0]),
        hands.White
      );
      return { winner: "White", winningCard: winningCard };
    } else {
      return { winner: "Tie" };
    }
  } else {
    return { winner: "Tie" };
  }
}
