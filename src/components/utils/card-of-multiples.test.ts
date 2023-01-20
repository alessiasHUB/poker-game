import cardOfMultiples from "./card-of-multiples";

test("Check win in card of multiples", () => {
  expect(
    cardOfMultiples(
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
      },
      2
    )
  ).toEqual({ winner: "Black", winningCard: { cardValue: 12, cardKind: "H" } });
  expect(
    cardOfMultiples(
      [
        { "9": 1, "8": 1, "11": 1, "12": 2 },
        { "2": 2, "4": 1, "8": 1, "13": 1 },
      ],
      {
        White: [
          { cardValue: 9, cardKind: "H" },
          { cardValue: 8, cardKind: "S" },
          { cardValue: 11, cardKind: "H" },
          { cardValue: 12, cardKind: "H" },
          { cardValue: 12, cardKind: "S" },
        ],
        Black: [
          { cardValue: 2, cardKind: "C" },
          { cardValue: 2, cardKind: "H" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 8, cardKind: "C" },
          { cardValue: 13, cardKind: "H" },
        ],
      },
      2
    )
  ).toEqual({ winner: "White", winningCard: { cardValue: 12, cardKind: "H" } });
});
