import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventComponent } from './pages/event/event.component';
import { EventItemComponent } from './pages/event-item/event-item.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { TeamComponent } from './pages/team/team.component';


const routes: Routes = [
  {path : 'Home', component: HomeComponent},
  {path : 'Events', component: EventComponent},
  {path : 'EventsItem', component: EventItemComponent},
  {path : 'Gallery', component: GalleryComponent},
  {path : 'Team', component: TeamComponent},
  {path : '**',pathMatch:'full', redirectTo: 'Home'},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
