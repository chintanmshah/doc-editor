import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocEditorComponent } from './doc-editor/doc-editor.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'edit', component: DocEditorComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
