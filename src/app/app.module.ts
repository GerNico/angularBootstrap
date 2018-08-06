import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {QuestionComponent} from './question/question.component';
import {CourseComponent} from './course/course.component';
// import { UserdetailsComponent } from './userdetails/userdetails.component';
import {AutorizationComponent} from './autorization/autorization.component';
import {FormsModule} from '@angular/forms';
import {TestsComponent} from './tests/tests.component';
import {HttpModule} from '@angular/http';
import {QuestionsService} from './shared/questions.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionComponent,
    CourseComponent,
    // UserdetailsComponent,
    AutorizationComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
