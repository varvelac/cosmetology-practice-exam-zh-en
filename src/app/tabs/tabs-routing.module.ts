import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionFormComponent } from '../flows/question-form/question-form.component';
import { QuestionFormModule } from '../flows/question-form/question-form.module';
import { QuestionsComponent } from '../flows/questions/questions.component';
import { QuestionsModule } from '../flows/questions/questions.module';
import { ResultsModule } from '../flows/results/results.module';
import { WelcomeComponent } from '../flows/welcome/welcome.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../flows/welcome/welcome.module').then(m => m.WelcomeModule)
      },
      {
        path: 'quiz',
        loadChildren: () => import('../flows/questions/questions.module').then(m => m.QuestionsModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component:WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'quiz',
    component: QuestionsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
