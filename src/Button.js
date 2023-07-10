const Button = ({ clickHandler, text }) => {
    return (
        <button onClick={clickHandler} className={`${text} button`}>{text}</button>
    )
}

export default Button;