import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Answers, Choice, Question } from 'src/app/quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  // used to make answers available to parent component (= questions)
  // so that parent can pass it to child component (= results)
  @Input() answers: Answers;
  @Input() questions: Question[];
  score: string;
  incorrectAnswers: Choice[]
  showChinese : Boolean = false;
  constructor(){}

  ngOnInit() {
    console.log(this.answers)
    console.log(this.questions)

    this.incorrectAnswers = this.answers.values.filter(answer=>{
      return answer.correct == false;
    })
  }
}
