import cardOfMultiples from "./card-of-multiples";

test.skip("Check win in card of multiples", () => {
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
  ).toEqual({ winner: "Black", winningCard: 12 });
  expect(
    cardOfMultiples(
      [
        { "2": 2, "4": 1, "8": 1, "13": 1 },
        { "9": 1, "8": 1, "11": 1, "12": 2 },
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
  ).toEqual({ winner: "White", winningCard: 12 });
  expect(
    cardOfMultiples(
      [
        { "12": 2, "4": 1, "8": 1, "13": 1 },
        { "9": 1, "8": 1, "11": 1, "12": 2 },
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
          { cardValue: 12, cardKind: "C" },
          { cardValue: 12, cardKind: "D" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 8, cardKind: "C" },
          { cardValue: 13, cardKind: "H" },
        ],
      },
      2
    )
  ).toEqual({ winner: "Tie" });
});

test("Check win in card of multiples when multiple of multiples", () => {
  expect(
    cardOfMultiples(
      [
        { "12": 2, "4": 1, "8": 1, "13": 1 },
        { "9": 2, "11": 1, "12": 2 },
      ],
      {
        Black: [
          { cardValue: 12, cardKind: "C" },
          { cardValue: 12, cardKind: "D" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 8, cardKind: "C" },
          { cardValue: 13, cardKind: "H" },
        ],
        White: [
          { cardValue: 9, cardKind: "H" },
          { cardValue: 9, cardKind: "S" },
          { cardValue: 11, cardKind: "H" },
          { cardValue: 12, cardKind: "H" },
          { cardValue: 12, cardKind: "S" },
        ],
      },
      2
    )
  ).toEqual({ winner: "Tie" });
  expect(
    cardOfMultiples(
      [
        { "9": 2, "4": 1, "13": 2 },
        { "12": 2, "11": 1, "8": 2 },
      ],
      {
        Black: [
          { cardValue: 9, cardKind: "C" },
          { cardValue: 9, cardKind: "D" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 13, cardKind: "C" },
          { cardValue: 13, cardKind: "H" },
        ],
        White: [
          { cardValue: 12, cardKind: "H" },
          { cardValue: 12, cardKind: "S" },
          { cardValue: 11, cardKind: "H" },
          { cardValue: 8, cardKind: "H" },
          { cardValue: 8, cardKind: "S" },
        ],
      },
      2
    )
  ).toEqual({ winner: "Black", winningCard: 13 });
  expect(
    cardOfMultiples(
      [
        { "9": 2, "4": 1, "12": 2 },
        { "12": 2, "11": 1, "8": 2 },
      ],
      {
        Black: [
          { cardValue: 9, cardKind: "C" },
          { cardValue: 9, cardKind: "D" },
          { cardValue: 4, cardKind: "S" },
          { cardValue: 12, cardKind: "C" },
          { cardValue: 12, cardKind: "D" },
        ],
        White: [
          { cardValue: 12, cardKind: "H" },
          { cardValue: 12, cardKind: "S" },
          { cardValue: 11, cardKind: "H" },
          { cardValue: 8, cardKind: "H" },
          { cardValue: 8, cardKind: "S" },
        ],
      },
      2
    )
  ).toEqual({ winner: "Black", winningCard: 9 });
});
