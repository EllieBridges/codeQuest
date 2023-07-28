import OptionCard from "./OptionCard";

const QuestionCard = ({ question, options, nextQuestion, setPlayerScore }) => {


    return (
        <div className="questionCard">
            <h1 className="question">{question}</h1>
            <ol className="optionsContainer">
                {options.map((option, i) => {
                    return (
                        <OptionCard
                            key={i}
                            nextQuestion={nextQuestion}
                            option={option}
                            setPlayerScore={setPlayerScore}
                        />
                    )
                })}
            </ol>
        </div >
    )
}

export default QuestionCard;