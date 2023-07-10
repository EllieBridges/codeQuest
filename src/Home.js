import Title from "./Title";
import Selector from "./Selector";
import Button from "./Button";
import axios from "axios";

//API Key - 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
//Header - Authorization: Bearer OPENAI_API_KEY

const Home = () => {

    const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
    const API_KEY = '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';

    const totalQuestions = ['3', '5', '10']

    // Prompt for the conversation
    const prompt = [`Create ${totalQuestions[0]} multiple choice questions with 3 potential answers for beginner software developers. Return this as an array of objects, with each object key the question and the value an array of potential answers`,];



    // Send API request
    const clickHandler = (type) => {
        axios.post(API_ENDPOINT, {
            prompt: prompt,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        })
            .then(response => {
                // Handle API response
                const data = response.data;
                console.log(data.choices[0].text);
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
            });
    }

    return (
        <div className="homeContainer">
            <Title />
            <Selector
                type="level"
                descriptor="Choose a knowledge level"
                buttonNames={['Beginner', 'Intermediate', 'Wizard']}
                handler={clickHandler}
            />
            <Selector
                type="length"
                descriptor="How many questions would you like?"
                buttonNames={['3', '5', '10']}
                handler={clickHandler}
            />
            <Button
                text="Play" />
        </div>

    );
}


export default Home;