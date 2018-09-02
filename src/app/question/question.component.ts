import {Component, Input, OnInit} from '@angular/core';
import {QuestionsService} from '../shared/questions.service';
import {Test} from '../shared/test';
import {Option} from '../shared/option';
import {QuestionType} from '../shared/questionType';
import {Question} from '../shared/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public question: string;
  public options: Option[];
  public selectedOption: Option;
  private myTest: Test;
  @Input() public rate: number;

  constructor(private questionService: QuestionsService) {
  }

  ngOnInit() {
    this.questionService.getTestById(5)
      .subscribe(test => {
        this.myTest = test;
        const filtered: Question[] = this.myTest.questions.filter(question => question.type === QuestionType.WITHOUT_OPTIONS);
        this.question = filtered[0].question;
        this.options = filtered[0].options;
      });

  }

  checkedItem(index: number) {
    console.log(index);
    this.selectedOption = this.options[index];
  }

  submited() {
    console.log(Test);
  }
}
