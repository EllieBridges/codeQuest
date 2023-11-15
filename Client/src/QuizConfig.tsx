import React, { MouseEvent } from "react";
import Title from "./Title";
import Selector from "./Selector";
import PlayButton from "./PlayButton";
import Welcome from "./Welcome";

function QuizConfig({
  chooseLevel,
  chooseLength,
  handleClick,
  isAuth,
}: {
  chooseLevel: (event: MouseEvent<HTMLElement>) => void;
  chooseLength: (event: MouseEvent<HTMLElement>) => void;
  handleClick: () => void;
  isAuth: string;
}) {
  return (
    <div className="quizConfigContainer container">
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <Title text="CodeQuest" slogan="Test Your Knowledge" />
      {isAuth && <Welcome isAuth={isAuth} />}
      <Selector
        type="level"
        descriptor="Choose a knowledge level"
        buttons={["Beginner", "Intermediate", "Wizard"]}
        makeQuiz={chooseLevel}
      />

      <Selector
        type="length"
        descriptor="How many questions would you like?"
        buttons={["3", "5", "10"]}
        makeQuiz={chooseLength}
      />

      <PlayButton handleClick={handleClick}>Play</PlayButton>
    </div>
  );
}

export default QuizConfig;
