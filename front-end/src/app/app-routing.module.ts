import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  /*{
    path: 'scenario/:titoloScenario',
    component: ScenarioComponent,
  },
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
