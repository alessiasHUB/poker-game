import getFullCard from "./get-full-card";

test("Check win by straight flush", () => {
  expect(
    getFullCard(13, [
      { cardValue: 8, cardKind: "H" },
      { cardValue: 10, cardKind: "H" },
      { cardValue: 11, cardKind: "S" },
      { cardValue: 12, cardKind: "H" },
      { cardValue: 13, cardKind: "H" },
    ])
  ).toEqual({ cardValue: 13, cardKind: "H" });
  expect(
    getFullCard(8, [
      { cardValue: 8, cardKind: "H" },
      { cardValue: 10, cardKind: "H" },
      { cardValue: 11, cardKind: "S" },
      { cardValue: 12, cardKind: "H" },
      { cardValue: 13, cardKind: "H" },
    ])
  ).toEqual({ cardValue: 8, cardKind: "H" });
  expect(
    getFullCard(12, [
      { cardValue: 9, cardKind: "H" },
      { cardValue: 8, cardKind: "S" },
      { cardValue: 11, cardKind: "H" },
      { cardValue: 12, cardKind: "H" },
      { cardValue: 12, cardKind: "S" },
    ])
  ).toEqual({ cardValue: 12, cardKind: "H" });
  expect(
    getFullCard(2, [
      { cardValue: 2, cardKind: "C" },
      { cardValue: 2, cardKind: "H" },
      { cardValue: 4, cardKind: "S" },
      { cardValue: 8, cardKind: "C" },
      { cardValue: 13, cardKind: "H" },
    ])
  ).toEqual({ cardValue: 2, cardKind: "C" });
});
