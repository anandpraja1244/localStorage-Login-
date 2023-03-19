import { useState, useContext } from "react";
import { Question } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";

function Quiz() {
  const { score, setScore, setGameStates } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionsChosen, setOptionsChosen] = useState("");

  const nextQuestion = () => {
    if (Question[currQuestion].answer === optionsChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };
  
  const EndQuz = () => {
    if (Question[currQuestion].answer === optionsChosen) {
      setScore(score + 1);
    }
    setGameStates("endscreen");
  };
  return (
    <div>
      <h2>{Question[currQuestion].prompt} </h2>
      <button onClick={() => setOptionsChosen("A")}>
        {Question[currQuestion].optionA}{" "}
      </button>
      <button onClick={() => setOptionsChosen("B")}>
        {Question[currQuestion].optionB}{" "}
      </button>
      <button onClick={() => setOptionsChosen("C")}>
        {Question[currQuestion].optionC}{" "}
      </button>
      <button onClick={() => setOptionsChosen("D")}>
        {Question[currQuestion].optionD}{" "}
      </button>
      {currQuestion === Question.length - 1 ? (
        <button onClick={EndQuz}>End Quz</button>
      ) : (
        <button onClick={nextQuestion}>Next Queston </button>
      )}
    </div>
  );
}

export default Quiz;
