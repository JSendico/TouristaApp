import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',

  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {


  name: string;
  email:string;
  phone:string;

  user: any = [];


  constructor(
    private router: Router,
    private auth: AuthService,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private loadingController: LoadingController,
    private toaststr: ToastController
  ) { }
//GET DATA
  async ngOnInit() {
    this.afAuth.authState.subscribe(currentUser => {
        this.afs.collection('user').doc(currentUser?.uid).get()
            .subscribe(snapshot => {
              if (snapshot.exists) {
                let result: any = snapshot.data();
                result.id = snapshot.id;
                this.user = result;
              } else {
                console.log("not exist.");
              }
            }, error => {
              console.log(error);
            })

    }, err => {
    console.error("Error:", err)
    });
  }

// //EDIT DATA

  async confirm(){
    const loading = await this.loadingController.create({
              message: "Updating.. Please Wait..",
              spinner: "crescent",
              showBackdrop: true

            });

            loading.present();


    this.afAuth.authState.subscribe(currentUser => {
      this.afs.collection('user').doc(currentUser?.uid).set({
        userName: this.user.userName,
       'userEmail': this.user.userEmail,
        'userPhone': this.user.userPhone
      },{merge: true})
      .then(() => {
        loading.dismiss();
          this.toast('Update Success!','success');
          this.router.navigate(['tab-nav/profile']);
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      })




  }, err => {
  console.error("Error:", err)
  });
  }

  async toast(message, status){
    const toast = await this.toaststr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000

    });
    toast.present();
}
}
