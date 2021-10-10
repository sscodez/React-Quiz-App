import { shuffleArray } from './utils';
import questions from './Question';
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (): Promise<QuestionsState[]> => {
  const data = questions;
  return data.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
};