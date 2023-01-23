import numPairs from "./num-pairs";

test("Check win by two of a kind", () => {
  expect(
    numPairs([
      { "9": 2, "8": 2, "11": 1 },
      { "2": 2, "4": 2, "8": 1 },
    ])
  ).toEqual("Both2");
  expect(
    numPairs([
      { "9": 1, "12": 4 },
      { "2": 2, "4": 1, "8": 1, "13": 1 },
    ])
  ).toEqual("White1");
  expect(
    numPairs([
      { "9": 2, "12": 3 },
      { "2": 2, "4": 3 },
    ])
  ).toEqual("Both1");
  expect(
    numPairs([
      { "2": 2, "4": 1, "5": 2 },
      { "9": 1, "12": 4 },
    ])
  ).toEqual("Black2");
  expect(
    numPairs([
      { "9": 1, "12": 4 },
      { "2": 2, "4": 1, "5": 2 },
    ])
  ).toEqual("White2");
  expect(
    numPairs([
      { "9": 1, "12": 4 },
      { "2": 4, "4": 1 },
    ])
  ).toEqual(false);
});
