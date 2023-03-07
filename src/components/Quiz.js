import React,{useContext,useState} from 'react';
import { QContext } from './Context';
import "../App.css";
import { Questions } from './questions';
const Quiz=()=>{
   const[curq,setCurq]=useState(0);
   const [option,setOption]=useState("");
  const[colora,setColora]=useState(false);
  const[colorb,setColorb]=useState(false);
  const[colorc,setColorc]=useState(false);
  const [dis,setDis]=useState(false);
   const nextQuestion = () => {
    if (Questions[curq].answer === option) {
      setScore(score + 1);
    }
    setCurq(curq + 1);
    setColora(false);
    setColorb(false);
    setColorc(false);
    setDis(false);
  };

  const finishQuiz = () => {
    if (Questions[curq].answer === option) {
      setScore(score + 1);
    }
    setQuizState("score");
  };

    const {setQuizState,score,setScore}=useContext(QContext);



  return (
    <div className='quiz'>
        <button onClick={()=>setQuizState('menu')}>Go To Menu</button>
        <h1>{Questions[curq].question}</h1>
        <div className='options'>
             <button disabled={dis}  style={{
          backgroundColor: colora ? 'salmon' : '',
          color: colora ? 'white' : '',
        }} onClick={()=>{setOption("optionA");setColora(true);setDis(true) }}>{Questions[curq].optionA}</button>

             <button disabled={dis} style={{
          backgroundColor: colorb ? 'salmon' : '',
          color: colorb ? 'white' : '',
        }} onClick={()=>{setOption("optionB");setColorb(true);setDis(true)}}>{Questions[curq].optionB}</button>

             <button disabled={dis} style={{
          backgroundColor: colorc ? 'salmon' : '',
          color: colorc ? 'white' : '',
        }} onClick={()=>{setOption("optionC");setColorc(true);setDis(true)}}>{Questions[curq].optionC}</button>
        </div>
        {curq === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}

        </div>
  )
}

export default Quiz;