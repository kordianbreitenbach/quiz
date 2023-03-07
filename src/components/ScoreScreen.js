import React,{useContext} from 'react';
import { QContext } from './Context';
import "../App.css";
import { Questions } from './questions';




 const ScoreScreen = () => {
    const {userName,setQuizState,score,setScore}=useContext(QContext);
    const restartQuiz = () => {
        setScore(0);
        setQuizState("menu");
      };
  return (
    <div className="end">
    <h1>Quiz Finished</h1>
    <h3>{userName}</h3>
    <h1>
      {score} / {Questions.length}
    </h1>
    <button onClick={restartQuiz}>Restart Quiz</button>
  </div>
  )
}

export default ScoreScreen;