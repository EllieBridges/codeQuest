import OptionCard from "./OptionCard";

const QuestionCard = ({ question, options, nextQuestion }) => {


    return (
        <div className="questionCard">
            <h1 className="question">{question}</h1>
            <ol className="optionsContainer">
                {options.map((option) => {
                    return (
                        <OptionCard
                            nextQuestion={nextQuestion}
                            option={option}
                        />
                    )
                })}
            </ol>
        </div >
    )
}

export default QuestionCard;