import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ImportVocabularyFormComponent } from './flows/import-vocabulary-form/import-vocabulary-form.component';
import { MatchingComponent } from './flows/matching/matching.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'vocab',
    component: MatchingComponent
  },
  {
    path: 'import',
    component: ImportVocabularyFormComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
