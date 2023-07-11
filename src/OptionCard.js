const OptionCard = ({ clickHandler, option }) => {
    return (
        <li className="optionContainer" onClick={clickHandler}>
            <div>
                <h3>{option}</h3>
            </div>
        </li>
    )
}

export default OptionCard;