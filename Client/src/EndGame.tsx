import React from "react";
import NextLevelButton from "./NextLevelButton";
import Title from "./Title";

function EndGame({
  finalScore,
  gameLength,
  gameLevel,
  handleClick,
}: {
  finalScore: number;
  gameLength: number;
  gameLevel: string;
  handleClick: () => void;
}) {
  const quizLength = Number(gameLength);
  const score = Number(finalScore);
  const scorePercentage = (score / quizLength) * 100;

  const message = (scorePercentage: number, level: string) => {
    if (scorePercentage < 50) {
      return "Let's see if we can improve that score";
    } else if (scorePercentage >= 50 && scorePercentage <= 90) {
      return "Good shot, practice makes perfect!";
    } else if (scorePercentage > 90) {
      if (scorePercentage === 100) {
        if (level !== "wizard") {
          return `${scorePercentage}%! You're ready for the next level!`;
        } else {
          return `${scorePercentage}% - you are quite the Wizard!`;
        }
      }
      if (level !== "wizard") {
        return `${scorePercentage}% Try the next level if you're brave enough!`;
      } else {
        return `You aced this - ${scorePercentage}! You know your stuff`;
      }
    } else {
      return "An error has occured, the developer is yet to reach wizard level";
    }
  };

  const nextLevel = () => {
    if (scorePercentage > 90) {
      if (gameLevel === "Beginner") {
        return "Intermediate";
      } else if (gameLevel === "Intermediate") {
        return "Wizard";
      }
    } else {
      return undefined;
    }
  };

  const newLevel = nextLevel();

  return (
    <div
      className={`endGameContainer ${
        scorePercentage === 100 ? "firework" : undefined
      }`}
    >
      <Title text="GAME OVER" slogan={message(scorePercentage, gameLevel)} />
      <h2>{`SCORE : ${score}/${quizLength}`}</h2>
      <NextLevelButton
        link={newLevel ? `/quiz?length=5&level=${newLevel}` : "/quiz"}
        text={newLevel ? `Try ${newLevel}` : "Return Home"}
        score={scorePercentage}
        handleClick={handleClick}
      />
    </div>
  );
}

export default EndGame;
