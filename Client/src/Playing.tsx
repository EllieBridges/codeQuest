import React, { useRef, useState } from "react";
import { Question, getQuestions, intermediate } from "./questions";
import QuestionCard from "./QuestionCard";
import EndGame from "./EndGame";

function Playing({
  level,
  length,
  handleClick,
}: {
  level: string;
  length: number;
  handleClick: () => void;
}) {
  const [count, setCount] = useState(0);

  const quizQuestions = useRef<Question[]>(intermediate);

  quizQuestions.current = getQuestions(level, length);

  let points = useRef<number>(0);

  const nextQuestion = () => {
    setCount(count + 1);
  };

  const playerScore = (option: string): number => {
    if (quizQuestions.current[count].answer === option) {
      points.current++;
    }
    return points.current;
  };

  return count < length ? (
    <div className="quizContainer">
      <QuestionCard
        question={quizQuestions.current[count].question}
        answer={quizQuestions.current[count].answer}
        options={quizQuestions.current[count].options}
        nextQuestion={nextQuestion}
        playerScore={playerScore}
      />
    </div>
  ) : (
    <EndGame
      gameLength={length}
      gameLevel={level}
      finalScore={points.current}
      handleClick={handleClick}
    />
  );
}

export default Playing;
