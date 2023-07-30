

const Welcome = ({ name, highScore }) => {
    return (
        <div>
            <h1>Hello {name}!</h1>
            <h2>Your current high score is {highScore}, ready to beat this?</h2>
            <button>Start a quiz</button>
        </div>
    )

}

export default Welcome;