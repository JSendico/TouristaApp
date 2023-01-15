import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService

  ){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log(this.auth.user$); // Print out the value of the user$ property

    return this.auth.user$.pipe(
      take(1),
      map(user => user ? true : false),
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }



}
