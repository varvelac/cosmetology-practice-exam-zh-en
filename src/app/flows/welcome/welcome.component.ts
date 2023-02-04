import { Component, Input } from '@angular/core';
import { QuestionsService } from 'src/app/questions.service'; 
import { Quiz } from 'src/app/quiz.model';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  private password:string;
  private authorized: boolean = false;
  private showError: boolean = false;
 

  collection: any [];
  constructor(private questionsService: QuestionsService,
    private router: Router) {

    this.collection = [];
    // this.questionsService.getQuizzes(`assets/json/quiz-list.json`)
    //   .subscribe(quiz => {
    //     this.collection.push({name:'Weekly', value:quiz})
    //   });

    //   this.questionsService.getQuizzes(`assets/json/daily-quiz-list.json`)
    //   .subscribe(quiz => {
    //     this.collection.push({name:'Daily', value:quiz})
    //   });
      // this.questionsService.getQuizzes(`assets/json/comp110122.json`)
      // .subscribe(quiz => {
      //   this.collection.push({name:'1-212 comprehensive', value:quiz})
      // });
 
      this.questionsService.getQuizzes(`assets/json/comp111122.json`)
      .subscribe(quiz => {
        this.collection.push({name:'1-260 comprehensive', value:quiz})
      });
      this.questionsService.getQuizzes(`assets/json/comp300.json`)
      .subscribe(quiz => {
        this.collection.push({name:'1-300 comprehensive', value:quiz})
      });
      this.questionsService.getQuizzes(`assets/json/comp95.json`)
      .subscribe(quiz => {
        this.collection.push({name:'1-95 comprehensive', value:quiz})
      });
      this.questionsService.getQuizzes(`assets/json/comp240.json`)
      .subscribe(quiz => {
        this.collection.push({name:'1-275 comprehensive', value:quiz})

      });
      // this.questionsService.getQuizzes(`assets/json/comp117.json`)
      // .subscribe(quiz => {
      //   this.collection.push({name:'1-117 comprehensive', value:quiz})

      // });
      
      
  }

  random(){
    this.router.navigateByUrl('/quiz', {
      state: {random: true,
        label: "Random 110",
        name: "Random 110",
        description: "General Knowledge Quiz from 11-16-022",
        enString : ["ena95", "enb95", "ena300","enb300","enc300","end300","ene300", "enf300","ena240", "enb240", "enc240", "end240", "ene240"],
        cnString: ["cna95", "cnb95", "cna300","cnb300","cnc300","cnd300","cne300", "cnf300","cna240", "cnb240", "cnc240", "cnd240", "cne240"]
      }
        
  });
  }

  vocab(){
    this.router.navigateByUrl('/vocab');
  }
  selectQuiz(_quiz){
    this.router.navigateByUrl('/quiz', {
      state: _quiz
  });
  }

  submit(){
    //no need for sophisticated password.  Just to prevent students that didn't help wife with translations from using it.
    if(this.password == "8888"){
      this.authorized = true;
      this.showError = false;
    } else {
      this.showError = true;
    }
  }
}
