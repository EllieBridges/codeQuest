import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Title from "./Title";
import Selector from "./Selector";
import Button from "./SelectorButton";



const Home = () => {

    const navigate = useNavigate()

    const quizType = {};

    const setQuizType = (quizParam, value) => {
        quizType[quizParam] = value;
        console.log(quizType)
    }

    const [enabled, SetEnabled] = useState(false);

    const startQuiz = () => {
        if (quizType['level'] && quizType['length']) {
            SetEnabled(true)
            navigate(`/quiz?length=${quizType['length']}&level=${quizType['level']}`)
        }
        else if (quizType['level']) {
            alert("Choose how many questions you'd like to begin playing")
        }
        else {
            alert("Choose a level to begin the quiz")
        }
    }

    return (
        <div className="homeContainer">
            <Title />
            <Selector
                type="level"
                descriptor="Choose a knowledge level"
                buttonNames={['Beginner', 'Intermediate', 'Wizard']}
                setQuizType={setQuizType}
            />

            <Selector
                type="length"
                descriptor="How many questions would you like?"
                buttonNames={['3', '5', '10']}
                setQuizType={setQuizType}
            />

            <Button
                text="Play"
                enabled={enabled}
                onClick={() => { startQuiz() }}
                route='/quiz'
            />
        </div>

    );
}


export default Home;