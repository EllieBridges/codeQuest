import React from "react";

function OptionCard({
  nextQuestion,
  setPlayerScore,
  option,
  answer,
}: {
  nextQuestion: string;
  setPlayerScore: (option: string) => void;
  option: string;
  answer: string;
}) {
  const [result, setResult] = React.useState<string>("");

  const highlightResults = () => {
    if (option === answer) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
  };

  const handleClick = () => {
    highlightResults();
    console.log(result);
    setTimeout(nextQuestion, 3000, option);
    setPlayerScore(option);
  };

  return (
    <li className={`${result} optionContainer`} onClick={handleClick}>
      <div>
        <h3 className="option">{option}</h3>
      </div>
    </li>
  );
}

export default OptionCard;
