import {Component, Input, OnInit} from '@angular/core';
import {QuestionsService} from '../shared/questions.service';

export interface OptionI {
  id: number;
  isCorrect: boolean;
  isSequenceBased: boolean;
  numberInSequence: number;
  text: string;
}

export interface Question {
  question: string;
  status: string;
  answerForNoOptions: string;
  type: string;
  options: OptionI[];
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public question: string;
  public type: string;
  public options: OptionI[];
  @Input() public rate: number;

  constructor(private questionService: QuestionsService) {
  }


  selectedOption: OptionI;

  ngOnInit() {
    this.question = 'Since what version of Java Fork Join Thread pool appeared?';
    this.options = [
      {id: 1, isCorrect: false, isSequenceBased: false, numberInSequence: 0, text: 'Java 5'},
      {id: 2, isCorrect: false, isSequenceBased: false, numberInSequence: 0, text: 'Java 6'},
      {id: 3, isCorrect: true, isSequenceBased: false, numberInSequence: 0, text: 'Java 7'},
      {id: 4, isCorrect: false, isSequenceBased: false, numberInSequence: 0, text: 'Java 8'},
      {id: 5, isCorrect: false, isSequenceBased: false, numberInSequence: 0, text: 'Java 9'},
      {id: 6, isCorrect: false, isSequenceBased: false, numberInSequence: 0, text: 'Java 10'}
    ];
    this.questionService.getTestById(5).subscribe(q => console.log(q));
  }


  submited() {
    console.log('is correct? ' + this.selectedOption.text);
  }

  checkedItem(index: number) {
    console.log(index);
    this.selectedOption = this.options[index];
  }
}
