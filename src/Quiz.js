import QuestionCard from "./QuestionCard";
import Title from "./Title";
// import { beginnerQuestions, intermediateQuestions, wizardQuestions } from "./questions";

const Quiz = () => {
    return (
        <div className='quizContainer'>
            <QuestionCard
                question="how are you?"
                options={["fine", "tired", "happy"]}
            />
        </div>
    )
}

export default Quiz;