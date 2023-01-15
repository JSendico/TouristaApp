import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

//Firebase
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

//ENVIRONMENT
import { environment  } from '../environments/environment.prod';

//AUTH SERVICES
import { AuthService } from './services/auth.service';

//AUTH GUARD
import { AuthGuard } from './guards/auth.guard';
import { StatusBar } from '@capacitor/status-bar';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule

  ],
  providers: [
    AuthGuard,
    AuthService,
    {
    provide:
    RouteReuseStrategy,
    useClass:
    IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
