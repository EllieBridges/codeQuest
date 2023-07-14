const EndGame = ({ finalScore, gameLength, gameLevel }) => {

    const quizLength = Number(gameLength)
    const score = Number(finalScore)

    console.log('length', typeof quizLength, 'score', typeof score, +quizLength / +score)

    const message = (quizLength, score) => {
        const scorePercentage = score / quizLength * 100;
        console.log(scorePercentage)


        if (scorePercentage < 50) {
            return `${score} points out of ${quizLength}. Let's see if we can improve that score`;
        }
        else if (scorePercentage >= 50 && scorePercentage <= 90) {
            return `You got ${score} out of ${quizLength} questions correct! Good shot, practice makes perfect!`
        }
        else if (scorePercentage < 90 && scorePercentage !== 100) {
            if (gameLevel !== 'wizard') {
                return `${score}/${quizLength}! You aced this. Try the next level up!`
            }
            else {
                return `Good going! ${score} questions out of ${quizLength} correct!`
            }
        }
        else if (scorePercentage === 100) {
            return `${scorePercentage}% - you are quite the Wizard!`
        }
        else {
            return ('An error has occured, the developer is yet to reach wizard level')
        }
    }


    return (
        <div>
            <h1>GAME OVER</h1>
            <h3>{message(quizLength, score)}</h3>
        </div>
    )
}

export default EndGame;