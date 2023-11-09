import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizConfig from "./QuizConfig";
import Playing from "./Playing";

const Quiz = () => {
  const navigate = useNavigate();

  const [play, setPlay] = useState(false);
  const [quizLevel, setQuizLevel] = useState(null);
  const [quizLength, setQuizLength] = useState(null);

  const chooseLevel = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log(event.target);
  };

  const chooseLength = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log(event.target);
  };

  const startQuiz = () => {
    if (quizLevel && quizLength) {
      setPlay(true);
      navigate(`/quiz?length=${quizLength}&level=${quizLevel}`);
    } else if (quizLevel) {
      alert("Choose how many questions you'd like to begin playing");
    } else {
      alert("Choose a level to begin the quiz");
    }
  };

  return (
    <div className="QuizContainer">
      {!play ? (
        <QuizConfig
          handleClick={startQuiz}
          level={chooseLevel}
          length={chooseLength}
        />
      ) : (
        <Playing />
      )}
    </div>
  );
};

export default Quiz;
