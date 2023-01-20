import { isStraightFlush } from "./is-straight-flush";

test("Check win by straight flush", () => {
  expect(
    isStraightFlush({
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
  ).toEqual({ winner: "White" });
  expect(
    isStraightFlush({
      White: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 8, cardKind: "H" },
      ],
      Black: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 13, cardKind: "H" },
      ],
    })
  ).toEqual({ winner: "Black" });
  expect(
    isStraightFlush({
      Black: [
        { cardValue: 9, cardKind: "S" },
        { cardValue: 10, cardKind: "S" },
        { cardValue: 11, cardKind: "S" },
        { cardValue: 12, cardKind: "S" },
        { cardValue: 13, cardKind: "S" },
      ],
      White: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 13, cardKind: "H" },
      ],
    })
  ).toEqual({ winner: "Tie" });
  expect(
    isStraightFlush({
      Black: [
        { cardValue: 9, cardKind: "S" },
        { cardValue: 10, cardKind: "S" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 12, cardKind: "S" },
        { cardValue: 13, cardKind: "S" },
      ],
      White: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 11, cardKind: "S" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 13, cardKind: "H" },
      ],
    })
  ).toEqual(false);
  expect(
    isStraightFlush({
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
