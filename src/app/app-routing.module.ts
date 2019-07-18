import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventComponent } from './pages/event/event.component';


const routes: Routes = [
  {path : 'Home', component: HomeComponent},
  {path : 'Events', component: EventComponent},
  {path : '**',pathMatch:'full', redirectTo: 'Home'},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
