import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  userSubject$ = new Subject<any>();

  constructor(
    public authFire: AngularFireAuth,
    public route: Router,
    public firestore: AngularFirestore
  ) {
    this.authFire.authState.subscribe((user) => {
      console.log('userData: ', JSON.stringify(user));

      if (user) {
        this.userData = user;
        this.userSubject$.next(this.userData);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        this.userSubject$.next(null);
        localStorage.removeItem('user');
      }
    });
  }

  loginWithEmail(email: string, password: string) {
    return this.authFire
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(JSON.stringify(result.user));
        this.storeUserData(result.user);
        this.route.navigate(['/']);
      });
  }

  registerUser(email: string, password: string) {
    return this.authFire
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(JSON.stringify(result.user));
        this.storeUserData(result.user);
        this.sendVerificationEmail();
        this.route.navigate(['/verify-user']);
      });
  }

  sendVerificationEmail() {
    return this.authFire.currentUser.then((u: any) =>
      u.sendEmailVerification()
    );
  }

  get userInfo(): any {
    return this.userData;
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  logout() {
    this.authFire.signOut().then(() => {
      localStorage.removeItem('user');
      this.route.navigate(['/login']);
    });
  }

  storeUserData(user: any) {
    this.firestore
      .collection('users')
      .doc(user.uid)
      .set({
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
      })
      .then((result) => {
        console.log(JSON.stringify(result));
      });
  }
}
