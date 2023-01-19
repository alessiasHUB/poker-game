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
  ).toEqual(["White", { cardValue: 13, cardKind: "H" }]);
});
