import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";

function MainMenu() {
  const {  setGameStates } = useContext(QuizContext);
  return (
    <>
      <div>MainMenu</div>
      <button
        onClick={() => {
          setGameStates("quiz");
        }}
      > 
         start-Quz   
      </button>
    </>
  );
}

export default MainMenu;
