import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  user: any = [];
  name: any;
  emailAdd:any;
  phone: any;

  // Add a reference to the Firestore collection
  users: AngularFirestoreCollection<any>;

  constructor(
    private router: Router,
    private auth: AuthService,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) { }

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






  logout(){
    this.auth.signOut();
  }
  editProfile() {
    this.router.navigate(['/profile/edit']);
    }

}

