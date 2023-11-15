import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NextLevelButton({
  link,
  text,
  score,
  handleClick,
}: {
  link: string;
  text: string;
  score: number;
  handleClick: () => void;
}) {
  const resetGame = () => {
    handleClick();
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/score",
        {
          score: score,
        },
        { headers: { authorization: sessionStorage.getItem("userToken") } }
      );
      resetGame();
      console.log("response", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Link to={link} reloadDocument>
      <button
        data-testid="nextQuizButton"
        onClick={handleSubmit}
        className="button"
      >
        {text}
      </button>
    </Link>
  );
}

export default NextLevelButton;
