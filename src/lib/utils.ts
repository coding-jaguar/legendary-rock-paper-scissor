export const decideWinner = (
  playerAttack: string,
  computerAttack: string
): boolean | null => {
  if (
    (playerAttack === "rock" &&
      (computerAttack === "scissors" || computerAttack === "lizard")) ||
    (playerAttack === "paper" &&
      (computerAttack === "rock" || computerAttack === "spock")) ||
    (playerAttack === "scissors" &&
      (computerAttack === "paper" || computerAttack === "lizard")) ||
    (playerAttack === "lizard" &&
      (computerAttack === "spock" || computerAttack === "paper")) ||
    (playerAttack === "spock" &&
      (computerAttack === "scissors" || computerAttack === "rock"))
  ) {
    return true;
  }

  if (playerAttack === computerAttack) {
    return null;
  }

  return false;
};
