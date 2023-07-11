import React, { useState } from 'react';

import Title from "./Title";
import Selector from "./Selector";
import Button from "./SelectorButton";


//API Key - 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
//Header - Authorization: Bearer OPENAI_API_KEY

const Home = () => {


    const quizType = {};

    const setQuizType = (quizParam, value) => {
        quizType[quizParam] = value;
        console.log(quizType)
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
                enabled={quizType['length'] && quizType['level']}
                onClick={() => { alert("Button clicked") }}
            />

        </div>

    );
}


export default Home;