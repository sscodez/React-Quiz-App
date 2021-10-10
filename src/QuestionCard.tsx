import React from 'react';
// Types
import { AnswerObject } from './App';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  
  
    questionCategory:string
    questionDifficulty:string
    question: string;
    correctAnswer:string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
 };

const QuestionCard : React.FC<Props>  = ({
   
    correctAnswer,
    questionCategory ,
  questionDifficulty,  
  questionNr,
  totalQuestions,  
  question,
  answers,  
  userAnswer,
  callback,
}) => (
 <Wrapper>
    <h1 className='number'>
      Question {questionNr} of {totalQuestions}
    </h1>
    <h5>{questionCategory}</h5>
    {questionDifficulty === "easy" ?(<p><StarIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/>
   </p>):null}
    {questionDifficulty === "medium" ?(<p><StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/></p>):null}
    {questionDifficulty === "hard" ?(<p><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/></p>):null}
    <h3 dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>

          
        </ButtonWrapper>
           
      ))}
      </div>
 </Wrapper>
);

export default QuestionCard;