const Button = ({text}) => {
    return(
        <button className = {`${text} button`}>{text}</button>
    )
}

export default Button;