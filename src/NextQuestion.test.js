import { render, fireEvent, screen } from "@testing-library/react";
//import the library
import NextLevelButton from "./NextLevelButton";
//import the component to test

//text block
test("quizQuestions", () => {
    render(<NextLevelButton />)


    //select the elements you want to interact with
    const button = screen.getByTestId("nextQuizButton");

    //interact with those elements
    fireEvent.click(incrementBtn);

    //assert the expected result
    expect(button).toHaveTextContent("1");
});