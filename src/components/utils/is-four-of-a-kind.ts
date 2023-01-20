import { InputCards, ReturnType } from "../score-calc";

//------------------------------------------------checks four of a kind in hands
export default function isFourOfAKind(
  handObjs: object[],
  hands: InputCards
): false | ReturnType {
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
    return false;
  }
}
