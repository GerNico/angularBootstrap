import {QuestionType} from './questionType';
import {Option} from './option';

export class Question {
  id: number;
  question: string;
  answerForNoOptions: string;
  type: QuestionType;
  options: Option[];
}
