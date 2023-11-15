import React, { useState } from "react";
import "./OptionCard.css";

function OptionCard({
  nextQuestion,
  setPlayerScore,
  option,
  answer,
  disableButtons,
  isDisabled,
  resetButtons,
}: {
  nextQuestion: () => void;
  setPlayerScore: (option: string) => void;
  option: string;
  answer: string;
  disableButtons: () => void;
  isDisabled: boolean;
  resetButtons: () => void;
}) {
  const [result, setResult] = useState<string>("");

  const highlightResults = (): void => {
    if (option === answer) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
  };

  const nextQuestReset = (): void => {
    nextQuestion();
    setResult("");
    resetButtons();
  };

  const handleClick = () => {
    highlightResults();
    disableButtons();
    console.log(result);
    setTimeout(nextQuestReset, 1000);
    setPlayerScore(option);
  };

  return (
    <button
      className={
        !isDisabled
          ? ` enabledOptionContainer optionContainer`
          : `optionContainer ${result}`
      }
      onClick={handleClick}
      disabled={isDisabled}
    >
      <h3 className="option">{option}</h3>
    </button>
  );
}

export default OptionCard;
