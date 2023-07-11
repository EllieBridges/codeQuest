import OptionCard from "./OptionCard";

const QuestionCard = ({ question, options }) => {

    const submitAnswer = () => {
        alert('Answer clicked')
    }

    return (
        <div className="questionCard">
            <h1 className="question">{question}</h1>
            <ol className="optionsContainer">
                {options.map((option) => {
                    return (
                        <OptionCard
                            clickHandler={submitAnswer}
                            option={option}
                        />
                    )
                })}
            </ol>
        </div >
    )
}

export default QuestionCard;