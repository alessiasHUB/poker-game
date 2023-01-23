import isFourOfAKind from "./is-four-of-a-kind";

test("Check win by four of a kind", () => {
  expect(
    isFourOfAKind(
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
    isFourOfAKind(
      [
        { "9": 1, "12": 4 },
        { "2": 2, "4": 1, "8": 1, "13": 1 },
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
          { cardValue: 8, cardKind: "C" },
          { cardValue: 13, cardKind: "H" },
        ],
      }
    )
  ).toEqual({ winner: "Black" });
  expect(
    isFourOfAKind(
      [
        { "9": 1, "12": 4 },
        { "2": 1, "4": 4 },
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
          { cardValue: 4, cardKind: "H" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 4, cardKind: "C" },
          { cardValue: 4, cardKind: "D" },
        ],
      }
    )
  ).toEqual({ winner: "Black", winningCard: { cardValue: 12, cardKind: "S" } });
  expect(
    isFourOfAKind(
      [
        { "2": 1, "4": 4 },
        { "9": 1, "12": 4 },
      ],
      {
        White: [
          { cardValue: 9, cardKind: "H" },
          { cardValue: 12, cardKind: "S" },
          { cardValue: 12, cardKind: "D" },
          { cardValue: 12, cardKind: "H" },
          { cardValue: 12, cardKind: "C" },
        ],
        Black: [
          { cardValue: 2, cardKind: "C" },
          { cardValue: 4, cardKind: "H" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 4, cardKind: "C" },
          { cardValue: 4, cardKind: "D" },
        ],
      }
    )
  ).toEqual({ winner: "White", winningCard: { cardValue: 12, cardKind: "S" } });
});
