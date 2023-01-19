import gameResult from "./score-calc";

test("Check win by straight flush", () => {
  expect(
    gameResult({
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
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "Black",
    winningType: "straight flush",
  });
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
      White: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 13, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "straight flush",
  });
  expect(
    gameResult({
      Black: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 8, cardKind: "H" },
      ],
      White: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 13, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "straight flush",
    winningCard: { cardValue: 13, cardKind: "H" },
  });
});

/*
test("Check win by high card", () => {
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 9, cardKind: "C" },
        { cardValue: 13, cardKind: "D" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "high card",
  });
});

test("Check win by full house", () => {
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 4, cardKind: "C" },
        { cardValue: 2, cardKind: "D" },
        { cardValue: 4, cardKind: "H" },
      ],
      White: [
        { cardValue: 2, cardKind: "S" },
        { cardValue: 8, cardKind: "S" },
        { cardValue: 14, cardKind: "S" },
        { cardValue: 12, cardKind: "S" },
        { cardValue: 3, cardKind: "S" },
      ],
    })
  ).toEqual({
    winner: "Black",
    winningType: "full house",
  });
});
*/

/*
  | "high card"
  | "pair"
  | "two pairs"
  | "three of a kind"
  | "straight"
  | "flush"
  | "full house"
  | "four of a kind"
  | "straight flush"
  | "royal flush";
*/
