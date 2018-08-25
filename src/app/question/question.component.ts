import {Component, Input, OnInit} from '@angular/core';
import {QuestionsService} from '../shared/questions.service';
import {Test} from '../shared/test';
import {Option} from '../shared/option';

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
        this.question = this.myTest.questions[1].question;
        this.options = this.myTest.questions[1].options;
        console.log(this.myTest);
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
