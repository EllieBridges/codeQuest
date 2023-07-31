import { useNavigate } from 'react-router-dom'
import Title from './Title';
import Selector from './Selector';
import PlayButton from './PlayButton';



const Home = () => {

    const navigate = useNavigate()

    const quizType = {};

    const setQuizType = (quizParam, value) => {
        quizType[quizParam] = value;
    }

    const startQuiz = () => {
        if (quizType['level'] && quizType['length']) {
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
            <Title
                text="CodeQuest"
                slogan="Test Your Knowledge" />
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

            <PlayButton
                text="Play"
                onClick={startQuiz}
                route='/quiz'
            />
            <div className="bg-animation">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>
        </div>

    );
}


export default Home;