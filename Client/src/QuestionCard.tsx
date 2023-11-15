import React, { useState } from "react";
import OptionCard from "./OptionCard";
import "QuestionCard.css";

const QuestionCard = ({
  question,
  options,
  nextQuestion,
  playerScore,
  answer,
}: {
  question: string;
  options: string[];
  nextQuestion: () => void;
  playerScore: (option: string) => number;
  answer: string;
}) => {
  // const [clicked, setClicked] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const disableButtons = () => {
    setIsDisabled(true);
  };

  const resetButtons = () => {
    setIsDisabled(false);
  };

  return (
    <div className="questionCard">
      <h1 className="question">{question}</h1>
      <ol className="optionsContainer">
        {options.map((option, i) => {
          return (
            <OptionCard
              isDisabled={isDisabled}
              key={i}
              nextQuestion={nextQuestion}
              option={option}
              setPlayerScore={playerScore}
              answer={answer}
              disableButtons={disableButtons}
              resetButtons={resetButtons}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default QuestionCard;
