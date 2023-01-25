import isRoyalFlush from "./is-royal-flush";

test("Check win by royal straight flush", () => {
  expect(
    isRoyalFlush([
      { cardValue: 8, cardKind: "H" },
      { cardValue: 10, cardKind: "H" },
      { cardValue: 11, cardKind: "S" },
      { cardValue: 12, cardKind: "H" },
      { cardValue: 13, cardKind: "H" },
    ])
  ).toEqual(false);
  expect(
    isRoyalFlush([
      { cardValue: 10, cardKind: "H" },
      { cardValue: 14, cardKind: "H" },
      { cardValue: 11, cardKind: "S" },
      { cardValue: 12, cardKind: "H" },
      { cardValue: 13, cardKind: "H" },
    ])
  ).toEqual(true);
});
