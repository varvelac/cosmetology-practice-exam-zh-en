import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss'],
})
export class MatchingComponent implements OnInit {
  words: any;
  selectedEnglish: any;
  selectedChinese: any;
  englishWords = [];
  chineseWords = [];
  pinyinWords = [];
  score: number = 0;
  mismatch: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.prepareWords();
  }
  prepareWords(){
    this.http.get('/assets/vocab/sample.json').subscribe((data) => {
      this.words = data;
     // this.shuffle(this.words)
     // let wordsToSplice = this.words.slice(0, 10);
      this.separateWords(this.words);
      this.shuffle(this.englishWords);
      this.shuffle(this.chineseWords);
    });
  }

  shuffle(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  separateWords(words) {
    words.forEach((word) => {
      this.englishWords.push({ word: word.english, id:word.id });
      this.chineseWords.push({ word: word.chinese, id:word.id });
      this.pinyinWords.push({ word: word.pinyin, id:word.id });
    });
  }

  selectEnglish(word) {
    this.selectedEnglish = word.word;
    if (this.selectedChinese != undefined)
      this.checkMatch(this.selectedEnglish, this.selectedChinese);
    this.mismatch = false;
  }

  selectChinese(word) {
    this.selectedChinese = word.word;
    if (this.selectedEnglish != undefined)
      this.checkMatch(this.selectedEnglish, this.selectedChinese);
    this.mismatch = false;
  }

  checkMatch(englishWord, chineseWord) {
    const match = this.words.find(
      (word) => word.english === englishWord && word.chinese === chineseWord
    );
    const englishIndex = this.englishWords.findIndex(
      (word) => word.word === englishWord
    );
    const chineseIndex = this.chineseWords.findIndex(
      (word) => word.word === chineseWord
    );
    if (match) {
      this.englishWords.splice(englishIndex, 1);
      this.chineseWords.splice(chineseIndex, 1);
      this.mismatch = false;
      this.score++;
      if(this.score == 10){
        this.prepareWords();
      }
    } else {
      this.mismatch = true;
      setTimeout(()=>{
        this.selectedChinese = undefined;
        this.selectedEnglish = undefined;
      },
      100)
     

      // Signal to the user that the cards don't match
    }
  }

  speak(text: string) {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }
  

  isSelected(word) {
    return this.selectedEnglish === word || this.selectedChinese === word;
  }
}
