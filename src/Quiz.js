import React, { useState } from "react";
import { useSearchParams } from 'react-router-dom';

import { getQuestions } from './questions';
import QuestionCard from "./QuestionCard";


const Quiz = () => {
    const [searchParams] = useSearchParams();
    const { level, length } = Object.fromEntries([...searchParams]);

    const [count, setCount] = useState(0);

    const quizQuestions = getQuestions(level, length)

    const nextQuestion = () => {
        setCount(count + 1)
    }
    console.log(quizQuestions)

    if (count < length) {
        return (
            <div className='quizContainer'>
                <QuestionCard
                    question={quizQuestions[count].question}
                    options={quizQuestions[count].options}
                    nextQuestion={nextQuestion}
                />
            </div>

        )
    }
}


export default Quiz;