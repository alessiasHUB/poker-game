import { InputCards, ReturnType } from "../score-calc";
import cardOfMultiples from "./card-of-multiples";

//------------------------------------------------checks three of a kind in hands
export default function isThreeOfAKind(
  handObjs: object[],
  hands: InputCards
): false | ReturnType {
  const handObjBlack = handObjs[0];
  const handObjWhite = handObjs[1];
  const result: ("White" | "Black")[] = [];
  if (
    Object.keys(handObjBlack)[Object.values(handObjBlack).indexOf(3)] !==
    undefined
  ) {
    result.push("Black");
  }
  if (
    Object.keys(handObjWhite)[Object.values(handObjWhite).indexOf(3)] !==
    undefined
  ) {
    result.push("White");
  }
  if (result.length === 2) {
    const winner = cardOfMultiples(handObjs, hands, 3);
    return winner;
  } else if (result.length === 1) {
    return { winner: result[0] };
  } else {
    return false;
  }
}
