//------------------------------------------------checks number of pairs in hands
export default function numPairs(
  handObjs: object[]
): "Both2" | "Black2" | "White2" | "Both1" | "Black1" | "White1" | false {
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
    return false;
  }
}
