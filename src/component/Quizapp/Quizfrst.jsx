import React, { useState } from "react";
import MainMenu from "./MainMenu";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";
import { QuizContext } from "../Helpers/Context";

function Quizfrst() {
  const [gameStates, setGameStates] = useState("menu");
  const [score, setScore ]=useState("score");
  return (
    <div>
      <h2> Quiz App</h2>
      <QuizContext.Provider value={{ gameStates, setGameStates,  score, setScore }}>
        {gameStates === "menu" && <MainMenu/>}
        {gameStates === "quiz" && <Quiz/>}
        {gameStates === "endscreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default Quizfrst;
