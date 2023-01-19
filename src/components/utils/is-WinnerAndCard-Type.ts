import { WinnerAndCard, Card } from "../score-calc";

export default function isWinnerAndCard(value: any): value is WinnerAndCard {
  return (
    Array.isArray(value) &&
    (value[0] === "White" || value[0] === "Black" || value[0] === "Both") &&
    value[1] instanceof Card
  );
}
