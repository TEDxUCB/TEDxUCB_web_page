import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventComponent } from './pages/event/event.component';
import { EventItemComponent } from './pages/event-item/event-item.component';


const routes: Routes = [
  {path : 'Home', component: HomeComponent},
  {path : 'Events', component: EventComponent},
  {path : 'EventsItem', component: EventItemComponent},
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
