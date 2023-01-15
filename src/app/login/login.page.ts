import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string ;
  password: string;

  constructor(
    private router: Router,
    private auth: AuthService,
    private toastr: ToastController

  ) { }

  ngOnInit() {
  }


  async login(){
    if(this.email && this.password){

      this.auth.signIn(this.email, this.password);
      this.router.navigate(['/tab-nav/home']);
    }else{
      this.toast("Please your email and password!",'warning');
    }

  }










  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000

    });

      toast.present();

  }//end of toast
}
