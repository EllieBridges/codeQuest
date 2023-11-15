import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Welcome.css";

const Welcome = ({ isAuth }: { isAuth: string }) => {
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
  }, []);

  const content = isAuth
    ? `Your current high score is ${topScore}`
    : "Login to see your top score";
  return (
    <div className="welcomeContainer">
      <h2 className="scoreReturn">{content} </h2>
    </div>
  );
};

export default Welcome;
