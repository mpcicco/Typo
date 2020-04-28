import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WordiBombComponent } from './wordi-bomb/wordi-bomb.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'wordi-bomb',
    component: WordiBombComponent,
  },
  /*
  { path: '', redirectTo: '/scenario/-', pathMatch: 'full' },
  { path: '**', redirectTo: '/scenario/-' }*/

  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
