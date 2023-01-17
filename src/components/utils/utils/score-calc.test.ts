import gameResult from "./score-calc";

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
    winner: "White wins.",
    winningType: " - with high card: ",
    winningCard: ` highest card: 14H`,
  });
});
