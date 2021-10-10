
import React, { useState } from 'react';
import { fetchQuizQuestions } from './Test';
import styled from 'styled-components';
// Components
import QuestionCard from './QuestionCard';


// types
 import { QuestionsState } from './Test';
// Styles
import { Wrapper ,Track,Score} from './App.style';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;

};
let wrong_count=0;
let correct_count=0;
let maxwrong=0;
let nexts =0;
let nextsc=0;
let max=0;
type Props = {
  percent:number;
  
}
type Scprops={
  sc:number;
}
type Mxprops={
  ms:number;
}

type Wrprops={
  wr:number;
}
const ProgressBar = styled.div<Props>`{
  width: ${props => props.percent}%;
  height:100%;
  background-color:#d9d9d9;
  border-radius:0px;
  box-shadow: inset 0 0 5px #0000;
  
}`;

const ScoreBar = styled.div<Scprops>`{
  width: ${props => props.sc}%;
  height:100%;
  background-color:#595959;
  border-radius:4px;
  box-shadow: inset 0 0 5px #0000;
 
}`;
const MaxBar = styled.div<Mxprops>`{
  width: ${props => props.ms}%;
  height:100%;
  background-color:#d9d9d9;
  border-radius:4px;
  box-shadow: inset 0 0 5px #0000;
}`;
const WrongBar = styled.div<Wrprops>`{
  width: ${props => props.wr}%;
  height:100%;
  background-color:black;
  border-radius:4px;
  
  box-shadow: inset 0 0 5px #0000;
}`;
const TOTAL_QUESTIONS = 20;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState <QuestionsState[]> ([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [scorecard, setScorecard] = useState(0);
  const [Status, setStatus] = useState('');
  const [gameOver, setGameOver] = useState(true);
  const [percentage,SetPercentage]=useState(1);
  const [Max,setMax]=useState(0);
  const [Maxbar,setMaxbar]=useState(0);
  const [Wrbar,setWrbar]=useState(0);
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions();
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      const nextm = number + 1;
      // Add score if answer is correct
      if (correct) 
        correct_count=correct_count+1;
        setStatus('Correct');
        nextsc=((correct_count + 1)/nextm)*100;

        max=(nextm/20)*100;
        setScorecard(nextsc)
        setMax(max);
        setMaxbar(max);
        {setScore(nextsc);
      };
      if(!correct)
      {
        wrong_count=wrong_count+1;
        maxwrong=(wrong_count/20)*100;
        setWrbar(maxwrong);
        setStatus('Sorry')
      }    
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  
  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQ = number + 1;
    
    nexts=nexts+5.5;

    if (nextQ === TOTAL_QUESTIONS) {
      
      setGameOver(true);
      
    } else {
      setNumber(nextQ);
      setStatus(' ');
      SetPercentage(nexts);
    }
  };

  return (
    <>

    <Track><ProgressBar percent={percentage}/></Track>
      <Wrapper>
        
      
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className='start' onClick={startTrivia}>
            Start
          </button>
        ) : null}
       
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver && (
          <QuestionCard
        
          questionDifficulty={questions[number].difficulty}
          questionCategory={questions[number].category}
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            correctAnswer={questions[number].correct_answer}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver ? <h1 className='status'>{Status}</h1> : null}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}

{!gameOver ? <p className='score'>Score: {score}%</p> : null}
{!gameOver ? <p className='max'>Max-Score: {Max}%</p> : null}
  <Score><ScoreBar sc={scorecard} />
  <MaxBar ms={Maxbar}></MaxBar>
  <WrongBar wr={Wrbar}/>
  </Score>
         
  </Wrapper>
   </>
  );
};

export default App;