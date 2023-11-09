const SelectorButton = ({ text, onClick, highlight }) => {
    return (
        <button onClick={() => onClick(text)} className={`${text} button ${highlight ? 'clicked' : undefined}`}>{text}</button>
    )
}

export default SelectorButton;