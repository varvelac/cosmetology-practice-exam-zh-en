import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { QuestionsService } from 'src/app/questions.service';
import { Quiz, Answers, Choice, Question } from 'src/app/quiz.model';
import { Subscription } from 'rxjs';
import { Observable, fromEvent } from 'rxjs';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  quiz: Quiz;
  answers: Answers;
  questions: Question[];
  currentQuestionIndex: number;
  unformatedQuestions : [];
  subscription:any;
  duration: number = 80 * 60;
  time: string = '';
  interval: any;
  showResults = false;

  constructor(private route: ActivatedRoute,
     private questionsService: QuestionsService,
     private router: Router) { }

  ngOnInit() {

    
    

    this.subscription = fromEvent(document, 'keypress').subscribe(e => {
      console.log(e);

        //if(e.key == "Enter" ||  e.keyCode == 32 && this.answers.values[this.currentQuestionIndex]){
          this.nextOrViewResults();
       // }
    })

  if(this.router.getCurrentNavigation().extras.state.random && this.router.getCurrentNavigation().extras.state.random == true){
    this.startCountdown();
  }

    let tempArray = this.questionsService.formatQuestions(this.router.getCurrentNavigation().extras.state);
    this.questions = tempArray;
    this.answers = new Answers();
    this.currentQuestionIndex = 0;
    
  }

  startCountdown(): void {
    let timer = this.duration, minutes, seconds;
    this.interval = setInterval(() => {
        minutes = parseInt((timer / 60).toString(), 10)
        seconds = parseInt((timer % 60).toString(), 10);
    
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
    
        this.time = `${minutes}:${seconds}`;
    
        if (--timer < 0) {
            timer = this.duration;
            this.stopCountdown();
            setTimeout(() => {
              // Do something when the countdown timer reaches zero
              alert('Time\'s up!');
            }, 1000);
        }
    }, 1000);
  }

  stopCountdown(): void {
    clearInterval(this.interval);
  }

  

  updateChoice(choice: Choice) {
    this.answers.values[this.currentQuestionIndex] = choice;
    if(!choice.correct){
      this.answers.values[this.currentQuestionIndex]['correctAnswer'] = this.questions[this.currentQuestionIndex].choices.find(choice=>{
        if(choice.correct){
          return {enCorrect :choice.value, chCorrect: choice['valueCH']}
        }
      })
    }
  }

  nextOrViewResults() {
    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.showResults = true;
      return;
    }
    this.currentQuestionIndex++;
  }

  reset() {
    this.quiz = undefined;
    this.questions = undefined;
    this.answers = undefined;
    this.currentQuestionIndex = undefined;
  }

}
