import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import firebase from 'firebase/compat/app'
import firebase from 'firebase/compat/app';
//import * as firebase from 'firebase';
//import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable  } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class AuthService {

  user$: Observable<User>;

  user: User;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private LoadingCtrl: LoadingController,
    private toastr: ToastController
  ) {

     this.afauth.authState.pipe(
      switchMap( user => {

        if(user){
          return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
        }else{
          return of(null);
        }

      })

     )

  }//contructor ending

  //SignIn

  async signIn(email, password){
   const loading = await this.LoadingCtrl.create({
    message:'Authenticating...',
    spinner:'crescent',
    showBackdrop: true



   });

   loading.present();

   this.afauth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    this.afauth.signInWithEmailAndPassword(email,password).then((data) => {

      if(!data.user?.emailVerified){
        loading.dismiss();
        this.toast('Plase Verify Your Email Address!', 'warning');
        this.afauth.signOut();

      }else{
          loading.dismiss();
          this.router.navigate(['/tab-nav/home']);

      }

    })
    .catch(error=>{
      loading.dismiss();
      this.toast(error.message, 'danger');
    })

   })
   .catch(error=>{
    this.toast(error.message, 'danger');
   })
  }//signIn



//signOut
async signOut()
{
  const loading = await this.LoadingCtrl.create({
    spinner:'crescent',
    showBackdrop: true

  })
  loading.present();
  this.afauth.signOut()
  .then(() =>{
    loading.dismiss();
    this.router.navigate(['/login']);
  })
}//end of signOut








//Toast MEssage

  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000

    });

      toast.present();

  }//end of toast
  update_student(userId, user) {
    this.afs.doc(this.user + '/' + userId).update(user);
  }


}


