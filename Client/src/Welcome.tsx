import React, { useState, useEffect } from "react";
import axios from "axios";

const Welcome = () => {
  const [topScore, setTopScore] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/score", {
        headers: { authorization: sessionStorage.getItem("userToken") },
      })
      .then((response) => {
        setTopScore(response.data.score);
        console.log("response", response, "topScore", topScore);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h2 className="scoreReturn">Your current high score is {topScore} </h2>
    </div>
  );
};

export default Welcome;
