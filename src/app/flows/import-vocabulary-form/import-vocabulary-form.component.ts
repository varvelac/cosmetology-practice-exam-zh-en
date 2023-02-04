import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-import-vocabulary-form',
  templateUrl: './import-vocabulary-form.component.html',
  styleUrls: ['./import-vocabulary-form.component.scss'],
})
export class ImportVocabularyFormComponent {
  englishList: string;
  chineseList: string;
  pinyinList:string;
  vocabArray: any[];

  constructor() {}

  createVocabArray() {
    // Split the lists into arrays of individual words
    const englishWords = this.englishList.split('\n');
    const chineseWords = this.chineseList.split('\n');
    const pinyinWords = this.pinyinList.split('\n');
    // Create the array of objects with the english and chinese properties
    this.vocabArray = englishWords.map((english, i) => ({
      english,
      pinyin: pinyinWords[i],
      chinese: chineseWords[i],
      id: i
    }));

    console.log(this.vocabArray);
  }
}