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
  ).toEqual("Black");
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
  ).toEqual("White");
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
  ).toEqual(["Black", { cardValue: 13, cardKind: "H" }]);
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
  ).toEqual(0);
});
