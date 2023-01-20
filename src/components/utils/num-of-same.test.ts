import numOfSame from "./num-of-same";

test("Check num of same", () => {
  expect(
    numOfSame({
      Black: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 13, cardKind: "H" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 13, cardKind: "H" },
      ],
    })
  ).toEqual(false);
  expect(
    numOfSame({
      Black: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 9, cardKind: "S" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 11, cardKind: "S" },
        { cardValue: 13, cardKind: "H" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 2, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 13, cardKind: "H" },
      ],
    })
  ).toEqual([
    { "9": 2, "11": 2, "13": 1 },
    { "2": 2, "4": 1, "8": 1, "13": 1 },
  ]);
  expect(
    numOfSame({
      Black: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 9, cardKind: "S" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 13, cardKind: "H" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 13, cardKind: "H" },
      ],
    })
  ).toEqual([
    { "9": 2, "11": 1, "12": 1, "13": 1 },
    { "2": 1, "3": 1, "4": 1, "8": 1, "13": 1 },
  ]);
  expect(
    numOfSame({
      Black: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 8, cardKind: "S" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 13, cardKind: "H" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 2, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 13, cardKind: "H" },
      ],
    })
  ).toEqual([
    { "9": 1, "8": 1, "11": 1, "12": 1, "13": 1 },
    { "2": 2, "4": 1, "8": 1, "13": 1 },
  ]);
});
