import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabnavPage } from './tabnav.page';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: 'tab-nav',
    component: TabnavPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),
       // canActivate: [AuthGuard]
      },
      {
        path: 'weather',
        loadChildren: () => import('../weather/weather.module').then( m => m.WeatherPageModule),
        //canActivate: [AuthGuard]
      },
      {
        path: 'forum',
        loadChildren: () => import('../forum/forum.module').then( m => m.ForumPageModule),
       // canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule),
        //canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tab-nav/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}









