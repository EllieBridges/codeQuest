import React, { useState } from "react";
import Title from "./Title";
import Selector from "./Selector";
import PlayButton from "./PlayButton";
import Welcome from "./Welcome";

function QuizConfig() {
  return (
    <div className="quizConfigContainer">
      <Title text="CodeQuest" slogan="Test Your Knowledge" />
      <Welcome />
      <Selector
        type="level"
        descriptor="Choose a knowledge level"
        buttons={["Beginner", "Intermediate", "Wizard"]}
        quizType={chooseLevel}
      />

      <Selector
        type="length"
        descriptor="How many questions would you like?"
        buttons={["3", "5", "10"]}
        quizType={chooseLength}
      />

      <PlayButton handleClick={startQuiz}>Play</PlayButton>
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
    </div>
  );
}

export default QuizConfig;
