import { Link } from "react-router-dom";

const NextLevelButton = ({ link, text }) => {
    return (
        <Link to={link} reloadDocument >
            <button data-testid="nextQuizButton" className='button'>{text}</button>
        </Link>
    )
}

export default NextLevelButton;