import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImportVocabularyFormComponent } from './import-vocabulary-form.component';

describe('ImportVocabularyFormComponent', () => {
  let component: ImportVocabularyFormComponent;
  let fixture: ComponentFixture<ImportVocabularyFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportVocabularyFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImportVocabularyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
