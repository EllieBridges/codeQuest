const OptionCard = ({ nextQuestion, option }) => {

    const handleClick = () => { nextQuestion() }

    return (
        <li className="optionContainer" onClick={handleClick}>
            <div>
                <h3>{option}</h3>
            </div>
        </li>
    )
}

export default OptionCard;