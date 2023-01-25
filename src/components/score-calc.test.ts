import gameResult from "./score-calc";

test.skip("Check win by straight flush", () => {
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
        { cardValue: 11, cardKind: "H" },
        { cardValue: 9, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 8, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
      ],
      White: [
        { cardValue: 9, cardKind: "H" },
        { cardValue: 11, cardKind: "H" },
        { cardValue: 10, cardKind: "H" },
        { cardValue: 12, cardKind: "H" },
        { cardValue: 13, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "straight flush",
  });
});
test.skip("Check win by four of a kind", () => {
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 4, cardKind: "C" },
        { cardValue: 4, cardKind: "D" },
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
    winningType: "four of a kind",
  });
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 4, cardKind: "C" },
        { cardValue: 4, cardKind: "D" },
        { cardValue: 4, cardKind: "H" },
      ],
      White: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 5, cardKind: "C" },
        { cardValue: 5, cardKind: "D" },
        { cardValue: 5, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "four of a kind",
  });
  expect(
    gameResult({
      White: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 4, cardKind: "C" },
        { cardValue: 4, cardKind: "D" },
        { cardValue: 4, cardKind: "H" },
      ],
      Black: [
        { cardValue: 2, cardKind: "S" },
        { cardValue: 8, cardKind: "S" },
        { cardValue: 14, cardKind: "S" },
        { cardValue: 12, cardKind: "S" },
        { cardValue: 3, cardKind: "S" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "four of a kind",
  });
});
test.skip("Check win by full house", () => {
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
  expect(
    gameResult({
      White: [
        { cardValue: 12, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 4, cardKind: "C" },
        { cardValue: 12, cardKind: "D" },
        { cardValue: 4, cardKind: "H" },
      ],
      Black: [
        { cardValue: 2, cardKind: "S" },
        { cardValue: 8, cardKind: "S" },
        { cardValue: 14, cardKind: "S" },
        { cardValue: 12, cardKind: "S" },
        { cardValue: 3, cardKind: "S" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "full house",
  });
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
        { cardValue: 2, cardKind: "C" },
        { cardValue: 14, cardKind: "S" },
        { cardValue: 14, cardKind: "H" },
        { cardValue: 14, cardKind: "D" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "full house",
  });
});
test.skip("Check win by flush", () => {
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "D" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 5, cardKind: "D" },
        { cardValue: 9, cardKind: "D" },
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
    winner: "Black",
    winningType: "flush",
  });
  expect(
    gameResult({
      White: [
        { cardValue: 2, cardKind: "D" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 5, cardKind: "D" },
        { cardValue: 9, cardKind: "D" },
        { cardValue: 13, cardKind: "D" },
      ],
      Black: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "flush",
  });
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "D" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 5, cardKind: "D" },
        { cardValue: 9, cardKind: "D" },
        { cardValue: 13, cardKind: "D" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "C" },
        { cardValue: 4, cardKind: "C" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 14, cardKind: "C" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "flush",
  });
});
test.skip("Check win by straight", () => {
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 4, cardKind: "C" },
        { cardValue: 6, cardKind: "D" },
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
    winningType: "straight",
  });
  expect(
    gameResult({
      White: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 4, cardKind: "C" },
        { cardValue: 6, cardKind: "D" },
      ],
      Black: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "straight",
  });
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 4, cardKind: "C" },
        { cardValue: 6, cardKind: "D" },
      ],
      White: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 4, cardKind: "C" },
        { cardValue: 6, cardKind: "D" },
      ],
    })
  ).toEqual({
    winner: "Tie",
  });
  expect(
    gameResult({
      White: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 4, cardKind: "C" },
        { cardValue: 6, cardKind: "D" },
      ],
      Black: [
        { cardValue: 7, cardKind: "C" },
        { cardValue: 9, cardKind: "H" },
        { cardValue: 6, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 10, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "Black",
    winningType: "straight",
  });
});
test.skip("Check win by three of a kind", () => {
  expect(
    gameResult({
      Black: [
        { cardValue: 4, cardKind: "H" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 9, cardKind: "C" },
        { cardValue: 13, cardKind: "D" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 2, cardKind: "H" },
        { cardValue: 2, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "three of a kind",
  });
  expect(
    gameResult({
      Black: [
        { cardValue: 3, cardKind: "H" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 3, cardKind: "S" },
        { cardValue: 9, cardKind: "C" },
        { cardValue: 13, cardKind: "D" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 2, cardKind: "H" },
        { cardValue: 2, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "Black",
    winningType: "three of a kind",
  });
  expect(
    gameResult({
      Black: [
        { cardValue: 3, cardKind: "H" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 3, cardKind: "S" },
        { cardValue: 9, cardKind: "C" },
        { cardValue: 13, cardKind: "D" },
      ],
      White: [
        { cardValue: 5, cardKind: "C" },
        { cardValue: 5, cardKind: "H" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "three of a kind",
  });
});
test.skip("Check win by two pairs", () => {
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 2, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 5, cardKind: "C" },
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
    winner: "Black",
    winningType: "two pairs",
  });
  expect(
    gameResult({
      White: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 2, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 5, cardKind: "C" },
        { cardValue: 13, cardKind: "D" },
      ],
      Black: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "two pairs",
  });
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 2, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 5, cardKind: "C" },
        { cardValue: 13, cardKind: "D" },
      ],
      White: [
        { cardValue: 3, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 5, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "two pairs",
  });
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 2, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 5, cardKind: "C" },
        { cardValue: 13, cardKind: "D" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 2, cardKind: "H" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 5, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "Tie",
  });
});
test.skip("Check win by pair", () => {
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
        { cardValue: 3, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "pair",
  });
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 5, cardKind: "C" },
        { cardValue: 13, cardKind: "D" },
      ],
      White: [
        { cardValue: 3, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "Black",
    winningType: "pair",
  });
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 2, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 9, cardKind: "C" },
        { cardValue: 13, cardKind: "D" },
      ],
      White: [
        { cardValue: 3, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "White",
    winningType: "pair",
  });
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 3, cardKind: "S" },
        { cardValue: 9, cardKind: "C" },
        { cardValue: 13, cardKind: "D" },
      ],
      White: [
        { cardValue: 3, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 14, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "Tie",
  });
});
test.skip("Check win by high card", () => {
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
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 9, cardKind: "C" },
        { cardValue: 14, cardKind: "D" },
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
    winner: "Tie",
  });
  expect(
    gameResult({
      Black: [
        { cardValue: 2, cardKind: "H" },
        { cardValue: 3, cardKind: "D" },
        { cardValue: 5, cardKind: "S" },
        { cardValue: 9, cardKind: "C" },
        { cardValue: 14, cardKind: "D" },
      ],
      White: [
        { cardValue: 2, cardKind: "C" },
        { cardValue: 3, cardKind: "H" },
        { cardValue: 4, cardKind: "S" },
        { cardValue: 8, cardKind: "C" },
        { cardValue: 13, cardKind: "H" },
      ],
    })
  ).toEqual({
    winner: "Black",
    winningType: "high card",
  });
});

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
