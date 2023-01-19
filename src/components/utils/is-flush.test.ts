import isFlush from "./is-flush";

test("Check win by flush", () => {
  expect(
    isFlush({
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
    isFlush({
      Black: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 5, cardKind: "C" },
        { cardValue: 6, cardKind: "H" },
      ],
      White: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 6, cardKind: "H" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 13, cardKind: "H" },
      ],
    })
  ).toEqual("White");
  expect(
    isFlush({
      Black: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 11, cardKind: "C" },
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
  ).toEqual(0);
  expect(
    isFlush({
      Black: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 2, cardKind: "H" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "C" },
        { cardValue: 13, cardKind: "C" },
        { cardValue: 5, cardKind: "C" },
        { cardValue: 6, cardKind: "C" },
      ],
    })
  ).toEqual(["White", { cardValue: 13, cardKind: "C" }]);
  expect(
    isFlush({
      Black: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 2, cardKind: "H" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 13, cardKind: "H" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "C" },
        { cardValue: 13, cardKind: "C" },
        { cardValue: 5, cardKind: "C" },
        { cardValue: 6, cardKind: "C" },
      ],
    })
  ).toEqual(["Both", { cardValue: 13, cardKind: "C" }]);
});
