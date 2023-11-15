import React, { useState, MouseEvent } from "react";
import QuizConfig from "./QuizConfig";
import Playing from "./Playing";
import Nav from "./Nav";
import "Quiz.css";

const Quiz = ({ isAuth }: { isAuth: string }) => {
  const [play, setPlay] = useState(false);
  const [quizLevel, setQuizLevel] = useState<string>("");
  const [quizLength, setQuizLength] = useState<string>("");

  const chosenLevel = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    //fix any
    setQuizLevel((event.target as any).value);
  };

  //fix any
  const chosenLength = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setQuizLength((event.target as any).value);
  };

  const startQuiz = (): void => {
    if (quizLevel && quizLength) {
      setPlay(true);
    } else if (quizLevel) {
      alert("Choose how many questions you'd like to begin playing");
    } else {
      alert("Choose a level to begin the quiz");
    }
  };

  const restartGame = (): void => {
    setPlay(false);
  };

  return (
    <div className="QuizContainer container">
      <Nav page="login" />
      {!play ? (
        <QuizConfig
          handleClick={startQuiz}
          chooseLevel={chosenLevel}
          chooseLength={chosenLength}
          isAuth={isAuth}
        />
      ) : (
        <Playing
          level={quizLevel}
          length={parseInt(quizLength)}
          handleClick={restartGame}
        />
      )}
    </div>
  );
};

export default Quiz;
