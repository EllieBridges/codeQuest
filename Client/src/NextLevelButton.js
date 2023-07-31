import axios from 'axios';
import { Link } from "react-router-dom";


const NextLevelButton = ({ link, text, score }) => {

    const handleClick = async () => {
        try {
            const response = await axios.post('http://localhost:3001/score', {
                score: score
            }, { headers: { authorization: sessionStorage.getItem('userToken') } })
            console.log('response', response)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <Link to={link} reloadDocument >
            <button data-testid="nextQuizButton" onClick={handleClick} className='button'>{text}</button>
        </Link>
    )
}

export default NextLevelButton;
