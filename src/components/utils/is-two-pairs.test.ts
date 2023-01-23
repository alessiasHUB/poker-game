import isTwoPairs from "./is-two-pairs";

test("Check win by two pairs", () => {
  expect(
    isTwoPairs(
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
    isTwoPairs(
      [
        { "9": 2, "12": 2, "3": 1 },
        { "2": 2, "4": 1, "8": 1, "13": 1 },
      ],
      {
        Black: [
          { cardValue: 9, cardKind: "H" },
          { cardValue: 9, cardKind: "S" },
          { cardValue: 12, cardKind: "D" },
          { cardValue: 12, cardKind: "H" },
          { cardValue: 3, cardKind: "C" },
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
    isTwoPairs(
      [
        { "9": 2, "12": 2, "3": 1 },
        { "2": 2, "4": 2, "5": 1 },
      ],
      {
        Black: [
          { cardValue: 9, cardKind: "H" },
          { cardValue: 9, cardKind: "S" },
          { cardValue: 12, cardKind: "D" },
          { cardValue: 12, cardKind: "H" },
          { cardValue: 3, cardKind: "C" },
        ],
        White: [
          { cardValue: 2, cardKind: "C" },
          { cardValue: 2, cardKind: "H" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 4, cardKind: "C" },
          { cardValue: 5, cardKind: "D" },
        ],
      }
    )
  ).toEqual({ winner: "Black", winningCard: { cardValue: 9, cardKind: "H" } });
  expect(
    isTwoPairs(
      [
        { "2": 2, "12": 2, "4": 1 },
        { "9": 2, "12": 2, "2": 1 },
      ],
      {
        White: [
          { cardValue: 9, cardKind: "H" },
          { cardValue: 9, cardKind: "S" },
          { cardValue: 12, cardKind: "D" },
          { cardValue: 12, cardKind: "H" },
          { cardValue: 2, cardKind: "C" },
        ],
        Black: [
          { cardValue: 2, cardKind: "D" },
          { cardValue: 2, cardKind: "H" },
          { cardValue: 12, cardKind: "S" },
          { cardValue: 12, cardKind: "C" },
          { cardValue: 4, cardKind: "D" },
        ],
      }
    )
  ).toEqual({ winner: "Tie" });
});
