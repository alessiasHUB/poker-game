import isThreeOfAKind from "./is-three-of-a-kind";

test("Check win by three of a kind", () => {
  expect(
    isThreeOfAKind(
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
  ).toEqual(false);
  expect(
    isThreeOfAKind(
      [
        { "9": 2, "12": 3 },
        { "2": 2, "4": 1, "8": 1, "13": 1 },
      ],
      {
        Black: [
          { cardValue: 9, cardKind: "H" },
          { cardValue: 9, cardKind: "S" },
          { cardValue: 12, cardKind: "D" },
          { cardValue: 12, cardKind: "H" },
          { cardValue: 12, cardKind: "C" },
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
  ).toEqual({ winner: "Black" });
  expect(
    isThreeOfAKind(
      [
        { "9": 1, "12": 4 },
        { "2": 2, "4": 3 },
      ],
      {
        Black: [
          { cardValue: 9, cardKind: "H" },
          { cardValue: 12, cardKind: "S" },
          { cardValue: 12, cardKind: "D" },
          { cardValue: 12, cardKind: "H" },
          { cardValue: 12, cardKind: "C" },
        ],
        White: [
          { cardValue: 2, cardKind: "C" },
          { cardValue: 2, cardKind: "H" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 4, cardKind: "C" },
          { cardValue: 4, cardKind: "D" },
        ],
      }
    )
  ).toEqual({ winner: "White" });
  expect(
    isThreeOfAKind(
      [
        { "2": 2, "4": 3 },
        { "9": 2, "12": 3 },
      ],
      {
        White: [
          { cardValue: 9, cardKind: "H" },
          { cardValue: 9, cardKind: "S" },
          { cardValue: 12, cardKind: "D" },
          { cardValue: 12, cardKind: "H" },
          { cardValue: 12, cardKind: "C" },
        ],
        Black: [
          { cardValue: 2, cardKind: "C" },
          { cardValue: 2, cardKind: "H" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 4, cardKind: "C" },
          { cardValue: 4, cardKind: "D" },
        ],
      }
    )
  ).toEqual({ winner: "White", winningCard: 12 });
});
