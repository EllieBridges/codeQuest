import React, { useRef, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { getQuestions } from './questions';
import QuestionCard from "./QuestionCard";




const Quiz = () => {
    const [searchParams] = useSearchParams();
    const { level, length } = Object.fromEntries([...searchParams]);

    const [count, setCount] = useState(0);

    const quizQuestions = useRef(getQuestions(level, length));

    const nextQuestion = () => {
        setCount(count + 1)
    }

    let points = useRef(0);

    const setPlayerScore = (option) => {

        if (quizQuestions.current[count].answer === option) {
            ++points
        }
        return points
    }



    return (
        (count < length) ? (<div className='quizContainer'>
            <QuestionCard
                question={quizQuestions.current[count].question}
                options={quizQuestions.current[count].options}
                nextQuestion={nextQuestion}
                setPlayerScore={setPlayerScore}
            />
        </div>) : (<div>{`GAME OVER ${points.current}`}</div>)
    )



}



export default Quiz;