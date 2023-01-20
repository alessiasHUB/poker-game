import isStraight from "./is-straight";

test("Check win by straight", () => {
  expect(
    isStraight({
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
  ).toEqual({ winner: "Black" });
  expect(
    isStraight({
      Black: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 6, cardKind: "H" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 13, cardKind: "H" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 5, cardKind: "C" },
        { cardValue: 6, cardKind: "H" },
      ],
    })
  ).toEqual({ winner: "White" });
  expect(
    isStraight({
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
        { cardValue: 5, cardKind: "C" },
        { cardValue: 6, cardKind: "H" },
      ],
    })
  ).toEqual({ winner: "Black", winningCard: { cardValue: 13, cardKind: "H" } });
  expect(
    isStraight({
      Black: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 10, cardKind: "S" },
        { cardValue: 13, cardKind: "H" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 13, cardKind: "S" },
        { cardValue: 5, cardKind: "C" },
        { cardValue: 6, cardKind: "H" },
      ],
    })
  ).toEqual(false);
  expect(
    isStraight({
      Black: [
        { cardValue: 8, cardKind: "S" },
        { cardValue: 10, cardKind: "S" },
        { cardValue: 11, cardKind: "S" },
        { cardValue: 12, cardKind: "S" },
        { cardValue: 13, cardKind: "S" },
      ],
      White: [
        { cardValue: 8, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 11, cardKind: "S" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 13, cardKind: "H" },
      ],
    })
  ).toEqual(false);
});
