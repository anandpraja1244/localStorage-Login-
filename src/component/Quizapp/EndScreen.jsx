import React ,{useContext} from 'react'
import { Question } from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Context'

function EndScreen() {
const {score, setScore, setGameStates} = useContext(QuizContext);
const restart=()=>{
    setScore(0);
    setGameStates("menu");
}
  return (
    <div>
        <h2>EndScreen</h2>
        <h2>{score}/{Question.length} </h2>
    <button onClick={restart}> restart Quz</button>
    </div>
  )
}

export default EndScreen