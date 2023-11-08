import { useState } from "react";
const OptionCard = ({ nextQuestion, setPlayerScore, option, answer }) => {
  const [result, setResult] = useState(null);

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
};

export default OptionCard;
