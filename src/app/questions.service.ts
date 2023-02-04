//define, what'll be used later on
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Quiz, Question } from './quiz.model';
import { generalKnowledge } from '../assets/files/general-knowledge';
import { generalKnowledgeCH } from '../assets/files/general-knowledge-ch';
import { quizList } from './quiz-list';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  
  public getQuizzes(path) {
    return this.http.get(path).pipe(
      map((result: any[]) => {
        return result.map(
          (r) =>
            new Quiz(r.label, r.name, r.description, r.enString, r.cnString, r.random)
        );
      })
    );
  }


  public formatQuestions(_quiz) {
    const regex = /\d+\.[^\?\.]/;
    let enQuiz = '';
    let cnQuiz = '';
    // if(_quiz.random && _quiz.enString.length == 1){
    //   const cnKeys= [ "cna240", "cnb240", "cnc240", "cnd240", "cne240"]
    //   const enKeys= [ "ena240", "enb240", "enc240", "end240", "ene240"]
    //   // const cnKeys= ["cna300", "cnb300", "cnc300", "cnd300", "cne300", "cnf300", "cna95", "cnb95", "cna240", "cnb240", "cnc240", "cnd240", "cne240"]
    //   // const enKeys= ["ena300", "enb300", "enc300", "end300", "ene300", "enf300", "ena95", "enb95", "ena240", "enb240", "enc240", "end240", "ene240"]
    //   cnKeys.forEach(e => {
    //     cnQuiz = cnQuiz + quizList[e];
    //   });
    //   enKeys.forEach(e => {
    //     enQuiz = enQuiz + quizList[e]
    //   });
     
    // } else 
    if (_quiz.random){
      const cnKeys= _quiz.cnString;
      const enKeys= _quiz.enString;
      // const cnKeys= ["cna300", "cnb300", "cnc300", "cnd300", "cne300", "cnf300", "cna95", "cnb95", "cna240", "cnb240", "cnc240", "cnd240", "cne240"]
      // const enKeys= ["ena300", "enb300", "enc300", "end300", "ene300", "enf300", "ena95", "enb95", "ena240", "enb240", "enc240", "end240", "ene240"]
      cnKeys.forEach(e => {
        cnQuiz = cnQuiz + quizList[e];
      });
      enKeys.forEach(e => {
        enQuiz = enQuiz + quizList[e]
      });
     
    } 
      else {
      enQuiz = quizList[_quiz.enString];
      cnQuiz = quizList[_quiz.cnString];
    }
    
    

    let questionBlob = enQuiz.split(regex).filter(e => e);
    let chineseBlob = cnQuiz.split(regex).filter(e => e);
    let tempArray: any = [];
    for (let i = 0; i < questionBlob.length; i++)
      if (questionBlob[i] != '') {
        let tempObject = {
          id: '',
          label: '',
          chineseLabel: '',
          choices: [
            { value: '', correct: false, valueCH: '' },
            { value: '', correct: false, valueCH: '' },
            { value: '', correct: false, valueCH: '' },
            { value: '', correct: false, valueCH: '' },
          ],
        };
        console.log(i)
        tempObject.label = questionBlob[i].match(/[^\?\.]*[\?\:]/)[0];
        tempObject.choices[0].value =
            questionBlob[i].match(/a\)(.*)(\n)/)[1];
          tempObject.choices[1].value =
            questionBlob[i].match(/b\)(.*)(\n)/)[1];
          tempObject.choices[2].value =
            questionBlob[i].match(/c\)(.*)(\n)/)? questionBlob[i].match(/c\)(.*)(\n)/)[1]: '';
          tempObject.choices[3].value =
            questionBlob[i].match(/d\)(.*)(\n)/)? questionBlob[i].match(/d\)(.*)(\n)/)[1]: '';

        tempObject.chineseLabel = chineseBlob[i].match(/[^\?\.]*[\?\:]/)[0];
        tempObject.choices[0].valueCH =
        chineseBlob[i].match(/a\)(.*)(\n)/)[1];
      tempObject.choices[1].valueCH =
        chineseBlob[i].match(/b\)(.*)(\n)/)[1];
      tempObject.choices[2].valueCH =
        chineseBlob[i].match(/c\)(.*)(\n)/)? chineseBlob[i].match(/c\)(.*)(\n)/)[1]: '';
      tempObject.choices[3].valueCH =
        chineseBlob[i].match(/d\)(.*)(\n)/)? chineseBlob[i].match(/d\)(.*)(\n)/)[1]: '';

        let temp = questionBlob[i].match(/\([^)]*\)/)[0];
        let answer = temp.match(/[A-Z]/)[0];
        switch (answer) {
          case 'A':
            tempObject.choices[0].correct = true;
            break;
          case 'B':
            tempObject.choices[1].correct = true;
            break;
          case 'C':
            tempObject.choices[2].correct = true;
            break;
          case 'D':
            tempObject.choices[3].correct = true;
            break;
          default:
            console.log("can't find answer");
            break;
        }
        tempArray.push(tempObject);
      }
    console.log(tempArray);
    if(_quiz.random){
      this.shuffle(tempArray);
      tempArray.splice(110);
    }
    return tempArray;
  }

  shuffle(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  public getQuestions(fileName: string) {
    return this.http.get(`./assets/${fileName}.json`).pipe(
      map((result: any[]) => {
        return result.map((r) => new Question(r.label, r.choices));
      })
    );
  }
}
