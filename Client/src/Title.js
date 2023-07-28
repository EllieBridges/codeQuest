const Title = ({ text, slogan }) => {
    return (
        <div className='titleContainer'>
            <h1 className='title'>{text}</h1>
            <h3 className='slogan'>{slogan}</h3>
        </div>
    )
}

export default Title;