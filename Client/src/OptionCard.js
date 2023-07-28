const OptionCard = ({ nextQuestion, setPlayerScore, option }) => {

    const handleClick = () => {
        nextQuestion()
        setPlayerScore(option)
    }

    return (
        <li className="optionContainer" onClick={handleClick}>
            <div>
                <h3 className="option">{option}</h3>
            </div>
        </li>
    )
}

export default OptionCard;