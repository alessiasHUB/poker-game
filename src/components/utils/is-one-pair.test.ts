import isOnePair from "./is-one-pair";

test("Check win by one pair", () => {
  expect(
    isOnePair(
      [
        { "9": 1, "8": 1, "11": 1, "12": 2 },
        { "2": 2, "4": 1, "8": 1, "13": 1 },
      ],
      {
        Black: [
          { cardValue: 9, cardKind: "H" },
          { cardValue: 8, cardKind: "S" },
          { cardValue: 11, cardKind: "H" },
          { cardValue: 12, cardKind: "H" },
          { cardValue: 12, cardKind: "S" },
        ],
        White: [
          { cardValue: 2, cardKind: "C" },
          { cardValue: 2, cardKind: "H" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 8, cardKind: "C" },
          { cardValue: 13, cardKind: "H" },
        ],
      }
    )
  ).toEqual({ winner: "Black", winningCard: 12 });
  expect(
    isOnePair(
      [
        { "9": 1, "12": 1, "3": 1, "4": 1, "13": 1 },
        { "2": 1, "4": 1, "8": 1, "13": 1, "9": 1 },
      ],
      {
        Black: [
          { cardValue: 9, cardKind: "H" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 13, cardKind: "D" },
          { cardValue: 12, cardKind: "H" },
          { cardValue: 3, cardKind: "C" },
        ],
        White: [
          { cardValue: 2, cardKind: "C" },
          { cardValue: 9, cardKind: "H" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 8, cardKind: "C" },
          { cardValue: 13, cardKind: "H" },
        ],
      }
    )
  ).toEqual(false);
  expect(
    isOnePair(
      [
        { "9": 2, "12": 1, "3": 1, "4": 1 },
        { "2": 1, "4": 1, "13": 2, "9": 1 },
      ],
      {
        Black: [
          { cardValue: 9, cardKind: "H" },
          { cardValue: 9, cardKind: "S" },
          { cardValue: 4, cardKind: "D" },
          { cardValue: 12, cardKind: "H" },
          { cardValue: 3, cardKind: "C" },
        ],
        White: [
          { cardValue: 2, cardKind: "C" },
          { cardValue: 9, cardKind: "H" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 13, cardKind: "C" },
          { cardValue: 13, cardKind: "H" },
        ],
      }
    )
  ).toEqual({ winner: "White", winningCard: 13 });
  expect(
    isOnePair(
      [
        { "9": 2, "12": 1, "3": 1, "4": 1, "13": 1 },
        { "2": 1, "4": 1, "13": 2, "9": 1 },
      ],
      {
        Black: [
          { cardValue: 9, cardKind: "H" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 13, cardKind: "D" },
          { cardValue: 12, cardKind: "H" },
          { cardValue: 3, cardKind: "C" },
        ],
        White: [
          { cardValue: 2, cardKind: "C" },
          { cardValue: 9, cardKind: "H" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 13, cardKind: "C" },
          { cardValue: 13, cardKind: "H" },
        ],
      }
    )
  ).toEqual({ winner: "White", winningCard: 13 });
});
