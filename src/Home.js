import Title from "./Title";
import Selector from "./Selector";
import Button from "./Button";

const Home = () => {
    return (
        <div className = "homeContainer">
        <Title />
        <Selector 
        type = "level"
        descriptor = "Choose a knowledge level"
        buttonNames = {['Beginner', 'Intermediate', 'Wizard']}
        handler = ""
        />
        <Selector 
        type = "length"
        descriptor = "How many questions would you like?"
        buttonNames = {['10', '20', '50']}
        handler = ""/>
        <Button 
        text = "Play"/>
        </div>
        
    );
}

export default Home;