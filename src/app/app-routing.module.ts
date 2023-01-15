import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },

  {
    path: 'profile/edit',
    loadChildren: () => import('./profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },

  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabnav/tabnav.module').then( m => m.TabnavPageModule)

  },

  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'forum/edit',
    loadChildren: () => import('./forum-edit/forum-edit.module').then( m => m.ForumEditPageModule)
  }

];

@NgModule({
  imports: [

  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
